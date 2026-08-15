import { useCallback, useEffect, useMemo, useState } from 'react'
import { LanguageContext, type LanguageContextValue } from './languageContext'
import { translations, type Lang } from './translations'

const STORAGE_KEY = 'dimzzxcode-lang'

function setMeta(nameOrProperty: string, content: string, isProperty = false) {
  const attr = isProperty ? 'property' : 'name'
  let el = document.head.querySelector(`meta[${attr}="${nameOrProperty}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, nameOrProperty)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null
    return stored === 'en' || stored === 'id' ? stored : 'id'
  })

  useEffect(() => {
    const seo = translations[lang].seo
    document.documentElement.lang = lang
    document.title = seo.title
    setMeta('description', seo.description)
    setMeta('og:title', seo.title, true)
    setMeta('og:description', seo.description, true)
    setMeta('twitter:title', seo.title)
    setMeta('twitter:description', seo.description)
    setMeta('og:locale', lang === 'id' ? 'id_ID' : 'en_US', true)
    setMeta('og:locale:alternate', lang === 'id' ? 'en_US' : 'id_ID', true)
  }, [lang])

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang, setLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

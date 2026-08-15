import { createContext } from 'react'
import { translations, type Lang } from './translations'

export interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  t: typeof translations.en
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)

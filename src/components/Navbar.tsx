import { useState } from 'react'
import { Mail, Menu, X, Languages } from 'lucide-react'
import { useScrolled } from '../hooks/useScrolled'
import { useLanguage } from '../i18n/useLanguage'

const NAV_LINKS = ['about', 'services', 'experience', 'skills', 'projects', 'contact'] as const

interface NavbarProps {
  active: string
}

export default function Navbar({ active }: NavbarProps) {
  const scrolled = useScrolled(50)
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useLanguage()

  const handleLinkClick = () => setOpen(false)

  const toggleLang = () => setLang(lang === 'id' ? 'en' : 'id')

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300${scrolled ? ' scrolled' : ''}`}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group"
          aria-label="DimzzXCode Home"
        >
          <img
            src="/dimzzxcode_logo.png"
            alt="DimzzXCode logo"
            width={32}
            height={32}
            className="w-8 h-8 rounded-lg transition-all duration-300 group-hover:scale-110"
          />
          <span className="font-black text-lg tracking-tight text-white">
            Dimzz<span className="gradient-text">XCode</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-7" role="list">
          {NAV_LINKS.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="nav-link"
                style={{ color: active === id ? '#36ADA3' : undefined }}
              >
                {t.nav[id]}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Burger */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleLang}
            className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full border border-white/15 bg-white/5 text-slate-300 hover:text-teal-DEFAULT hover:border-teal-DEFAULT/40 transition-all"
            aria-label={t.nav.toggleLabel}
            title={t.nav.toggleLabel}
          >
            <Languages size={14} aria-hidden="true" />
            {lang === 'id' ? 'EN' : 'ID'}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex btn-primary text-sm py-2.5 px-5"
          >
            <Mail size={15} aria-hidden="true" />
            {t.nav.hireMe}
          </a>
          <button
            id="burger"
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={open ? 'open' : undefined}
        role="navigation"
        aria-label="Mobile navigation"
      >
        <div className="glass-dark mx-4 mb-4 rounded-xl p-5">
          <ul className="flex flex-col gap-1" role="list">
            {NAV_LINKS.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={handleLinkClick}
                  className="block py-2.5 px-3 rounded-lg text-sm font-500 text-slate-300 hover:bg-white/5 hover:text-teal-DEFAULT transition-colors"
                >
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-3">
            <button
              type="button"
              onClick={toggleLang}
              className="inline-flex items-center justify-center gap-1.5 text-xs font-bold px-3 py-2 rounded-full border border-white/15 bg-white/5 text-slate-300 hover:text-teal-DEFAULT hover:border-teal-DEFAULT/40 transition-all"
              aria-label={t.nav.toggleLabel}
            >
              <Languages size={14} aria-hidden="true" />
              {lang === 'id' ? 'EN' : 'ID'}
            </button>
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="btn-primary w-full justify-center text-sm"
            >
              {t.nav.contactMe}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
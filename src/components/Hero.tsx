import { useEffect } from 'react'
import { Mail, ChevronDown } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'

const TOKEN_STYLES: Record<string, string> = {
  sw: 'text-white font-semibold',
}

const TOKEN_VALUES: Record<string, string> = {
  sw: 'Software Engineer',
}

function renderParagraph(text: string) {
  const parts = text.split(/(\{\{\w+\}\})/g)
  return parts.map((part, i) => {
    const match = part.match(/^\{\{(\w+)\}\}$/)
    if (match && TOKEN_STYLES[match[1]]) {
      return (
        <span key={i} className={TOKEN_STYLES[match[1]]}>
          {TOKEN_VALUES[match[1]]}
        </span>
      )
    }
    return <span key={i}>{part}</span>
  })
}

export default function Hero() {
  const { t } = useLanguage()

  useEffect(() => {
    const els = document.querySelectorAll('#hero .reveal')
    const timers = Array.from(els).map((el, i) =>
      setTimeout(() => el.classList.add('visible'), 200 + i * 150),
    )
    return () => timers.forEach((timer) => clearTimeout(timer))
  }, [])

  return (
    <section
      id="hero"
      className="hero-bg relative min-h-screen flex items-center overflow-hidden noise"
      aria-label="Hero"
    >
      <div
        className="blob absolute top-1/4 right-1/4 w-72 h-72 opacity-20"
        style={{
          background: 'radial-gradient(circle, #36ada3, transparent)',
          animationDelay: '-2s',
        }}
      ></div>
      <div
        className="blob absolute bottom-1/3 left-10 w-48 h-48 opacity-15"
        style={{
          background: 'radial-gradient(circle, #2f578a, transparent)',
          animationDelay: '-4s',
        }}
      ></div>
      <div
        className="blob absolute top-10 left-1/3 w-32 h-32 opacity-10"
        style={{
          background: 'radial-gradient(circle, #232f72, transparent)',
          animationDelay: '-1s',
        }}
      ></div>

      <div
        className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"
        style={{ animation: 'gridPan 24s linear infinite' }}
        aria-hidden="true"
      ></div>

      <div className="relative w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 pt-28 pb-20 z-10">
        <div
          className="hidden lg:block absolute right-5 sm:right-8 lg:right-10 top-1/2 -translate-y-1/2 opacity-70 select-none pointer-events-none font-mono text-m leading-relaxed text-teal-DEFAULT"
          aria-hidden="true"
        >
          <div style={{ animation: 'float 7s ease-in-out infinite' }}>
            <div className="text-slate-400">// hello world</div>
            <div>
              <span className="text-blue-400">class</span>{' '}
              <span className="text-yellow-300">Developer</span> {'{'}
            </div>
            <div>
              &nbsp;&nbsp;<span className="text-blue-300">nickname</span>:{' '}
              <span className="text-green-300">'DimzzXCode'</span>,
            </div>
            <div>
              &nbsp;&nbsp;<span className="text-blue-300">fullName</span>:{' '}
              <span className="text-green-300">'Dimas Cahyo Nur Aditya'</span>,
            </div>
            <div>&nbsp;&nbsp;<span className="text-blue-300">stack</span>: [</div>
            {t.hero.codeBlock.stack.map((tech) => (
              <div key={tech}>
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-300">'{tech}'</span>,
              </div>
            ))}
            <div>&nbsp;&nbsp;],</div>
            <div>
              &nbsp;&nbsp;<span className="text-blue-300">since</span>:{' '}
              <span className="text-orange-300">2022</span>,
            </div>
            <div>{'}'}</div>
          </div>
        </div>

        <div className="reveal inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-8 text-sm font-medium text-teal-400">
          <span
            className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"
            aria-hidden="true"
          ></span>
          {t.hero.badge}
        </div>

        <p
          className="reveal text-2xl sm:text-3xl font-bold text-slate-300 mb-3"
          style={{ transitionDelay: '0.05s' }}
        >
          {t.hero.greeting}
        </p>

        <h1
          className="reveal text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tighter mb-3"
          style={{ transitionDelay: '0.1s' }}
        >
          <span className="text-white">{t.hero.namePrefix} </span>
          <span className="gradient-text">Dimas</span>
        </h1>

        <div className="reveal flex flex-wrap gap-2 mb-6" style={{ transitionDelay: '0.2s' }}>
          {t.hero.badges.map((badge) => (
            <span key={badge} className="tech-badge text-xs uppercase tracking-widest">
              {badge}
            </span>
          ))}
        </div>

        <p
          className="reveal text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl md:max-w-2xl mb-10 font-light"
          style={{ transitionDelay: '0.3s' }}
        >
          {renderParagraph(t.hero.paragraph)}
        </p>

        <div className="reveal flex flex-wrap items-center gap-x-8 gap-y-6" style={{ transitionDelay: '0.4s' }}>
          <a href="#contact" className="btn-primary">
            <Mail size={16} aria-hidden="true" />
            {t.hero.contactMe}
          </a>
          <div className="grid grid-cols-3 gap-6 sm:border-l sm:border-white/10 sm:pl-8">
            <div>
              <div className="text-3xl font-black gradient-text leading-none">4+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stats.yearsExp}</div>
            </div>
            <div>
              <div className="text-3xl font-black gradient-text leading-none">10+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stats.projects}</div>
            </div>
            <div>
              <div className="text-3xl font-black gradient-text leading-none">5+</div>
              <div className="text-xs text-slate-400 mt-1 font-medium">{t.hero.stats.techStack}</div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-label={t.hero.scrollHint}
      >
        <span className="scroll-hint-text" aria-hidden="true">
          Scroll
        </span>
        <ChevronDown className="scroll-hint-chevron" size={14} aria-hidden="true" />
      </a>

      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(transparent, #0b0d3a)' }}
        aria-hidden="true"
      ></div>
    </section>
  )
}
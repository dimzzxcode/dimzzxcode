import { Terminal, ArrowRight } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'

export default function About() {
  const { lang, t } = useLanguage()

  return (
    <section id="about" className="py-24 sm:py-32 relative" aria-label="About">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left: Visual */}
          <div className="reveal-left order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-teal-500/20 to-blue-500/20 blur-xl opacity-70 group-hover:opacity-100 transition duration-500 pointer-events-none"></div>

              <div className="glass rounded-2xl p-8 relative overflow-hidden border border-white/10 z-10">
                <div
                  className="absolute top-0 right-0 w-12 h-12 opacity-40 pointer-events-none"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M48 2H30M46 0V18"
                      stroke="#36ADA3"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <circle cx="24" cy="24" r="1.5" fill="#36ADA3" opacity="0.6" />
                    <circle cx="12" cy="36" r="1.5" fill="#36ADA3" opacity="0.3" />
                  </svg>
                </div>

                <div className="relative w-64 h-64 mx-auto mb-6 group-hover:scale-105 transition duration-300">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400/60 to-blue-500/60 blur-xl opacity-70 animate-float"></div>
                  <div
                    className="absolute -inset-1 rounded-full"
                    style={{
                      background:
                        'conic-gradient(from 0deg, #36ada3, #232f72, #0b0d3a, #36ada3)',
                      animation: 'spin-slow 6s linear infinite',
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 rounded-full flex flex-col items-center justify-center gap-1 overflow-hidden border border-white/20"
                    style={{ background: 'linear-gradient(135deg, #0b0d3a, #16225e)' }}
                  >
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          'radial-gradient(circle, #36ada3 1px, transparent 1px)',
                        backgroundSize: '10px 10px',
                      }}
                    ></div>
                    <Terminal
                      size={88}
                      color="#36ADA3"
                      strokeWidth={2.2}
                      className="relative"
                      aria-hidden="true"
                    />
                    <span className="relative text-white text-6xl font-black tracking-wider">
                      DC
                    </span>
                  </div>
                  <span className="absolute -bottom-3 right-2 z-10 text-base font-bold uppercase tracking-wider text-teal-400 bg-[#0b0d3a] border border-teal-500/40 rounded-lg px-3 py-1.5 shadow-lg shadow-black/40">
                    AI
                  </span>
                </div>

                <h2 className="text-center text-2xl font-bold text-white mb-1.5 tracking-wide">
                  Dimas Cahyo Nur Aditya
                </h2>
                <p className="text-center text-teal-DEFAULT text-base mb-6 font-medium tracking-wide">
                  Software Engineer
                </p>
              </div>

              <div
                className="absolute -bottom-4 -right-4 glass rounded-xl px-5 py-3 text-sm font-bold text-teal-DEFAULT border border-teal-500/30 shadow-lg shadow-black/40 animate-float z-20"
                style={{ animationDelay: '-3s' }}
              >
                <span className="text-white font-black text-base md:text-lg mr-1">4+</span>
                {t.about.yearsDev}
              </div>
            </div>
          </div>

          {/* Right: Text */}
          <div className="reveal-right order-1 lg:order-2">
            <p className="text-teal-DEFAULT text-sm font-bold uppercase tracking-widest mb-3">
              {t.about.label}
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-2 accent-line">
              {t.about.titleLine1}
              <br />
              <span className="gradient-text">{t.about.titleLine2}</span>
            </h2>

            <div className="space-y-4 mt-8 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                {t.about.cta}
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href={`/resume/cv-dimascahyonuraditya-${lang}.pdf`}
                download
                className="btn-outline"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {t.about.downloadCv}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
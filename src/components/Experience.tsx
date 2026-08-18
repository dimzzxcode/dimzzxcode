import { Building2 } from 'lucide-react'
import { employment, experienceItems } from '../data/experience'
import { useLanguage } from '../i18n/useLanguage'

export default function Experience() {
  const { lang, t } = useLanguage()
  const sorted = [...experienceItems].sort((a, b) => a.date.localeCompare(b.date))

  return (
    <section id="experience" className="py-24 sm:py-32" aria-label="Experience">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-teal-DEFAULT text-sm font-bold uppercase tracking-widest mb-3">
            {t.experience.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white accent-line-center">
            {t.experience.title}
          </h2>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm sm:text-base">
            {t.experience.description}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-line" aria-hidden="true" />

          {/* Employment */}
          <div className="relative pl-12 pb-10 reveal" style={{ transitionDelay: '0s' }}>
            <span className="timeline-dot absolute" style={{ left: 12, top: 29 }} aria-hidden="true" />
            <div
              className="glass rounded-2xl p-6"
              style={{
                borderColor: 'rgba(54, 173, 163, 0.45)',
                background:
                  'radial-gradient(circle at 0% 0%, rgba(54, 173, 163, 0.12), transparent 55%), rgba(35, 47, 114, 0.35)',
                boxShadow: '0 0 24px rgba(54, 173, 163, 0.15)',
              }}
            >
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <h3 className="text-white font-bold text-base">{employment.role}</h3>
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(255, 255, 255, 0.12)', color: '#e2e8f0' }}
                >
                  {employment.period[lang]}
                </span>
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full text-red-400 bg-red-500/10 border border-red-500/20">
                  {t.experience.types[employment.type]}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="flex items-center gap-2 text-teal-DEFAULT text-sm font-bold">
                  <Building2 size={16} aria-hidden="true" /> {employment.organization[lang]}
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                {employment.description[lang]}
              </p>
            </div>
          </div>

          {/* Projects */}
          {sorted.map((item, index) => (
            <div
              key={item.title.id}
              className="relative pl-12 pb-10 last:pb-0 reveal"
              style={{ transitionDelay: `${Math.min((index + 1) * 0.08, 0.4)}s` }}
            >
              <span className="timeline-dot absolute" style={{ left: 12, top: 29 }} aria-hidden="true" />
              <div className="glass rounded-2xl p-6 border border-white/5">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255, 255, 255, 0.12)', color: '#e2e8f0' }}
                  >
                    {item.year}
                  </span>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: 'rgba(255, 255, 255, 0.06)', color: '#94a3b8' }}
                  >
                    {item.role}
                  </span>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{item.title[lang]}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  {item.description[lang]}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
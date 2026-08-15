import { experienceItems } from '../data/experience'
import { useLanguage } from '../i18n/useLanguage'

export default function Experience() {
  const { lang, t } = useLanguage()
  const sorted = [...experienceItems].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section id="experience" className="py-24 sm:py-32" aria-label="Experience">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-teal-DEFAULT text-sm font-700 uppercase tracking-widest mb-3">
            {t.experience.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white accent-line-center">
            {t.experience.title}
          </h2>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm sm:text-base">
            {t.experience.description}
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
          {sorted.map((item, index) => (
            <article
              key={item.title.id}
              className="glass rounded-2xl p-6 card-hover reveal border border-white/5 flex flex-col"
              style={{ transitionDelay: `${Math.min(index * 0.05, 0.35)}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(255, 255, 255, 0.12)', color: '#e2e8f0' }}
                >
                  {item.year}
                </span>
                <span
                  className="text-xs font-600 px-2.5 py-1 rounded-full"
                  style={{ background: 'rgba(54, 173, 163, 0.15)', color: '#36ada3' }}
                >
                  {item.role}
                </span>
              </div>
              <h3 className="text-white font-bold text-base mb-2">{item.title[lang]}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                {item.description[lang]}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {item.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
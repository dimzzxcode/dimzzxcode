import { Wrench, Heart, Vote, BookOpen, School, Package } from 'lucide-react'
import { projects } from '../data/projects'
import { useLanguage } from '../i18n/useLanguage'

const ICON_MAP = {
  wrench: Wrench,
  heart: Heart,
  vote: Vote,
  book: BookOpen,
  school: School,
  package: Package,
} as const

type IconKey = keyof typeof ICON_MAP

export default function Projects() {
  const { lang, t } = useLanguage()
  const sorted = [...projects].sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section id="projects" className="py-24 sm:py-32" aria-label="Personal Projects">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-teal-DEFAULT text-sm font-bold uppercase tracking-widest mb-3">
            {t.projects.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white accent-line-center">
            {t.projects.title}
          </h2>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm sm:text-base">
            {t.projects.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((project, index) => {
            const Icon = ICON_MAP[project.icon as IconKey]
            const number = String(index + 1).padStart(2, '0')
            return (
              <article
                key={project.title.id}
                className="glass rounded-2xl overflow-hidden card-hover reveal border border-white/5 flex flex-col"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                {/* Project header bar */}
                <div className="h-1.5 w-full" style={{ background: project.gradient }}></div>
                <div className="p-7 flex flex-col flex-1">
                  {/* Icon + number */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ background: project.iconGradient }}
                    >
                      <Icon size={22} color={project.iconColor} aria-hidden="true" />
                    </div>
                    <span className="text-5xl font-black opacity-10 text-white leading-none">
                      {number}
                    </span>
                  </div>

                  <h3 className="text-white font-bold text-lg mb-3">{project.title[lang]}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                    {project.description[lang]}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    <span
                      className={
                        project.type === 'freelance'
                          ? 'inline-flex items-center font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[0.7rem] text-orange-400 bg-orange-500/10 border border-orange-500/20'
                          : 'inline-flex items-center font-semibold px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[0.7rem] text-red-400 bg-red-500/10 border border-red-500/20'
                      }
                    >
                      {t.projects.type[project.type]}
                    </span>
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
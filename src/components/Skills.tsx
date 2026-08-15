import StackIcon from './StackIcon'
import { skills, type LevelColor } from '../data/skills'
import { useLanguage } from '../i18n/useLanguage'

const badgeBase =
  'text-[11px] font-semibold px-2.5 py-1 rounded-full border'

const levelStyles: Record<LevelColor, string> = {
  teal: `${badgeBase} text-teal-400 bg-teal-500/10 border-teal-500/20`,
  sky: `${badgeBase} text-sky-400 bg-sky-500/10 border-sky-500/20`,
  purple: `${badgeBase} text-purple-400 bg-purple-500/10 border-purple-500/20`,
  amber: `${badgeBase} text-amber-400 bg-amber-500/10 border-amber-500/20`,
}

export default function Skills() {
  const { lang, t } = useLanguage()

  return (
    <section
      id="skills"
      className="py-24 sm:py-32 relative"
      style={{
        background: 'linear-gradient(180deg, #0b0d3a 0%, #0f1248 50%, #0b0d3a 100%)',
      }}
      aria-label="Skills"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-teal-DEFAULT text-sm font-700 uppercase tracking-widest mb-3">
            {t.skills.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white accent-line-center">
            {t.skills.title}
          </h2>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm sm:text-base">
            {t.skills.description}
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={
                skill.plan
                  ? 'glass rounded-2xl p-6 card-hover reveal border border-white/10 border-dashed opacity-60 flex flex-col justify-between'
                  : 'glass rounded-2xl p-6 card-hover reveal border border-white/5 flex flex-col justify-between'
              }
              style={{ transitionDelay: `${Math.min(index * 0.04, 0.6)}s` }}
              title={skill.plan ? t.skills.comingSoon : undefined}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/5 border border-white/10">
                    <StackIcon name={skill.icon} variant="dark" className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">{skill.name}</h3>
                    <p className="text-slate-400 text-xs">{skill.subtitle[lang]}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-2">
                <span className={levelStyles[skill.levelColor]}>
                  {t.skills.levels[skill.level]}
                </span>
                {skill.tag && (
                  <span className="text-slate-400 text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/10 bg-white/5">
                    {skill.tag}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
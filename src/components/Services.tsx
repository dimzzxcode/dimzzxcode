import { Layout, BarChart3, Layers, Activity, Smartphone, Sparkles } from 'lucide-react'
import { useLanguage } from '../i18n/useLanguage'

export default function Services() {
  const { t } = useLanguage()

  const cardDefs = [
    {
      icon: Layout,
      title: t.services.cards.web.title,
      desc: t.services.cards.web.description,
      badges: t.services.cards.web.badges,
    },
    {
      icon: BarChart3,
      title: t.services.cards.backend.title,
      desc: t.services.cards.backend.description,
      badges: t.services.cards.backend.badges,
    },
    {
      icon: Sparkles,
      title: t.services.cards.ai.title,
      desc: t.services.cards.ai.description,
      badges: t.services.cards.ai.badges,
      highlight: true,
    },
    {
      icon: Smartphone,
      title: t.services.cards.mobile.title,
      desc: t.services.cards.mobile.description,
      badges: t.services.cards.mobile.badges,
    },
    {
      icon: Layers,
      title: t.services.cards.api.title,
      desc: t.services.cards.api.description,
      badges: t.services.cards.api.badges,
    },
    {
      icon: Activity,
      title: t.services.cards.maintenance.title,
      desc: t.services.cards.maintenance.description,
      badges: t.services.cards.maintenance.badges,
    },
  ]

  return (
    <section
      id="services"
      className="py-24 sm:py-32 relative"
      style={{
        background: 'linear-gradient(180deg, #0b0d3a 0%, #0f1248 50%, #0b0d3a 100%)',
      }}
      aria-label="Services"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-teal-DEFAULT text-sm font-bold uppercase tracking-widest mb-3">
            {t.services.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white accent-line-center">
            {t.services.title}
          </h2>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cardDefs.map((card, index) => {
            const Icon = card.icon
            return (
              <article
                key={card.title}
                className="glass rounded-2xl p-7 card-hover reveal border border-white/5"
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: card.highlight
                      ? 'linear-gradient(135deg, rgba(54, 173, 163, 0.4), rgba(47, 87, 138, 0.4))'
                      : 'linear-gradient(135deg, rgba(54, 173, 163, 0.3), rgba(47, 87, 138, 0.3))',
                  }}
                >
                  <Icon size={22} color="#36ADA3" aria-hidden="true" />
                </div>
                <h3 className="text-white font-bold text-lg mb-3">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {card.badges.map((badge) => (
                    <span key={badge} className="tech-badge">
                      {badge}
                    </span>
                  ))}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
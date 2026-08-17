import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { demoRegistry } from './registry'

function PortfolioHub() {
  useReveal()

  return (
    <main className="py-24 sm:py-32" aria-label="Portfolio Demos">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-teal-DEFAULT text-sm font-700 uppercase tracking-widest mb-3">
            Portfolio Demos
          </p>
          <h1 className="text-3xl sm:text-4xl font-black text-white accent-line-center">
            Portfolio Demos
          </h1>
          <p className="text-slate-400 mt-6 max-w-xl mx-auto text-sm sm:text-base">
            Kumpulan demo aplikasi yang pernah saya kerjakan. Pilih salah satu untuk melihat
            tampilannya.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoRegistry.map((demo, index) => {
            const Icon = demo.icon
            return (
              <article
                key={demo.slug}
                className="glass rounded-2xl card-hover reveal border border-white/5 flex flex-col p-7"
                style={{ transitionDelay: `${index * 0.08}s` }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-teal-500/10 border border-teal-500/20 mb-5">
                  <Icon size={22} color="#36ADA3" aria-hidden="true" />
                </div>
                <h2 className="text-white font-bold text-lg mb-3">{demo.name}</h2>
                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                  {demo.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {demo.tech.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <Link to={demo.path} className="btn-primary w-full justify-center mt-auto">
                  Buka Demo
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </article>
            )
          })}
        </div>

        <div className="text-center mt-14">
          <Link to="/" className="btn-outline">
            <ArrowLeft size={16} aria-hidden="true" />
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  )
}

export default PortfolioHub
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

interface DemoShellProps {
  name: string
  tech?: string[]
  description?: string
}

function DemoShell({ name, tech = [], description }: DemoShellProps) {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-5 text-center bg-navy-dark"
      aria-label={`Demo ${name}`}
    >
      <p className="text-teal-DEFAULT text-sm font-700 uppercase tracking-widest mb-3">
        Portfolio Demo
      </p>
      <h1 className="text-4xl sm:text-6xl font-black text-white gradient-text mb-6">{name}</h1>
      {description && (
        <p className="text-slate-400 max-w-xl text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>
      )}
      {tech.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tech.map((item) => (
            <span key={item} className="tech-badge">
              {item}
            </span>
          ))}
        </div>
      )}
      <Link to="/portfolio" className="btn-outline">
        <ArrowLeft size={16} aria-hidden="true" />
        Kembali ke Portfolio
      </Link>
    </main>
  )
}

export default DemoShell
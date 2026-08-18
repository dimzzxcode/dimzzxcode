import { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import { demoRegistry } from './portfolio/registry'

const PortfolioHub = lazy(() => import('./portfolio/PortfolioHub'))

function Fallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-navy-dark">
      <div className="text-teal-400 text-sm font-bold uppercase tracking-widest animate-pulse">
        Loading…
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<PortfolioHub />} />
          {demoRegistry.map((demo) => (
            <Route key={demo.slug} path={demo.path} element={<demo.component />} />
          ))}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
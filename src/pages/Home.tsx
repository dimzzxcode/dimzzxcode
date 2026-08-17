import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import BackToTop from '../components/BackToTop'
import { useReveal } from '../hooks/useReveal'
import { useActiveSection } from '../hooks/useActiveSection'

function Home() {
  const active = useActiveSection()
  useReveal()

  return (
    <>
      <Navbar active={active} />
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Services />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

export default Home
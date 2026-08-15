import { useEffect, useState } from 'react'

export function useActiveSection() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.4 },
    )
    sections.forEach((sec) => obs.observe(sec))
    return () => obs.disconnect()
  }, [])

  return active
}

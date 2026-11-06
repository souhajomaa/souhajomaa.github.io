import { useEffect, useState } from 'react'

const links = [
  ['about', 'About Me'],
  ['education', 'Education'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['certificates', 'Certificates'],
  ['activities', 'Activities'],
  ['contact', 'Contact'],
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('about')

  // Surligne le lien de la section visible à l'écran
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    links.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const linkClass = (id) =>
    `transition-colors ${active === id ? 'text-sky' : 'text-gray-400 hover:text-sky'}`

  return (
    <nav className="sticky top-0 z-20 backdrop-blur bg-ink/80 border-b border-line">
       <div className="page-container py-4 flex items-center justify-between">
            <a href="#about" className="font-mono text-white text-sm">
          <span className="text-violet">soujo</span>
        </a>

        {/* Liens desktop */}
        <ul className="hidden xl:flex gap-6 text-xs font-mono">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} className={linkClass(id)}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden sm:inline-block text-xs px-4 py-2 rounded-full bg-gradient-to-r from-violet to-sky text-white font-medium">
            Get in Touch
          </a>

          {/* Bouton hamburger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden text-gray-300 hover:text-sky"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <ul className="xl:hidden border-t border-line px-6 py-3 space-y-3 font-mono text-sm bg-ink/95">
          {links.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={() => setOpen(false)} className={`block ${linkClass(id)}`}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
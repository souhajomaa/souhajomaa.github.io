import { useEffect } from 'react'
import TechList from './TechList.jsx'

export default function DetailModal({ item, onClose }) {
  // Fermer avec Échap + bloquer le défilement de la page derrière la fenêtre
  useEffect(() => {
    if (!item) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [item, onClose])

  if (!item) return null

  // Les expériences utilisent role/org, les projets title/subtitle
  const title = item.title ?? item.role
  const subtitle = item.subtitle ?? item.org

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      {/* Fond sombre : un clic dessus ferme la fenêtre */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />

      <div className="modal-in relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-line bg-panel p-6 sm:p-8 shadow-2xl">
        {/* Croix de fermeture */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          autoFocus
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full border border-line text-gray-400 hover:text-white hover:border-sky/60 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <h3 className="font-display text-xl sm:text-2xl font-bold text-white pr-12">{title}</h3>
        <p className="mt-1 text-sm">
          {subtitle && <span className="text-sky">{subtitle}</span>}
          {subtitle && item.date && <span className="text-gray-600"> · </span>}
          {item.date && <span className="font-mono text-xs text-gray-500">{item.date}</span>}
        </p>

        {/* Détails */}
        {item.details?.length > 0 && (
          <ul className="mt-6 space-y-2.5 text-sm text-gray-300 list-disc pl-5 marker:text-violet">
            {item.details.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        )}

        {/* Technologies */}
        {item.tech?.length > 0 && (
          <div className="mt-6">
            <TechList items={item.tech} />
          </div>
        )}

        {/* Liens : n'apparaissent que s'ils sont renseignés */}
        {(item.github || item.video) && (
          <div className="mt-6 flex flex-wrap gap-3">
            {item.github && (
              <a
                href={item.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line text-sm text-gray-200 hover:border-sky/60 hover:text-sky transition-colors"
              >
                <img src="https://cdn.simpleicons.org/github/white" alt="" className="w-4 h-4" />
                GitHub repository
              </a>
            )}
            {item.video && (
              <a
                href={item.video}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-line text-sm text-gray-200 hover:border-sky/60 hover:text-sky transition-colors"
              >
                <span aria-hidden="true">▶</span>
                Video demo
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
import { useState } from 'react'
import icons from '../data/techIcons.js'

function resolve(name) {
  const entry = icons[name]
  if (!entry) return { slugs: [], color: null }
  if (typeof entry === 'string') return { slugs: [entry], color: null }
  if (Array.isArray(entry)) return { slugs: entry, color: null }
  return { slugs: entry.slugs, color: entry.color ?? null }
}

export default function TechIcon({ name }) {
  const { slugs, color } = resolve(name)
  const [attempt, setAttempt] = useState(0)

  // Pas d'icône disponible : petite pastille avec le nom
  if (attempt >= slugs.length) {
    return (
      <span
        title={name}
        className="inline-flex items-center h-9 px-2.5 rounded-lg border border-line bg-white/10 font-mono text-[11px] text-gray-300"
      >
        {name}
      </span>
    )
  }

  const src = `https://cdn.simpleicons.org/${slugs[attempt]}${color ? `/${color}` : ''}`

  return (
    <span
      title={name}
      className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-line bg-white/10 hover:border-sky/60 transition-colors"
    >
      <img
        src={src}
        alt={name}
        loading="lazy"
        onError={() => setAttempt(attempt + 1)}
        className="w-5 h-5"
      />
    </span>
  )
}
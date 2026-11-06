import { useState } from 'react'
import TechList from './TechList.jsx'

export default function DetailCard({
  title,
  subtitle,
  date,
  summary,
  details = [],
  tech = [],
  link,
  linkLabel = 'View on GitHub →',
}) {
  const [open, setOpen] = useState(false)

  return (
    <article className="rounded-xl border border-line bg-panel p-6 flex flex-col hover:border-sky/60 transition-colors">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="text-white font-semibold">{title}</h3>
          {subtitle && <p className="text-sky text-sm mt-0.5">{subtitle}</p>}
        </div>
        <span className="text-xs text-gray-500 font-mono">{date}</span>
      </div>

      <p className="text-gray-400 text-sm mt-3">{summary}</p>

      {/* Détails affichés avec "View more" */}
      {open && (
        <ul className="mt-4 space-y-2 text-sm text-gray-300 list-disc pl-5 marker:text-violet">
          {details.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      )}

      <div className="mt-4">
        <TechList items={tech} />
      </div>

      <div className="mt-auto pt-4 flex flex-wrap items-center gap-4 text-sm">
        {details.length > 0 && (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="text-violet hover:text-sky transition-colors"
          >
            {open ? 'View less ↑' : 'View more ↓'}
          </button>
        )}
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="text-sky hover:underline">
            {linkLabel}
          </a>
        )}
      </div>
    </article>
  )
}
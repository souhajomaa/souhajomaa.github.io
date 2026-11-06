import Section from './Section.jsx'
import certificates from '../data/certificates.js'

export default function Certificates() {
  return (
    <Section id="certificates" command="ls certificates/">
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {certificates.map((c) => (
          <div
            key={c.name}
            className="rounded-xl border border-line bg-panel p-5 flex items-start justify-between gap-3"
          >
            <div>
              <h3 className="text-white font-semibold text-sm">{c.name}</h3>
              <p className="text-sky text-sm mt-1">{c.issuer}</p>
              <p className="text-xs text-gray-500 font-mono mt-2">{c.date}</p>
            </div>

            {c.file && (
              <a
                href={`${import.meta.env.BASE_URL}${c.file}`}
                download
                title="Download certificate"
                aria-label={`Download certificate: ${c.name}`}
                className="shrink-0 w-9 h-9 flex items-center justify-center rounded-full border border-line text-gray-400 hover:text-sky hover:border-sky/60 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 4v11m0 0l-4-4m4 4l4-4M5 20h14" />
                </svg>
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  )
}
import { useState } from 'react'
import Section from './Section.jsx'
import TechList from './TechList.jsx'
import DetailModal from './DetailModal.jsx'
import projects from '../data/projects.js'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <Section id="projects" command="ls -la projects/">
      <div className="grid auto-rows-fr gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="h-full flex flex-col rounded-xl border border-line bg-panel p-6 hover:border-sky/60 transition-colors"
          >
            <h3 className="text-white font-semibold leading-snug min-h-[3rem]">{p.title}</h3>
            
            <p className="mt-3 text-sm text-gray-400 line-clamp-3 min-h-[3.75rem]">{p.summary}</p>

            <div className="mt-4">
              <TechList items={p.tech} />
            </div>

            <div className="mt-auto pt-5">
              <button
                type="button"
                onClick={() => setSelected(p)}
                className="text-sm text-violet hover:text-sky transition-colors"
              >
                View more →
              </button>
            </div>
          </article>
        ))}
      </div>

      <DetailModal item={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
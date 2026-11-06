import { useState } from 'react'
import Section from './Section.jsx'
import TechList from './TechList.jsx'
import DetailModal from './DetailModal.jsx'
import experience from '../data/experience.js'

export default function Experience() {
  const [selected, setSelected] = useState(null)

  return (
    <Section id="experience" command="vim experiences">
      <div className="max-w-4xl space-y-8">
        {experience.map((job) => (
          <div key={job.role} className="relative pl-6 border-l border-line">
            <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gradient-to-br from-violet to-sky" />
            <div className="flex flex-wrap justify-between gap-2">
              <h3 className="text-white font-semibold">{job.role}</h3>
              <span className="text-xs text-gray-500 font-mono">{job.date}</span>
            </div>
            <p className="text-sky text-sm mt-0.5">{job.org}</p>
            <p className="text-gray-400 text-sm mt-2 max-w-2xl">{job.summary}</p>

            <div className="mt-3">
              <TechList items={job.tech} />
            </div>

            <button
              type="button"
              onClick={() => setSelected(job)}
              className="mt-3 text-sm text-violet hover:text-sky transition-colors"
            >
              View more →
            </button>
          </div>
        ))}
      </div>

      <DetailModal item={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
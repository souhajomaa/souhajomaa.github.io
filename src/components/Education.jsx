import Section from './Section.jsx'
import education from '../data/education.js'

export default function Education() {
  return (
    <Section id="education" command="cat education.md">
      <div className="divide-y divide-line border border-line rounded-xl bg-panel">
        {education.map((e) => (
          <div key={e.degree} className="flex flex-wrap justify-between gap-2 p-5">
            <div>
              <h3 className="text-white font-semibold">{e.degree}</h3>
              <p className="text-sky text-sm mt-0.5">{e.school}</p>
            </div>
            <span className="text-xs text-gray-500 ">{e.date}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
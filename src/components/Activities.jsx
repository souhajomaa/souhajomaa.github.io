import Section from './Section.jsx'
import activities from '../data/activities.js'

export default function Activities() {
  return (
    <Section id="activities" command="tail -f activities.log">
      <div className="space-y-4 font-mono text-sm">
        {activities.map((a) => (
          <div key={a.role} className="flex flex-wrap gap-x-3">
            <span className="text-gray-500">[{a.date}]</span>
            <span className="text-white">{a.role}</span>
            <span className="text-sky">@ {a.org}</span>
          </div>
        ))}
      </div>
      
    </Section>
  )
}
import Section from './Section.jsx'
import TechList from './TechList.jsx'
import skills from '../data/skills.js'

export default function Skills() {
  return (
    <Section id="skills" command="cat skills.conf">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {skills.map((group) => (
          <div key={group.title} className="rounded-xl border border-line bg-panel p-6">
            <h3 className="font-mono text-sm text-violet mb-4"># {group.title}</h3>
            <TechList items={group.items} />
          </div>
        ))}
      </div>
    </Section>
  )
}
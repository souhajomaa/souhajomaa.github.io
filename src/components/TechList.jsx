import TechIcon from './TechIcon.jsx'

export default function TechList({ items = [] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((name) => (
        <TechIcon key={name} name={name} />
      ))}
    </div>
  )
}
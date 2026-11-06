export default function Section({ id, command, path = '~', className = 'py-16 sm:py-20', children }) {
  return (
    <section id={id} className={`${className} border-t border-line scroll-mt-16`}>
      <div className="page-container">
        <h2 className="font-mono text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 flex flex-wrap items-center gap-x-2">
          <span className="text-violet">soujo@portfolio</span>
          <span className="text-gray-500">:</span>
          <span className="text-sky">{path}</span>
          <span className="text-gray-500">$</span>
          <span className="text-white">{command}</span>
          <span className="inline-block w-2 h-5 bg-sky animate-pulse" />
        </h2>
        {children}
      </div>
    </section>
  )
}
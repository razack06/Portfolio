import { flowSummary } from './diagramLayout.js'

/**
 * Card thumbnail: a mini "app window" showing the project's data flow as pills.
 * Stands in for a screenshot; derived from the project's diagram in profile.js.
 */
export default function ProjectThumb({ project }) {
  const steps = flowSummary(project.diagram)
  return (
    <div aria-hidden="true" className={`tone-${project.tone} bg-tone grid aspect-[16/11] place-items-center overflow-hidden rounded-2xl p-3`}>
      <div className="w-full rounded-xl bg-surface shadow-lg shadow-[#7a5a3a]/10 transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg] motion-reduce:group-hover:transform-none">
        {/* window bar */}
        <div className="flex items-center gap-1.5 border-b border-line px-3 py-1.5">
          <span className="size-2 rounded-full bg-[#f2a38a]" />
          <span className="size-2 rounded-full bg-[#f5cf84]" />
          <span className="size-2 rounded-full bg-[#9fd0b6]" />
          <span className="ml-2 h-1.5 w-16 rounded-full bg-surface-2" />
        </div>
        {/* data flow */}
        <ol className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 px-2 py-2.5">
          {steps.map((s, i) => (
            <li key={s} className="flex items-center gap-1">
              {i > 0 && <span className="text-tone text-[0.65rem]">→</span>}
              <span className="bg-tone text-tone whitespace-nowrap rounded-full px-2 py-0.5 text-[0.64rem] font-semibold leading-tight">{s}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

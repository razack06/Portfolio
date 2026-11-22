import { flowSummary } from './diagramLayout.js'

/** Card thumbnail: dark blueprint "terminal window" showing data flow */
export default function ProjectThumb({ project }) {
  const steps = flowSummary(project.diagram)
  return (
    <div aria-hidden="true" className={`tone-${project.tone} bg-tone grid aspect-[16/11] place-items-center overflow-hidden rounded-xl p-3`}>
      <div className="w-full rounded-lg border border-blue-500/20 bg-[#0a0f1e] shadow-lg transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-1deg] motion-reduce:group-hover:transform-none">
        {/* Terminal window bar */}
        <div className="flex items-center gap-1.5 border-b border-[#1e2d4a] px-3 py-1.5">
          <span className="size-2 rounded-full bg-red-500/60" />
          <span className="size-2 rounded-full bg-yellow-500/60" />
          <span className="size-2 rounded-full bg-green-500/60" />
          <span className="ml-2 font-mono text-[0.6rem] text-blue-400/40">data-flow</span>
        </div>
        {/* Data flow pills */}
        <ol className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1 px-2 py-2.5">
          {steps.map((s, i) => (
            <li key={s} className="flex items-center gap-1">
              {i > 0 && <span className="text-blue-500/50 text-[0.65rem]">→</span>}
              <span className="text-tone whitespace-nowrap rounded-md border border-blue-500/20 bg-blue-500/10 px-2 py-0.5 font-mono text-[0.64rem] font-semibold leading-tight">
                {s}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

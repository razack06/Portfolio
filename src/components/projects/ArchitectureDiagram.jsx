import { useId, useMemo } from 'react'
import { layoutDiagram, describeDiagram } from './diagramLayout.js'

// Colour of the small dot on each node, by kind
const kindClass = {
  device: 'fill-accent-2',
  service: 'fill-accent',
  db: 'fill-indigo-500',
  client: 'fill-muted',
}
const legend = [
  ['device', 'Device / input'],
  ['service', 'Service'],
  ['db', 'Data'],
  ['client', 'Client'],
]

function DiagramSvg({ diagram, orientation, title, className }) {
  const uid = useId().replace(/:/g, '')
  const L = useMemo(() => layoutDiagram(diagram, orientation), [diagram, orientation])
  const desc = useMemo(() => describeDiagram(diagram), [diagram])
  const h = orientation === 'h'

  return (
    <svg
      viewBox={`0 0 ${L.width} ${L.height}`}
      className={`h-auto w-full ${className}`}
      role="img"
      aria-labelledby={`${uid}-t ${uid}-d`}
    >
      <title id={`${uid}-t`}>{`${title} architecture`}</title>
      <desc id={`${uid}-d`}>{desc}</desc>
      <defs>
        <marker id={`${uid}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" className="fill-accent" />
        </marker>
      </defs>

      {/* Group boxes (e.g. PostgreSQL) */}
      {L.groups.map((g) => (
        <g key={g.id}>
          <rect x={g.x} y={g.y} width={g.w} height={g.h} rx="14" className="fill-accent/5 stroke-accent/40" strokeDasharray="4 4" />
          <text x={g.x + 10} y={g.y + 15} className="fill-accent font-mono" fontSize={h ? 10.5 : 10} fontWeight="500">
            {g.label}
          </text>
        </g>
      ))}

      {/* Edges */}
      {L.edges.map((e) => (
        <path
          key={`${e.from}-${e.to}`}
          d={e.d}
          className="diagram-edge flow"
          markerEnd={`url(#${uid}-arrow)`}
          markerStart={e.bi ? `url(#${uid}-arrow)` : undefined}
        />
      ))}

      {/* Nodes */}
      {L.nodes.map((n) => {
        const cx = n.x + n.w / 2
        const labelSize = h ? 13 : n.dense ? 11 : 12.5
        const subSize = h ? 10 : n.dense ? 9 : 10
        return (
          <g key={n.id}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="10" className="fill-surface stroke-line" strokeWidth="1.2" />
            <circle cx={n.x + 10} cy={n.y + 10} r="3" className={kindClass[n.kind] ?? 'fill-accent'} />
            <text x={cx} y={n.y + n.h / 2 - 2} textAnchor="middle" className="fill-ink font-sans" fontSize={labelSize} fontWeight="600">
              {n.label}
            </text>
            {n.sub && (
              <text x={cx} y={n.y + n.h / 2 + 13} textAnchor="middle" className="fill-muted font-mono" fontSize={subSize}>
                {n.sub}
              </text>
            )}
          </g>
        )
      })}
    </svg>
  )
}

/** Responsive architecture diagram: horizontal on ≥md, vertical on phones. */
export default function ArchitectureDiagram({ diagram, title }) {
  return (
    <figure className="rounded-2xl border border-line bg-panel p-3 sm:p-5">
      <DiagramSvg diagram={diagram} orientation="h" title={title} className="hidden md:block" />
      <DiagramSvg diagram={diagram} orientation="v" title={title} className="mx-auto max-w-sm md:hidden" />
      <figcaption className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-3 text-xs text-muted">
        {legend.map(([kind, label]) => (
          <span key={kind} className="inline-flex items-center gap-1.5">
            <svg viewBox="0 0 8 8" className="size-2" aria-hidden="true">
              <circle cx="4" cy="4" r="4" className={kindClass[kind]} />
            </svg>
            {label}
          </span>
        ))}
        {diagram.caption && <span className="basis-full text-ink-2 sm:basis-auto sm:ml-auto">{diagram.caption}</span>}
      </figcaption>
    </figure>
  )
}

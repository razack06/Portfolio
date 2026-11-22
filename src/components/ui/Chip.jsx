/** Small mono tag for technologies. */
export default function Chip({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-line bg-surface-2/70 px-2.5 py-1 font-mono text-xs text-ink-2 ${className}`}
    >
      {children}
    </span>
  )
}

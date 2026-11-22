/** Small mono tag for technologies — dark blueprint style. */
export default function Chip({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center rounded-md border border-blue-500/20 bg-blue-500/8 px-2.5 py-1 font-mono text-xs text-blue-300 ${className}`}
    >
      {children}
    </span>
  )
}

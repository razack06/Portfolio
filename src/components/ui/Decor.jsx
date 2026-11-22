/** Hand-drawn decorative bits (all aria-hidden). */

/** Wavy orange underline drawn beneath a word. */
export function Squiggle({ className = '' }) {
  return (
    <svg viewBox="0 0 200 18" fill="none" preserveAspectRatio="none" aria-hidden="true" className={`draw-in ${className}`}>
      <path
        d="M3 12c14-7 26-7 38 0s24 7 38 0 26-7 38 0 24 7 38 0 26-7 40-1"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  )
}

/** Three little "spark" strokes, like ⸝⸝⸝ */
export function Sparks({ className = '' }) {
  return (
    <svg viewBox="0 0 30 30" fill="none" aria-hidden="true" className={className}>
      <path d="M6 16 2 13M11 9 9 3M18 8l3-5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

/** Loose hand-drawn curved arrow. `flip` mirrors it horizontally. */
export function HandArrow({ className = '', flip = false }) {
  return (
    <svg viewBox="0 0 60 50" fill="none" aria-hidden="true" className={className} style={flip ? { transform: 'scaleX(-1)' } : undefined}>
      <path d="M6 6c4 18 18 30 44 32" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M43 31l8 7-9 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

/** Big curved arrow used at the left of the experience cards. */
export function SwoopArrow({ className = '' }) {
  return (
    <svg viewBox="0 0 50 90" fill="none" aria-hidden="true" className={className}>
      <path d="M30 4C8 20 6 56 34 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M24 76l11 5 1-12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Heart({ className = '' }) {
  return (
    <svg viewBox="0 0 24 22" fill="none" aria-hidden="true" className={className}>
      <path d="M12 20S3 14 3 8a4.5 4.5 0 0 1 9-1 4.5 4.5 0 0 1 9 1c0 6-9 12-9 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

/** Handwritten note: one word-group per line, slightly rotated, optional heart at the end. */
export function Note({ lines, className = '', heart = false, rotate = -8 }) {
  return (
    <p aria-hidden="true" className={`font-script text-xl leading-[1.05] text-ink-2 sm:text-2xl ${className}`} style={{ transform: `rotate(${rotate}deg)` }}>
      {lines.map((l, i) => (
        <span key={l} className="block" style={{ paddingLeft: `${i * 0.6}rem` }}>
          {l}
          {heart && i === lines.length - 1 && <Heart className="ml-1 inline size-4 align-baseline" />}
        </span>
      ))}
    </p>
  )
}

/** Simple line-art potted plants for the CTA banner (no stock photos). */
export function Plants({ className = '' }) {
  return (
    <svg viewBox="0 0 220 170" fill="none" aria-hidden="true" className={className}>
      {/* tall plant */}
      <g stroke="#3f7d5f" strokeWidth="2" strokeLinecap="round">
        <path d="M70 120V40M70 70c-14-6-26-20-28-36 14 2 26 14 28 30M70 58c10-10 24-16 38-14-4 14-18 24-36 22M70 92c-16-2-30-12-36-26 16 0 30 10 36 24M70 86c12-8 28-10 40-4-8 12-24 16-40 10" />
      </g>
      <path d="M48 118h44l-6 44H54l-6-44Z" fill="#efe6da" stroke="#cdbfae" strokeWidth="1.5" />
      {/* small succulent */}
      <g stroke="#4f9a74" strokeWidth="2" strokeLinecap="round">
        <path d="M150 132c-6-12-4-24 4-32 6 10 6 22-4 32ZM150 132c4-12 14-20 26-20-2 12-12 20-26 20ZM150 132c-8-8-20-10-30-6 6 10 18 12 30 6Z" />
      </g>
      <path d="M128 132h44l-4 30h-36l-4-30Z" fill="#f6efe6" stroke="#cdbfae" strokeWidth="1.5" />
      <path d="M20 163h190" stroke="#d9cbb8" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

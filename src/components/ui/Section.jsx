import Reveal from './Reveal.jsx'
import { Squiggle, Sparks } from './Decor.jsx'

/** Centered heading: small uppercase label, serif title, soft squiggle and orange sparks. */
export function SectionHead({ id, eyebrow, title, aside }) {
  return (
    <Reveal className="relative mb-10 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={`${id}-heading`} className="relative mx-auto mt-2 inline-block font-serif text-3xl text-ink sm:text-[2.6rem]">
        {title}
        <Squiggle className="absolute -bottom-2 left-1/2 h-2.5 w-24 -translate-x-1/2 text-[#9fd0b6]" />
        <Sparks className="absolute -right-9 -top-3 size-7 text-orange" />
      </h2>
      {aside && <div className="mt-4 sm:absolute sm:bottom-1 sm:right-0 sm:mt-0">{aside}</div>}
    </Reveal>
  )
}

/** Section as a stacked rounded "sheet" (the design's layered panels). */
export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`panel py-12 sm:py-14 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}

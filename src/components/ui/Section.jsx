import Reveal from './Reveal.jsx'

/** Section heading: eyebrow label + bold title with blue underline accent */
export function SectionHead({ id, eyebrow, title, aside }) {
  return (
    <Reveal className="relative mb-10 text-center">
      <p className="eyebrow">{eyebrow}</p>
      <h2
        id={`${id}-heading`}
        className="relative mx-auto mt-2 inline-block text-3xl font-bold text-ink sm:text-[2.4rem]"
      >
        {title}
        {/* Blue underline accent */}
        <span
          aria-hidden="true"
          className="absolute -bottom-2 left-1/2 h-0.5 w-24 -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        />
      </h2>
      {aside && <div className="mt-4 sm:absolute sm:bottom-1 sm:right-0 sm:mt-0">{aside}</div>}
    </Reveal>
  )
}

/** Section wrapper with generous horizontal margins/padding */
export default function Section({ id, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={`panel py-14 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">{children}</div>
    </section>
  )
}

import { services, headings } from '../../data/profile.js'
import Section, { SectionHead } from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'

/** "What I do": dark blueprint cards */
export default function Services() {
  return (
    <Section id="services">
      <SectionHead id="services" {...headings.services} />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal
            as="li"
            key={s.title}
            delay={i * 0.06}
            className={`tone-${s.tone} bg-tone glow-card group relative flex flex-col rounded-2xl border border-[#1e2d4a] p-6 transition duration-300 hover:-translate-y-1.5 motion-reduce:hover:translate-y-0`}
          >
            {/* Icon box with blueprint border */}
            <span className="bg-tone-2 text-tone grid size-14 place-items-center rounded-xl border border-blue-500/20">
              <Icon name={s.icon} className="size-7" />
            </span>
            {/* Top-right corner bracket */}
            <span aria-hidden="true" className="absolute right-4 top-4 font-mono text-[0.6rem] text-blue-500/40">
              [ {String(i + 1).padStart(2, '0')} ]
            </span>
            <h3 className="mt-6 text-lg font-bold text-ink">{s.title}</h3>
            <p className="mt-2 flex-1 font-mono text-sm leading-relaxed text-ink-2">{s.text}</p>
            <a href="#projects" className="arrow-dot mt-5 self-end" aria-label={`See projects using ${s.title}`}>
              <Icon name="arrowRight" className="size-4" />
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

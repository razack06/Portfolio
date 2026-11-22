import { services, headings } from '../../data/profile.js'
import Section, { SectionHead } from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'

/** "What I do": four pastel cards covering every skill on the resume. */
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
            className={`tone-${s.tone} bg-tone group relative flex flex-col rounded-3xl p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#7a5a3a]/10 motion-reduce:hover:translate-y-0`}
          >
            <span className="bg-tone-2 text-tone grid size-14 place-items-center rounded-2xl">
              <Icon name={s.icon} className="size-7" />
            </span>
            <h3 className="mt-6 text-lg font-bold text-ink">{s.title}</h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-2">{s.text}</p>
            <a href="#projects" className="arrow-dot mt-5 self-end" aria-label={`See projects using ${s.title}`}>
              <Icon name="arrowRight" className="size-4" />
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}

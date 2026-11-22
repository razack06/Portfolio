import { profile, aboutStats, headings } from '../../data/profile.js'
import Section from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import { Sparks, HandArrow, Note } from '../ui/Decor.jsx'

const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`

export default function About() {
  const h = headings.about
  return (
    <Section id="about">
      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.35fr_0.95fr] lg:gap-10">
        {/* Black & white photo with a mint offset shape */}
        <Reveal className="relative mx-auto w-full max-w-[17rem] lg:max-w-none">
          <div aria-hidden="true" className="absolute -bottom-4 -left-4 h-[70%] w-[55%] rounded-3xl bg-mint-2/70" />
          <img
            src={`${import.meta.env.BASE_URL}${profile.photoBw}`}
            alt={`Black and white portrait of ${profile.name}`}
            width="520"
            height="520"
            loading="lazy"
            decoding="async"
            className="relative aspect-square w-full rounded-3xl object-cover shadow-lg shadow-black/10"
          />
          <Sparks className="absolute -right-6 -top-4 size-8 rotate-12 text-ink" />
        </Reveal>

        {/* Text */}
        <Reveal delay={0.05}>
          <p className="flex items-center gap-3">
            <span className="eyebrow-pill">{h.eyebrow}</span>
            <span aria-hidden="true" className="h-px w-8 bg-ink" />
          </p>
          <h2 id="about-heading" className="mt-4 font-serif text-3xl leading-tight text-ink sm:text-[2.4rem]">
            {h.title}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-2">{profile.summary}</p>
          <a href={resumeHref} download className="btn-dark mt-7">
            <Icon name="download" className="size-4" /> Download Resume
          </a>
        </Reveal>

        {/* Stats card */}
        <Reveal delay={0.1} className="relative">
          <ul className="card space-y-5 p-6 shadow-sm">
            {aboutStats.map((s) => (
              <li key={s.label} className={`tone-${s.tone} flex items-center gap-4`}>
                <span className="bg-tone text-tone grid size-12 shrink-0 place-items-center rounded-full">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <span>
                  <span className="block text-xl font-extrabold text-ink">{s.value}</span>
                  <span className="block text-sm text-ink-2">{s.label}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex items-start justify-center gap-1 lg:justify-start">
            <Note lines={profile.notes.about} rotate={-10} className="text-ink-2" />
            <HandArrow className="mt-6 h-9 w-10 rotate-[200deg] text-ink-2" />
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

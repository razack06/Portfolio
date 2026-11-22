import { profile, aboutStats, headings } from '../../data/profile.js'
import Section from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'

const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`

export default function About() {
  const h = headings.about
  return (
    <Section id="about">
      <div className="grid items-center gap-10 lg:grid-cols-[0.8fr_1.35fr_0.95fr] lg:gap-10">
        {/* Photo with blueprint frame */}
        <Reveal className="relative mx-auto w-full max-w-[17rem] lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -left-4 h-[70%] w-[55%] rounded-2xl border border-blue-500/20"
            style={{ background: 'linear-gradient(135deg, rgba(59,130,246,0.1), transparent)' }}
          />
          <img
            src={`${import.meta.env.BASE_URL}${profile.photoBw}`}
            alt={`Portrait of ${profile.name}`}
            width="520"
            height="520"
            loading="lazy"
            decoding="async"
            className="relative aspect-square w-full rounded-2xl border border-[#1e2d4a] object-cover shadow-lg shadow-blue-500/10"
          />
          {/* Corner bracket decoration */}
          <div aria-hidden="true" className="absolute -right-3 -top-3 h-6 w-6 border-r-2 border-t-2 border-blue-500/60" />
          <div aria-hidden="true" className="absolute -bottom-3 -left-3 h-6 w-6 border-b-2 border-l-2 border-blue-500/60" />
        </Reveal>

        {/* Text */}
        <Reveal delay={0.05}>
          <p className="flex items-center gap-3">
            <span className="eyebrow-pill">{h.eyebrow}</span>
            <span aria-hidden="true" className="h-px w-8 bg-blue-500/30" />
          </p>
          <h2 id="about-heading" className="mt-4 text-3xl font-bold leading-tight text-ink sm:text-[2.4rem]">
            {h.title}
          </h2>
          <p className="mt-4 leading-relaxed text-ink-2">{profile.summary}</p>
          <a href={resumeHref} download className="btn-dark mt-7">
            <Icon name="download" className="size-4" /> Download Resume
          </a>
        </Reveal>

        {/* Stats card */}
        <Reveal delay={0.1} className="relative">
          <ul className="space-y-4 rounded-2xl border border-[#1e2d4a] bg-[#111827] p-6 shadow-lg shadow-blue-500/5">
            {aboutStats.map((s) => (
              <li key={s.label} className={`tone-${s.tone} flex items-center gap-4`}>
                <span className="bg-tone text-tone grid size-12 shrink-0 place-items-center rounded-xl border border-blue-500/20">
                  <Icon name={s.icon} className="size-5" />
                </span>
                <span>
                  <span className="block text-xl font-extrabold text-ink">{s.value}</span>
                  <span className="block font-mono text-sm text-ink-2">{s.label}</span>
                </span>
              </li>
            ))}
          </ul>
          {/* Code comment decoration */}
          <p className="mt-4 font-mono text-xs text-muted">
            <span className="text-blue-500/60">// </span>
            Building reliable backend systems
          </p>
        </Reveal>
      </div>
    </Section>
  )
}

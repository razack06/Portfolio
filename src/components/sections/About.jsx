import { profile, aboutStats, headings } from '../../data/profile.js'
import Section from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'

const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`

export default function About() {
  const h = headings.about
  return (
    <Section id="about">
      <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        {/* Photo Column */}
        <Reveal className="relative mx-auto w-full max-w-xs lg:col-span-4 lg:max-w-none">
          <div className="relative overflow-hidden rounded-2xl border border-[#1e2d4a] bg-[#111827] p-2 shadow-xl shadow-blue-500/5">
            <img
              src={`${import.meta.env.BASE_URL}${profile.photoBw}`}
              alt={`Portrait of ${profile.name}`}
              width="520"
              height="520"
              loading="lazy"
              decoding="async"
              className="aspect-square w-full rounded-xl object-cover"
            />
            <div className="p-2.5 text-center font-mono text-xs text-blue-400">
              <span className="text-slate-500">//</span> {profile.location}
            </div>
          </div>
        </Reveal>

        {/* Text & Stats Column */}
        <div className="space-y-6 lg:col-span-8">
          <Reveal delay={0.05}>
            <p className="flex items-center gap-3">
              <span className="eyebrow-pill">{h.eyebrow}</span>
              <span aria-hidden="true" className="h-px w-8 bg-blue-500/30" />
            </p>
            <h2 id="about-heading" className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-[2.2rem]">
              {h.title}
            </h2>
            <p className="mt-4 leading-relaxed text-ink-2">{profile.summary}</p>
          </Reveal>

          {/* Stats grid */}
          <Reveal delay={0.1}>
            <ul className="grid gap-3 sm:grid-cols-3">
              {aboutStats.map((s) => (
                <li key={s.label} className="rounded-xl border border-[#1e2d4a] bg-[#111827] p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg border border-blue-500/20 bg-blue-500/10 text-blue-400">
                      <Icon name={s.icon} className="size-5" />
                    </span>
                    <div>
                      <span className="block text-lg font-bold text-ink">{s.value}</span>
                      <span className="block font-mono text-xs text-ink-2">{s.label}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.15} className="pt-2">
            <a href={resumeHref} download className="btn-dark">
              <Icon name="download" className="size-4" /> Download Resume
            </a>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

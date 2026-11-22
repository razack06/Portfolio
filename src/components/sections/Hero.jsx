import { m } from 'framer-motion'
import { profile } from '../../data/profile.js'
import Icon from '../ui/Icon.jsx'
import Socials from '../ui/Socials.jsx'

const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`
const rise = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
})

/** Floating badge in dark glass style */
function Badge({ value, label, sub, className }) {
  return (
    <div className={`absolute rounded-xl border border-[#1e2d4a] bg-[#111827]/90 px-4 py-3 shadow-xl shadow-blue-500/10 backdrop-blur-sm ${className}`}>
      <p className="text-gradient-blue text-2xl font-extrabold leading-none sm:text-3xl">{value}</p>
      <p className="mt-1.5 font-mono text-xs leading-snug text-ink-2">
        {label}
        <br />
        {sub}
      </p>
    </div>
  )
}

/** Hero photo in blueprint-styled frame */
function HeroPhoto() {
  const [b1, b2] = profile.heroBadges
  return (
    <div className="relative mx-auto aspect-[1/1.02] w-full max-w-md lg:max-w-none">
      {/* Blueprint glow circle */}
      <div
        aria-hidden="true"
        className="absolute bottom-[6%] left-[4%] size-[44%] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
      />
      {/* Photo frame */}
      <div className="absolute right-0 top-0 h-[94%] w-[80%] overflow-hidden rounded-2xl rounded-tl-[4rem] border border-[#1e2d4a] bg-gradient-to-br from-[#0d1428] via-[#111827] to-[#0f1e3a]">
        {/* Blueprint grid in frame */}
        <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-30" />
        {/* Blue glow circles */}
        <div aria-hidden="true" className="absolute -right-10 -top-10 size-56 rounded-full bg-blue-500/5" />
        <div aria-hidden="true" className="absolute bottom-10 left-6 size-32 rounded-full bg-cyan-500/5" />
        <img
          src={`${import.meta.env.BASE_URL}${profile.photo}`}
          alt={`Portrait of ${profile.name}`}
          width="640"
          height="800"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-x-0 bottom-0 h-[96%] w-full object-contain object-bottom"
        />
      </div>

      <Badge {...b1} className="float-a -right-2 top-[12%] sm:-right-6" />
      <Badge {...b2} className="float-b bottom-[16%] left-[2%] sm:left-[6%]" />

      {/* Tech stack pill decorations */}
      <div className="absolute -left-2 top-[2%] hidden sm:block lg:-left-10">
        <div className="flex flex-col gap-2">
          {['Java', 'Spring Boot', 'PostgreSQL'].map((t) => (
            <span key={t} className="rounded-md border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 font-mono text-xs text-blue-400">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const h = profile.headline

  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden">
      {/* Background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blueprint-grid absolute inset-0 opacity-60" />
        <div
          className="absolute left-[-10%] top-[-10%] h-[32rem] w-[32rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)' }}
        />
        <div
          className="absolute right-[-15%] top-[10%] h-[24rem] w-[24rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8 lg:pb-20 lg:pt-12">
        <div>
          <m.p {...rise(0)} className="flex items-center gap-3">
            <span className="eyebrow-pill">
              <span className="text-blue-500">$</span> Hello, I'm
            </span>
            <span aria-hidden="true" className="h-px w-8 bg-blue-500/30" />
          </m.p>

          <h1 className="mt-5 text-5xl font-bold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
            {profile.name.split(' ')[0]}{' '}
            <span className="relative inline-block text-gradient-blue">
              {profile.name.split(' ').slice(1).join(' ')}
            </span>
          </h1>

          <p className="mt-5 font-mono text-lg font-semibold text-blue-400 sm:text-xl">
            <span className="text-ink-2">// </span>{profile.title}
          </p>

          <p className="mt-5 max-w-md leading-relaxed text-ink-2">{profile.tagline}</p>

          {/* Tech stack tags */}
          <m.ul {...rise(0.08)} className="mt-6 flex flex-wrap gap-2" aria-label="Core technologies">
            {['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'WebSocket'].map((t) => (
              <li key={t}>
                <span className="inline-flex items-center rounded-md border border-blue-500/20 bg-blue-500/8 px-2.5 py-1 font-mono text-xs text-blue-300">
                  {t}
                </span>
              </li>
            ))}
          </m.ul>

          <m.div {...rise(0.12)} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-dark">
              View My Work <Icon name="arrowRight" className="size-4" />
            </a>
            <a href={resumeHref} download className="btn-light">
              <Icon name="download" className="size-4" />
              Download Resume
            </a>
          </m.div>

          <m.div {...rise(0.2)} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Socials />
            {profile.openToWork && (
              <p className="flex items-center gap-3 font-mono text-sm leading-tight text-ink-2">
                <span aria-hidden="true" className="pulse-dot relative size-3 rounded-full bg-emerald-400" />
                <span>
                  Available for
                  <br />
                  <strong className="font-semibold text-emerald-400">new opportunities</strong>
                </span>
              </p>
            )}
          </m.div>
        </div>

        <m.div initial={{ y: 16, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <HeroPhoto />
        </m.div>
      </div>
    </section>
  )
}

import { profile } from '../../data/profile.js'
import Icon from '../ui/Icon.jsx'
import Socials from '../ui/Socials.jsx'

const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`

/** Hero photo displayed inside a terminal frame with ambient gradient aura */
function HeroPhoto() {
  const [b1, b2] = profile.heroBadges
  return (
    <div className="group relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Ambient gradient aura behind the terminal frame */}
      <div
        aria-hidden="true"
        className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/30 via-cyan-500/20 to-indigo-600/30 opacity-70 blur-xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-2xl"
      />

      {/* Terminal window frame */}
      <div className="relative overflow-hidden rounded-2xl border border-[#1e2d4a] bg-[#0d1428] shadow-2xl shadow-blue-500/10 transition-all duration-300 group-hover:border-blue-500/40">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-[#1e2d4a] bg-[#111827] px-4 py-2.5">
          <div className="flex items-center gap-1.5">
            <span className="size-2.5 rounded-full bg-red-500/80 shadow-sm shadow-red-500/50" />
            <span className="size-2.5 rounded-full bg-yellow-500/80 shadow-sm shadow-yellow-500/50" />
            <span className="size-2.5 rounded-full bg-green-500/80 shadow-sm shadow-green-500/50" />
          </div>
          <span className="font-mono text-xs text-blue-400/90">developer@abdul:~</span>
          <span className="font-mono text-[0.68rem] text-slate-500">profile.java</span>
        </div>

        {/* Photo Container - Clean, unobstructed */}
        <div className="relative aspect-[4/4.6] w-full overflow-hidden bg-gradient-to-b from-[#111827]/70 via-[#0d1428] to-[#0a0f1e]">
          <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-40" />
          <div
            aria-hidden="true"
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 30%, rgba(59,130,246,0.18) 0%, transparent 70%)',
            }}
          />
          <img
            src={`${import.meta.env.BASE_URL}${profile.photo}`}
            alt={`Portrait of ${profile.name}`}
            width="640"
            height="800"
            fetchPriority="high"
            decoding="async"
            className="absolute inset-x-0 bottom-0 mx-auto h-[95%] w-auto max-w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Stats bar docked neatly below the photo */}
        <div className="grid grid-cols-2 divide-x divide-[#1e2d4a] border-t border-[#1e2d4a] bg-[#111827]/95">
          <div className="p-3.5 text-center">
            <p className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
              {b1.value}
            </p>
            <p className="mt-0.5 font-mono text-[0.7rem] text-ink-2">
              {b1.label} <span className="text-slate-500">({b1.sub})</span>
            </p>
          </div>
          <div className="p-3.5 text-center">
            <p className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-xl font-bold text-transparent sm:text-2xl">
              {b2.value}
            </p>
            <p className="mt-0.5 font-mono text-[0.7rem] text-ink-2">
              {b2.label} <span className="text-slate-500">({b2.sub})</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden pb-16 pt-8 sm:pb-24 sm:pt-14">
      {/* Animated Aurora Background Glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="blueprint-grid absolute inset-0 opacity-60" />
        <div
          className="animate-aurora-1 absolute left-[-10%] top-[-10%] h-[34rem] w-[34rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)' }}
        />
        <div
          className="animate-aurora-2 absolute right-[-15%] top-[10%] h-[28rem] w-[28rem] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.14) 0%, transparent 70%)' }}
        />
      </div>

      {/* Full-width container: Text on the LEFT, Photo on the RIGHT */}
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Text & Content */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="eyebrow-pill">
                <span className="text-blue-500">$</span> Hello, I'm
              </span>
              <span aria-hidden="true" className="h-px w-8 bg-blue-500/30" />
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.8rem]">
              {profile.name.split(' ')[0]}{' '}
              <span className="gradient-title">
                {profile.name.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            <p className="mt-4 font-mono text-base font-semibold text-blue-400 sm:text-lg">
              <span className="text-slate-500">// </span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {profile.title}
              </span>
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-2 sm:text-lg">
              {profile.tagline}
            </p>

            {/* Tech stack tags with subtle gradient border & hover lift */}
            <div className="mt-6 flex flex-wrap gap-2">
              {['Java', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'WebSocket', 'Microservices'].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-md border border-blue-500/25 bg-blue-500/10 px-3 py-1 font-mono text-xs text-blue-300 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500/20 hover:text-white"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="btn-dark">
                View My Work <Icon name="arrowRight" className="size-4" />
              </a>
              <a href={resumeHref} download className="btn-light">
                <Icon name="download" className="size-4" />
                Download Resume
              </a>
            </div>

            {/* Socials & Available status */}
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Socials />
              {profile.openToWork && (
                <p className="flex items-center gap-3 font-mono text-sm leading-tight text-ink-2">
                  <span aria-hidden="true" className="pulse-dot relative size-3 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
                  <span>
                    Available for
                    <br />
                    <strong className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text font-semibold text-transparent">
                      new opportunities
                    </strong>
                  </span>
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Photo on the right side */}
          <div className="lg:col-span-5">
            <HeroPhoto />
          </div>
        </div>
      </div>
    </section>
  )
}

import { m } from 'framer-motion'
import { profile } from '../../data/profile.js'
import Icon from '../ui/Icon.jsx'
import Socials from '../ui/Socials.jsx'
import { Squiggle, Sparks, HandArrow, Note } from '../ui/Decor.jsx'

const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`
const rise = (delay) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
})

/** Small white stat badge floating over the photo. */
function Badge({ value, label, sub, className }) {
  return (
    <div className={`absolute rounded-2xl bg-surface px-4 py-3 shadow-xl shadow-[#7a5a3a]/10 ring-1 ring-line ${className}`}>
      <p className="text-2xl font-extrabold leading-none text-ink sm:text-3xl">{value}</p>
      <p className="mt-1.5 text-xs leading-snug text-ink-2">
        {label}
        <br />
        {sub}
      </p>
    </div>
  )
}

/** Photo in a soft rounded frame with a mint circle behind, badges and handwritten notes around it. */
function HeroPhoto() {
  const [b1, b2] = profile.heroBadges
  return (
    <div className="relative mx-auto aspect-[1/1.02] w-full max-w-md lg:max-w-none">
      {/* Mint circle behind the frame */}
      <div aria-hidden="true" className="absolute bottom-[6%] left-[4%] size-[44%] rounded-full bg-mint-2/80" />
      {/* Photo frame */}
      <div className="absolute right-0 top-0 h-[94%] w-[80%] overflow-hidden rounded-[2.5rem] rounded-tl-[6rem] bg-gradient-to-br from-[#efe3d3] via-[#f3ece2] to-[#e3ece4]">
        <div aria-hidden="true" className="absolute -right-10 -top-10 size-56 rounded-full bg-white/50" />
        <div aria-hidden="true" className="absolute bottom-10 left-6 size-32 rounded-full bg-[#e9d9c4]/60" />
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

      {/* Handwritten notes */}
      <div className="absolute -left-2 top-[2%] hidden text-ink-2 sm:block lg:-left-10">
        <Note lines={profile.notes.hero} rotate={-10} />
        <HandArrow className="ml-10 mt-1 h-10 w-12" />
      </div>
      <Note lines={profile.notes.heroBottom} heart rotate={-8} className="absolute -bottom-6 -right-2 hidden text-lg sm:block sm:text-xl" />
      <Sparks className="absolute right-[4%] top-[-4%] size-7 text-ink" />
    </div>
  )
}

export default function Hero() {
  const h = profile.headline
  const name = profile.name.split(' ')
  const first = name[0]
  const rest = name.slice(1).join(' ')

  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8 lg:pb-20 lg:pt-12">
        <div>
          <m.p {...rise(0)} className="flex items-center gap-3">
            <span className="eyebrow-pill">Hello, I’m</span>
            <span aria-hidden="true" className="h-px w-8 bg-ink" />
          </m.p>

          <h1 className="mt-5 font-serif text-5xl leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.2rem]">
            {first}{' '}
            <span className="relative inline-block">
              {rest}
              <Squiggle className="absolute -bottom-3 left-0 h-4 w-full text-orange" />
            </span>
          </h1>

          <p className="mt-8 text-2xl font-bold leading-snug tracking-tight text-ink sm:text-[1.7rem]">
            {h.before}
            <br />
            {h.middle} <span className="font-script text-[1.35em] font-semibold text-orange">{h.highlight}</span>
            <br />
            {h.after}
          </p>

          <p className="mt-5 max-w-md leading-relaxed text-ink-2">{profile.tagline}</p>

          <m.div {...rise(0.12)} className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-dark">
              View My Work <Icon name="arrowRight" className="size-4" />
            </a>
            <a href={resumeHref} download className="btn-light">
              <span className="grid size-6 place-items-center rounded-full bg-navy text-white">
                <Icon name="download" className="size-3.5" />
              </span>
              Download Resume
            </a>
          </m.div>

          <m.div {...rise(0.2)} className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <Socials />
            {profile.openToWork && (
              <p className="flex items-center gap-3 text-sm leading-tight text-ink-2">
                <span aria-hidden="true" className="pulse-dot relative size-3 rounded-full bg-emerald-500" />
                <span>
                  Available for
                  <br />
                  <strong className="font-semibold text-ink">new opportunities</strong>
                </span>
              </p>
            )}
          </m.div>
        </div>

        <m.div initial={{ y: 16 }} animate={{ y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
          <HeroPhoto />
        </m.div>
      </div>
    </section>
  )
}

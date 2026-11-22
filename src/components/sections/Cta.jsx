import { contact, headings } from '../../data/profile.js'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'

/** Blueprint "Let's work together" banner - Centered design */
export default function Cta() {
  const c = headings.cta
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Java Developer opportunity')}`
  return (
    <section id="contact" aria-labelledby="contact-heading" className="panel pb-16 pt-10 sm:pb-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 md:px-12">
        <Reveal className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0d1428] via-[#111827] to-[#0f1e3a] p-8 text-center sm:p-12">
          {/* Blueprint grid */}
          <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-60" />
          {/* Glow effects */}
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)' }}
          />

          <div className="relative mx-auto max-w-2xl">
            <div className="flex justify-center">
              <span className="eyebrow-pill">{c.eyebrow}</span>
            </div>
            <h2 id="contact-heading" className="mt-4 text-3xl font-bold text-ink sm:text-4xl">
              {c.title}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base leading-relaxed text-ink-2">
              {c.text}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a href={mailto} className="btn-dark">
                Get In Touch <Icon name="arrowRight" className="size-4" />
              </a>
            </div>

            <p className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-sm font-medium text-ink-2">
              <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Icon name="mail" className="size-4" /> {contact.email}
              </a>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Icon name="phone" className="size-4" /> {contact.phone}
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Icon name="linkedin" className="size-4" /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

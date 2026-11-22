import { contact, headings } from '../../data/profile.js'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'

/** Blueprint "Let's work together" banner with generous padding */
export default function Cta() {
  const c = headings.cta
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Java Developer opportunity')}`
  return (
    <section id="contact" aria-labelledby="contact-heading" className="panel pb-14 pt-8 sm:pb-20">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 lg:px-16">
        <Reveal className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-[#0d1428] via-[#111827] to-[#0f1e3a] p-8 sm:p-12">
          {/* Blueprint grid */}
          <div aria-hidden="true" className="blueprint-grid absolute inset-0 opacity-60" />
          {/* Glow effects */}
          <div
            aria-hidden="true"
            className="absolute -left-20 -top-20 h-64 w-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)' }}
          />

          <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="flex items-center gap-3">
                <span className="eyebrow-pill">{c.eyebrow}</span>
                <span aria-hidden="true" className="h-px w-8 bg-blue-500/30" />
              </p>
              <h2 id="contact-heading" className="mt-4 text-3xl font-bold text-ink sm:text-[2.4rem]">
                {c.title}
              </h2>
              <p className="mt-3 max-w-lg leading-relaxed text-ink-2">{c.text}</p>
              <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm font-medium text-ink-2">
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

            <div className="relative flex flex-col items-start gap-3 lg:items-center">
              <a href={mailto} className="btn-dark">
                Get In Touch <Icon name="arrowRight" className="size-4" />
              </a>
              <p className="font-mono text-xs text-blue-500/50">
                {'/* open to full-time roles */'}
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

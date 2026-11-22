import { contact, headings, profile } from '../../data/profile.js'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import { Plants, Note, Sparks } from '../ui/Decor.jsx'

/** Mint "let's work together" banner — doubles as the Contact section. */
export default function Cta() {
  const c = headings.cta
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent('Java Developer opportunity')}`
  return (
    <section id="contact" aria-labelledby="contact-heading" className="panel pb-10 pt-6 sm:pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#d6ebdd] via-[#e3f1e7] to-[#edf5ee] px-6 py-10 sm:px-10 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[13rem_1fr_auto]">
            <Plants className="hidden h-36 w-auto lg:block" />

            <div>
              <p className="flex items-center gap-3">
                <span className="eyebrow-pill bg-white/70">{c.eyebrow}</span>
                <span aria-hidden="true" className="h-px w-8 bg-ink" />
              </p>
              <h2 id="contact-heading" className="mt-4 font-serif text-3xl text-ink sm:text-[2.6rem]">
                {c.title}
              </h2>
              <p className="mt-3 max-w-lg leading-relaxed text-ink-2">{c.text}</p>
              <p className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-ink">
                <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-1.5 hover:text-orange">
                  <Icon name="mail" className="size-4" /> {contact.email}
                </a>
                <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="inline-flex items-center gap-1.5 hover:text-orange">
                  <Icon name="phone" className="size-4" /> {contact.phone}
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-orange">
                  <Icon name="linkedin" className="size-4" /> LinkedIn<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </p>
            </div>

            <div className="relative flex flex-col items-start gap-6 lg:items-center">
              <Sparks className="absolute -left-8 -top-6 size-6 text-ink" />
              <a href={mailto} className="btn-dark">
                Get In Touch <Icon name="arrowRight" className="size-4" />
              </a>
              <Note lines={profile.notes.cta} heart rotate={-10} className="hidden lg:block" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

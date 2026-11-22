import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence } from 'framer-motion'
import { journey, experience, headings } from '../../data/profile.js'
import Section, { SectionHead } from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import Dialog from '../ui/Dialog.jsx'

const job = experience[0]

function ExperienceDialog({ onClose }) {
  return (
    <Dialog id="experience-detail" kicker={`${job.start} – ${job.end} · ${job.location}`} title={job.role} onClose={onClose} closeLabel="Close experience details" maxWidth="max-w-2xl">
      <div className="px-5 py-6 sm:px-8 sm:py-8">
        <p className="font-semibold text-ink">{job.company}</p>
        <p className="font-mono text-sm text-muted">{job.companyNote}</p>
        <ul className="mt-6 space-y-3">
          {job.bullets.map((b) => (
            <li key={b} className="flex gap-3 leading-relaxed text-ink-2">
              <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-blue-500" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </Dialog>
  )
}

export default function Journey() {
  const [open, setOpen] = useState(false)
  const close = useCallback(() => setOpen(false), [])
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <Section id="journey">
      <SectionHead id="journey" {...headings.journey} />
      <ul className="grid gap-5 md:grid-cols-3">
        {journey.map((j, i) => (
          <Reveal
            as="li"
            key={j.title}
            delay={i * 0.06}
            className="glow-card group relative flex gap-4 rounded-2xl border border-[#1e2d4a] bg-[#111827] p-5"
          >
            {/* Index */}
            <span className="absolute right-4 top-4 font-mono text-[0.6rem] text-blue-500/40">
              [ {String(i + 1).padStart(2, '0')} ]
            </span>
            <span className="grid size-14 shrink-0 place-items-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 ring-4 ring-[#111827]">
              <Icon name={j.icon} className="size-6" />
            </span>
            <div className="flex min-w-0 flex-1 flex-col">
              <p className="font-mono text-sm leading-relaxed text-ink-2">"{j.quote}"</p>
              <div className="mt-auto flex flex-wrap items-end justify-between gap-2 pt-4">
                <div className="min-w-0">
                  <p className="font-bold text-ink">{j.title}</p>
                  <p className="font-mono text-xs leading-snug text-muted">{j.org}</p>
                </div>
                <span className="whitespace-nowrap rounded-md border border-blue-500/20 bg-blue-500/10 px-2.5 py-1 font-mono text-[0.7rem] font-semibold text-blue-400">
                  {j.date}
                </span>
              </div>
              {j.detail && (
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  aria-haspopup="dialog"
                  className="mt-3 inline-flex items-center gap-1.5 self-start font-mono text-xs font-semibold text-blue-400 underline-offset-4 hover:underline"
                >
                  View details <Icon name="arrowRight" className="size-3.5" />
                </button>
              )}
            </div>
          </Reveal>
        ))}
      </ul>
      {mounted && createPortal(<AnimatePresence>{open && <ExperienceDialog onClose={close} />}</AnimatePresence>, document.body)}
    </Section>
  )
}

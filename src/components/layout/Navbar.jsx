import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { nav, profile } from '../../data/profile.js'
import { useActiveSection } from '../../hooks/useActiveSection.js'
import Icon from '../ui/Icon.jsx'

const ids = nav.filter((n) => n.id !== 'top').map((n) => n.id)

/** Wordmark: "> Abdul_" in blue monospace */
export function Logo({ className = '' }) {
  return (
    <span className={`font-mono text-xl font-bold tracking-tight text-ink ${className}`}>
      <span className="text-blue-400">&gt;</span>
      {profile.logo}
      <span className="cursor-blink text-blue-400">_</span>
    </span>
  )
}

/** Sticky navbar: dark glass, monospace links, blue active indicator. */
export default function Navbar() {
  const active = useActiveSection(ids) || 'top'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,border-color] duration-300 ${
        scrolled || open
          ? 'border-b border-[#1e2d4a] bg-[#0a0f1e]/90 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" aria-label={`${profile.name}, home`}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? 'location' : undefined}
                className={`rounded-md px-4 py-2 font-mono text-sm font-medium transition-colors ${
                  active === n.id
                    ? 'bg-blue-500/10 text-blue-400'
                    : 'text-ink-2 hover:text-blue-300'
                }`}
              >
                {active === n.id && <span className="mr-1 text-blue-500">/</span>}
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-dark hidden px-5 py-2.5 sm:inline-flex">
            <Icon name="send" className="size-4" />
            Let's Talk
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md border border-[#1e2d4a] bg-[#111827] text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((o) => !o)}
          >
            <Icon name={open ? 'close' : 'menu'} className="size-5" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-[#1e2d4a] md:hidden"
          >
            <ul className="space-y-1 px-4 pb-4 pt-2">
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === n.id ? 'location' : undefined}
                    className={`block rounded-md px-4 py-3 font-mono text-base font-medium ${
                      active === n.id ? 'bg-blue-500/10 text-blue-400' : 'text-ink-2'
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-dark w-full">
                  <Icon name="send" className="size-4" /> Let's Talk
                </a>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}

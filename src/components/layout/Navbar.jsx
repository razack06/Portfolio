import { useEffect, useState } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { nav, profile } from '../../data/profile.js'
import { useActiveSection } from '../../hooks/useActiveSection.js'
import Icon from '../ui/Icon.jsx'

const ids = nav.filter((n) => n.id !== 'top').map((n) => n.id)

/** Wordmark: "Abdul." with an orange dot. */
export function Logo({ className = '' }) {
  return (
    <span className={`font-sans text-2xl font-extrabold tracking-tight text-ink ${className}`}>
      {profile.logo}
      <span className="text-orange">.</span>
    </span>
  )
}

/** Sticky navbar: wordmark, centered links with a peach active pill, dark "Let's Talk" button. */
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
      className={`sticky top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
        scrolled || open ? 'bg-bg/90 shadow-[0_1px_0_var(--color-line)] backdrop-blur-md' : 'bg-transparent'
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
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === n.id ? 'bg-orange-soft text-[#9a4417]' : 'text-ink-2 hover:text-ink'
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a href="#contact" className="btn-dark hidden px-5 py-2.5 sm:inline-flex">
            <Icon name="send" className="size-4" />
            Let’s Talk
          </a>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full bg-surface text-ink ring-1 ring-line md:hidden"
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
            className="overflow-hidden md:hidden"
          >
            <ul className="space-y-1 px-4 pb-4">
              {nav.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    onClick={() => setOpen(false)}
                    aria-current={active === n.id ? 'location' : undefined}
                    className={`block rounded-2xl px-4 py-3 text-base font-medium ${
                      active === n.id ? 'bg-orange-soft text-[#9a4417]' : 'text-ink-2'
                    }`}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-dark w-full">
                  <Icon name="send" className="size-4" /> Let’s Talk
                </a>
              </li>
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}

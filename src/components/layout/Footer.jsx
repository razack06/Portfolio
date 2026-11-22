import { profile, nav, headings } from '../../data/profile.js'
import Socials from '../ui/Socials.jsx'
import { Logo } from './Navbar.jsx'

/** Dark footer with blueprint grid accent */
export default function Footer() {
  return (
    <footer className="relative bg-[#060c1a] overflow-hidden">
      {/* Blueprint grid background */}
      <div className="blueprint-grid absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-6 border-t border-[#1e2d4a] px-4 py-8 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-1 font-mono text-sm text-ink-2">{headings.footerTagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-ink-2">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="hover:text-blue-400 transition-colors">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-2 md:items-end">
          <Socials />
          <p className="font-mono text-xs text-muted" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

import { profile, nav, headings } from '../../data/profile.js'
import Socials from '../ui/Socials.jsx'
import { Logo } from './Navbar.jsx'

/** Footer: wordmark + tagline, links, social icons + copyright. */
export default function Footer() {
  return (
    <footer className="bg-panel">
      <div className="mx-auto grid max-w-6xl items-center gap-6 border-t border-line px-4 py-8 sm:px-6 md:grid-cols-[1fr_auto_1fr] lg:px-8">
        <div>
          <Logo />
          <p className="mt-1 text-sm text-ink-2">{headings.footerTagline}</p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-2">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="hover:text-orange">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex flex-col gap-2 md:items-end">
          <Socials />
          <p className="text-xs text-muted" suppressHydrationWarning>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

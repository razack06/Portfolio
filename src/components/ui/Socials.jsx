import { contact } from '../../data/profile.js'
import Icon from './Icon.jsx'

/** Row of social/contact icons (LinkedIn, email, phone, GitHub when set). */
export default function Socials({ className = '' }) {
  const items = [
    { icon: 'linkedin', label: 'LinkedIn', href: contact.linkedin, external: true },
    { icon: 'mail', label: `Email ${contact.email}`, href: `mailto:${contact.email}` },
    { icon: 'phone', label: `Call ${contact.phone}`, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    contact.github && { icon: 'github', label: 'GitHub', href: contact.github, external: true },
  ].filter(Boolean)

  return (
    <ul className={`flex items-center gap-4 ${className}`}>
      {items.map((it) => (
        <li key={it.icon}>
          <a
            href={it.href}
            aria-label={it.label + (it.external ? ' (opens in a new tab)' : '')}
            {...(it.external && { target: '_blank', rel: 'noopener noreferrer' })}
            className="grid size-9 place-items-center rounded-full text-ink transition hover:bg-orange-soft hover:text-[#9a4417]"
          >
            <Icon name={it.icon} className="size-[1.35rem]" />
          </a>
        </li>
      ))}
    </ul>
  )
}

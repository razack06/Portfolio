import { useCallback, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence } from 'framer-motion'
import { projects, headings, contact } from '../../data/profile.js'
import Section, { SectionHead } from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'
import ProjectCard from '../projects/ProjectCard.jsx'
import ProjectModal from '../projects/ProjectModal.jsx'

export default function Projects() {
  const [openId, setOpenId] = useState(null)
  const close = useCallback(() => setOpenId(null), [])
  const open = projects.find((p) => p.id === openId)
  // Portals need document.body, which doesn't exist during the build-time prerender
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  // "View All Projects" links to GitHub once contact.github is set in profile.js
  const viewAll = contact.github && (
    <a href={contact.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-orange">
      View All Projects <Icon name="arrowRight" className="size-4" />
    </a>
  )

  return (
    <Section id="projects">
      <SectionHead id="projects" {...headings.projects} aside={viewAll} />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.id} delay={i * 0.06}>
            <ProjectCard project={p} onOpen={() => setOpenId(p.id)} />
          </Reveal>
        ))}
      </ul>

      {/* Portal keeps the dialog above the sticky navbar */}
      {mounted &&
        createPortal(
          <AnimatePresence>{open && <ProjectModal key={open.id} project={open} onClose={close} />}</AnimatePresence>,
          document.body,
        )}
    </Section>
  )
}

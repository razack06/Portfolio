import Icon from '../ui/Icon.jsx'
import ProjectThumb from './ProjectThumb.jsx'

/** Project card — dark blueprint style */
export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="glow-card group relative flex h-full flex-col rounded-2xl border border-[#1e2d4a] bg-[#111827] p-3 transition duration-300 hover:-translate-y-1.5 motion-reduce:hover:translate-y-0">
      <ProjectThumb project={project} />
      <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
        <div className="min-w-0">
          <h3 className="font-bold leading-snug text-ink">{project.title}</h3>
          <p className="mt-0.5 font-mono text-xs text-muted">{project.category}</p>
        </div>
        <button
          type="button"
          onClick={onOpen}
          aria-haspopup="dialog"
          className="arrow-dot after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-blue-500"
        >
          <Icon name="arrowRight" className="size-4" />
          <span className="sr-only">View case study: {project.title}</span>
        </button>
      </div>
    </article>
  )
}

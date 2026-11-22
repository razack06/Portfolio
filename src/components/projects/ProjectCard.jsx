import Icon from '../ui/Icon.jsx'
import ProjectThumb from './ProjectThumb.jsx'

/** Project card: pastel thumbnail (the project's data flow), title, category, arrow. Whole card opens the detail view. */
export default function ProjectCard({ project, onOpen }) {
  return (
    <article className="card group relative flex h-full flex-col p-3 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#7a5a3a]/10 motion-reduce:hover:translate-y-0">
      <ProjectThumb project={project} />
      <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4">
        <div className="min-w-0">
          <h3 className="font-bold leading-snug text-ink">{project.title}</h3>
          <p className="mt-0.5 text-xs text-muted">{project.category}</p>
        </div>
        <button
          type="button"
          onClick={onOpen}
          aria-haspopup="dialog"
          className="arrow-dot after:absolute after:inset-0 after:rounded-3xl after:content-[''] focus-visible:outline-none focus-visible:after:outline-2 focus-visible:after:outline-offset-2 focus-visible:after:outline-orange"
        >
          <Icon name="arrowRight" className="size-4" />
          <span className="sr-only">View case study: {project.title}</span>
        </button>
      </div>
    </article>
  )
}

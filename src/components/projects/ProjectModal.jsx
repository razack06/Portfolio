import Chip from '../ui/Chip.jsx'
import Icon from '../ui/Icon.jsx'
import Dialog from '../ui/Dialog.jsx'
import ArchitectureDiagram from './ArchitectureDiagram.jsx'

/** Project detail: summary, stack, links, architecture, Problem → Built → Result. */
export default function ProjectModal({ project, onClose }) {
  const id = `project-${project.id}`
  const { github, demo } = project.links ?? {}

  return (
    <Dialog id={id} kicker={`${project.start} – ${project.end}`} title={project.title} onClose={onClose} closeLabel="Close project details">
      <div className="space-y-10 px-5 py-6 sm:px-8 sm:py-8">
        <div className="space-y-5">
          <p className="max-w-3xl text-lg leading-relaxed text-ink-2">{project.summary}</p>
          <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
            {project.tech.map((t) => (
              <li key={t}>
                <Chip>{t}</Chip>
              </li>
            ))}
          </ul>
          {(github || demo) && (
            <div className="flex flex-wrap gap-3">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="btn-light">
                  <Icon name="github" className="size-4" /> GitHub
                </a>
              )}
              {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="btn-dark">
                  Live demo <Icon name="external" className="size-4" />
                </a>
              )}
            </div>
          )}
        </div>

        <section aria-labelledby={`${id}-arch`}>
          <h4 id={`${id}-arch`} className="eyebrow mb-4">
            Architecture
          </h4>
          <ArchitectureDiagram diagram={project.diagram} title={project.title} />
        </section>

        <section aria-labelledby={`${id}-impact`}>
          <h4 id={`${id}-impact`} className="eyebrow mb-4">
            Problem → What I built → Result
          </h4>
          <ol className="space-y-3">
            {project.breakdown.map((b, i) => (
              <li key={i} className="grid gap-4 rounded-2xl bg-surface p-5 ring-1 ring-line md:grid-cols-3 md:gap-6">
                <Step label="Problem" text={b.problem} />
                <Step label="What I built" text={b.built} strong />
                <Step label="Result" text={b.result} accent />
              </li>
            ))}
          </ol>
        </section>
      </div>
    </Dialog>
  )
}

function Step({ label, text, strong, accent }) {
  return (
    <div>
      <p className={`text-[0.68rem] font-bold uppercase tracking-[0.16em] ${accent ? 'text-[#a8481a]' : 'text-muted'}`}>{label}</p>
      <p className={`mt-1.5 leading-relaxed ${strong ? 'font-medium text-ink' : 'text-ink-2'}`}>{text}</p>
    </div>
  )
}

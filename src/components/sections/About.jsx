import { profile, aboutStats, headings } from '../../data/profile.js'
import Section, { SectionHead } from '../ui/Section.jsx'
import Reveal from '../ui/Reveal.jsx'
import Icon from '../ui/Icon.jsx'

const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`

export default function About() {
  const h = headings.about

  const highlights = [
    {
      title: 'Backend Architecture',
      desc: 'Developing scalable, secure RESTful microservices and WebSocket pipelines with Java and Spring Boot.',
      icon: 'code',
      gradient: 'from-blue-500/20 to-cyan-500/10 text-cyan-400 border-blue-500/30',
    },
    {
      title: 'Database & SQL Optimization',
      desc: 'Writing optimized PostgreSQL queries, complex functions, and indexing strategies for high-throughput reporting.',
      icon: 'database',
      gradient: 'from-indigo-500/20 to-blue-500/10 text-blue-400 border-indigo-500/30',
    },
    {
      title: 'IoT & Real-time Integration',
      desc: 'Connecting GPS hardware devices, sensor telemetries, and live event handlers behind clean authenticated APIs.',
      icon: 'broadcast',
      gradient: 'from-cyan-500/20 to-teal-500/10 text-teal-400 border-cyan-500/30',
    },
    {
      title: 'Reliability & Production',
      desc: 'Hands-on debugging, root-cause analysis, production error tracking, and automated CI/CD deployment pipelines.',
      icon: 'wrench',
      gradient: 'from-purple-500/20 to-indigo-500/10 text-purple-400 border-purple-500/30',
    },
  ]

  return (
    <Section id="about">
      <SectionHead id="about" eyebrow={h.eyebrow} title={h.title} />

      <div className="space-y-8">
        {/* Terminal Window with Developer Bio */}
        <Reveal className="glow-card overflow-hidden rounded-2xl border border-[#1e2d4a] bg-[#0d1428] shadow-xl shadow-blue-500/5">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between border-b border-[#1e2d4a] bg-[#111827] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-500/80 shadow-sm shadow-red-500/50" />
              <span className="size-3 rounded-full bg-yellow-500/80 shadow-sm shadow-yellow-500/50" />
              <span className="size-3 rounded-full bg-green-500/80 shadow-sm shadow-green-500/50" />
              <span className="ml-2 font-mono text-xs text-blue-400">abdul@backend:~/bio $ cat system_specs.sh</span>
            </div>
            <span className="hidden font-mono text-xs text-slate-500 sm:inline">bash — 80×24</span>
          </div>

          {/* Terminal Content */}
          <div className="p-6 sm:p-8">
            <p className="font-mono text-sm leading-relaxed text-blue-300 sm:text-base">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                $ echo $SUMMARY
              </span>
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-2 sm:text-lg">
              {profile.summary}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#1e2d4a] pt-4 font-mono text-xs text-muted">
              <span><strong className="text-ink">Location:</strong> {profile.location}</span>
              <span className="text-slate-600">•</span>
              <span><strong className="text-ink">Specialization:</strong> Real-Time Dashboards & REST APIs</span>
              <span className="text-slate-600">•</span>
              <span><strong className="text-ink">Status:</strong> Open to Full-time Opportunities</span>
            </div>
          </div>
        </Reveal>

        {/* 4 Technical Highlights & Capabilities Grid */}
        <Reveal delay={0.06}>
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="glow-card group rounded-2xl border border-[#1e2d4a] bg-[#111827] p-5 sm:p-6"
              >
                <div className="flex items-center gap-3.5">
                  <span className={`grid size-12 shrink-0 place-items-center rounded-xl border bg-gradient-to-br ${item.gradient} transition-transform duration-300 group-hover:scale-110`}>
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <h3 className="text-base font-bold text-ink sm:text-lg transition-colors group-hover:text-blue-300">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-3 font-mono text-xs leading-relaxed text-ink-2 sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stats Row & Resume Download */}
        <Reveal delay={0.12} className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-[#1e2d4a] bg-[#111827] p-6 sm:flex-row sm:p-8">
          <ul className="grid w-full grid-cols-1 gap-4 sm:w-auto sm:grid-cols-3 sm:gap-10">
            {aboutStats.map((s) => (
              <li key={s.label} className="text-center sm:text-left">
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
                  {s.value}
                </span>
                <span className="block font-mono text-xs text-ink-2">{s.label}</span>
              </li>
            ))}
          </ul>

          <a href={resumeHref} download className="btn-dark w-full shrink-0 sm:w-auto">
            <Icon name="download" className="size-4" /> Download Resume
          </a>
        </Reveal>
      </div>
    </Section>
  )
}

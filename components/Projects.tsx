import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Neophoenix.ai',
    description:
      'Flagship AI venture. Building revenue-producing AI systems — RAG pipelines, Generative AI products, and intelligent data governance platforms. As CEO, I drive the full product strategy from ideation through market execution, ensuring every system delivers measurable enterprise ROI.',
    tags: ['RAG', 'GenAI', 'AI Strategy', 'Data Governance', 'Revenue-First'],
    href: 'https://neophoenix.ai',
    featured: true,
  },
  {
    title: 'Inventam Tech Solution',
    description:
      'CTO & Co-founder. 7+ years delivering scalable digital outcomes for enterprise clients. Cloud-native infrastructure with deep AWS, Docker, and Vercel partnerships.',
    tags: ['AWS', 'Docker', 'Vercel', 'DevOps', 'Cloud'],
    href: 'https://inventam.com',
  },
  {
    title: 'LedgerX.cloud',
    description:
      'Portable ERP system engineered for edge deployments — including Raspberry Pi — rethinking enterprise resource planning for distributed environments.',
    tags: ['ERP', 'Edge Computing', 'Cloud-native'],
    href: 'https://ledgerx.cloud',
  },
  {
    title: 'DripDash.ai',
    description:
      'AI-powered operational automation platform. Streamlining enterprise workflows and business processes through machine intelligence.',
    tags: ['AI', 'Automation', 'Workflows'],
    href: 'https://dripdash.ai',
    badge: { label: 'Internal Use', color: 'slate' as const },
  },
  {
    title: 'Vectalk.ai',
    description:
      'Next-generation AI communication and collaboration platform. Context-aware AI assistance and real-time insights for modern enterprise teams.',
    tags: ['AI', 'NLP', 'Collaboration'],
    href: 'https://vectalk.ai',
    badge: { label: 'Beta', color: 'blue' as const },
  },
]

export default function Projects() {
  return (
    <section id="ventures" className="py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4">
            Ventures
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            AI Ventures &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Strategic Products
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-[15px]">
            A portfolio built on one principle: AI that produces revenue. Every
            venture is designed to solve real enterprise problems at scale.
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured — Neophoenix spans 2 columns */}
          <ProjectCard
            {...projects[0]}
            className="md:col-span-2"
          />

          {/* Inventam — right column */}
          <ProjectCard {...projects[1]} />

          {/* Remaining ventures */}
          {projects.slice(2).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Neophoenix AI',
    description:
      'AI-driven data governance products and innovative go-to-market strategies. Building the next generation of enterprise data solutions powered by cutting-edge artificial intelligence — enabling organizations to govern, trust, and unlock the full value of their data.',
    tags: ['AI / ML', 'Data Governance', 'Enterprise', 'GTM Strategy'],
    href: 'https://neophoenix.ai',
    featured: true,
  },
  {
    title: 'Inventam.com',
    description:
      'Specialized cloud partnership solutions leveraging AWS, Docker, and Vercel for DevOps excellence. Delivering scalable, enterprise-grade infrastructure and cloud-native solutions tailored for modern businesses.',
    tags: ['AWS', 'Docker', 'Vercel', 'DevOps', 'Cloud'],
    href: 'https://inventam.com',
  },
  {
    title: 'LedgerX.cloud',
    description:
      'An innovative ERP system engineered for maximum efficiency and portability — capable of running on edge devices including Raspberry Pi. Rethinking enterprise resource planning for distributed and resource-constrained environments.',
    tags: ['ERP', 'Edge Computing', 'Raspberry Pi', 'Cloud-native'],
    href: 'https://ledgerx.cloud',
  },
  {
    title: 'DripDash.ai',
    description:
      'AI-powered solution transforming business workflows and operational automation. Leveraging machine intelligence to streamline and enhance enterprise processes at every level.',
    tags: ['AI', 'Automation', 'Workflows', 'Enterprise'],
    href: 'https://dripdash.ai',
  },
  {
    title: 'Vectalk.ai',
    description:
      'Next-generation AI communication and collaboration platform. Enabling teams to communicate more effectively through intelligent, context-aware AI assistance and real-time insights.',
    tags: ['AI', 'NLP', 'Collaboration', 'Communication'],
    href: 'https://vectalk.ai',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4">
            Ventures
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Projects &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-400 dark:to-blue-400">
              Ventures
            </span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto text-[15px]">
            Building the future through AI, cloud infrastructure, and bold
            enterprise innovation.
          </p>
        </div>

        {/* Bento grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured — spans 2 columns on lg */}
          <ProjectCard
            {...projects[0]}
            className="md:col-span-2"
          />

          {/* Inventam — right column on lg */}
          <ProjectCard {...projects[1]} />

          {/* Remaining 3 in equal columns */}
          {projects.slice(2).map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

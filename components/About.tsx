import { Brain, Layers, Target, Users } from 'lucide-react'

const pillars = [
  {
    icon: Target,
    title: 'AI Product Strategy',
    description:
      'Translating complex AI capabilities into market-ready products that drive measurable revenue and enterprise adoption.',
  },
  {
    icon: Layers,
    title: 'Revenue-Producing AI',
    description:
      'Architecting RAG pipelines, GenAI systems, and data governance platforms that deliver direct business value.',
  },
  {
    icon: Users,
    title: 'Tech Leadership',
    description:
      '7+ years leading cross-functional engineering teams to deliver scalable, production-grade digital outcomes.',
  },
  {
    icon: Brain,
    title: 'Lifelong Learner',
    description:
      'IIM Ahmedabad & IIT Roorkee executive alumnus. Continuously investing in technical and strategic leadership depth.',
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4">
            Executive Profile
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Building the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Enterprise AI
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Primary — Neophoenix CEO focus */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                CEO · Neophoenix.ai
              </h3>
            </div>
            <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
              <p>
                As{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Chief Executive Officer
                </span>{' '}
                of{' '}
                <a
                  href="https://neophoenix.ai"
                  className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Neophoenix.ai
                </a>
                , I set AI product strategy and own end-to-end execution —
                from concept to revenue. My mandate is clear: build AI systems
                that work in production and generate measurable business outcomes.
              </p>
              <p>
                The Neophoenix portfolio centres on{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Retrieval-Augmented Generation (RAG)
                </span>
                ,{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Generative AI applications
                </span>
                , and intelligent data governance — solving real enterprise
                pain points rather than chasing hype.
              </p>
              <p>
                I operate at the intersection of product vision, engineering
                rigour, and go-to-market execution. Every initiative is
                measured against one question:{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200 italic">
                  does it produce revenue?
                </span>
              </p>
            </div>
          </div>

          {/* Secondary — Inventam CTO */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                CTO & Co-founder · Inventam Tech Solution
              </h3>
            </div>
            <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
              <p>
                Over{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  7+ years
                </span>{' '}
                at{' '}
                <a
                  href="https://inventam.com"
                  className="text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inventam Tech Solution
                </a>
                , I built and scaled engineering teams that consistently deliver
                digital outcomes for enterprise clients. My role spans
                architecture decisions, team structure, and technical strategy.
              </p>
              <p>
                Through deep partnerships with{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  AWS, Docker, and Vercel
                </span>
                , the Inventam platform delivers cloud-native, DevOps-first
                infrastructure and scalable SaaS products at enterprise grade.
              </p>
              <p>
                My technical leadership philosophy: hire for ownership, build
                for scale, and ship for impact — with zero tolerance for
                solutions that cannot survive production load.
              </p>
            </div>
          </div>
        </div>

        {/* Strategic pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-700/70 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-5 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/60 transition-colors">
                <Icon
                  size={22}
                  className="text-blue-600 dark:text-blue-400"
                />
              </div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-2 text-[15px]">
                {title}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

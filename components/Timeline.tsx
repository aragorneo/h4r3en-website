import { Briefcase, Award } from 'lucide-react'

const roles = [
  {
    title: 'Chief Executive Officer',
    company: 'Neophoenix.ai',
    href: 'https://neophoenix.ai',
    period: 'Jan 2024 – Present',
    type: 'current',
    highlights: [
      'Setting AI product strategy and owning full-cycle execution from concept to revenue.',
      'Architecting RAG pipelines and GenAI systems for enterprise markets.',
      'Building go-to-market motion for AI-native data governance products.',
    ],
  },
  {
    title: 'CTO & Co-Founder',
    company: 'Inventam Tech Solution',
    href: 'https://inventam.com',
    period: 'Jan 2019 – Present',
    type: 'current',
    highlights: [
      'Leading engineering teams to deliver scalable digital outcomes across 7+ years.',
      'Established cloud partnerships with AWS, Docker, and Vercel for enterprise infrastructure.',
      'Architecting multi-tenant SaaS platforms and DevOps pipelines at production scale.',
    ],
  },
  {
    title: 'Senior Consultant',
    company: 'Narola Infotech',
    period: 'Jun 2018 – Jan 2019',
    type: 'past',
    highlights: [
      'Developed innovative solutions for complex client business problems.',
      'Provided strategic technology consulting across web and mobile domains.',
    ],
  },
  {
    title: 'Sr. Software Engineer',
    company: 'IT Codes',
    period: 'Dec 2015 – May 2018',
    type: 'past',
    award: 'Constant Learner 2017',
    highlights: [
      'Scaled from Software Engineer to Senior role through rapid technical growth.',
      'Awarded "Constant Learner 2017" in recognition of outstanding professional development.',
      'Delivered full-stack solutions across enterprise client projects.',
    ],
  },
]

export default function Timeline() {
  return (
    <section id="career" className="py-28 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            A Decade of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Building & Leading
            </span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-blue-400/50 to-transparent hidden sm:block" />

          <div className="space-y-10">
            {roles.map((role, index) => (
              <div key={index} className="relative sm:pl-16">
                {/* Node dot */}
                <div className="absolute left-0 top-5 hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-500/60 shadow-md shadow-blue-500/10">
                  <Briefcase
                    size={18}
                    className={`${role.type === 'current' ? 'text-blue-500' : 'text-slate-400'}`}
                  />
                </div>

                {/* Card */}
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    role.type === 'current'
                      ? 'bg-white dark:bg-slate-800/60 border-blue-200 dark:border-blue-700/50 shadow-md shadow-blue-500/5'
                      : 'bg-white dark:bg-slate-800/30 border-slate-200 dark:border-slate-700/40'
                  }`}
                >
                  {/* Period badge + award */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-semibold ${
                        role.type === 'current'
                          ? 'bg-blue-500/10 text-blue-500 dark:text-blue-400 border border-blue-500/20'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      {role.period}
                    </span>
                    {role.type === 'current' && (
                      <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-500 dark:text-green-400 text-xs font-semibold border border-green-500/20">
                        Current
                      </span>
                    )}
                    {role.award && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-xs font-semibold border border-amber-500/20">
                        <Award size={11} />
                        {role.award}
                      </span>
                    )}
                  </div>

                  {/* Role + Company */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {role.title}
                  </h3>
                  {role.href ? (
                    <a
                      href={role.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline underline-offset-2 mb-4 inline-block"
                    >
                      {role.company}
                    </a>
                  ) : (
                    <p className="text-slate-500 dark:text-slate-400 text-sm font-semibold mb-4">
                      {role.company}
                    </p>
                  )}

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {role.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500/60 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

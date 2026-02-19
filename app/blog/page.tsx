import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Rss } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on AI, leadership, spirituality, and personal growth by Hareen Desai.',
}

const upcomingTopics = [
  'AI & Ethics',
  'Cloud Architecture',
  'Leadership',
  'Spirituality & Tech',
  'ERP Innovation',
  'Entrepreneurship',
  'Poetry & Reflection',
  'DevOps Excellence',
  'Data Governance',
  'Philosophy',
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-14 group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4">
            Writing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
            My Thoughts
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
            Reflections on AI, leadership, spirituality, and the ever-unfolding
            journey within.
          </p>
        </div>

        {/* Coming soon card */}
        <div className="relative rounded-3xl border-2 border-dashed border-violet-200 dark:border-violet-800/50 bg-gradient-to-br from-violet-50/80 to-slate-50 dark:from-violet-950/20 dark:to-slate-900/30 p-12 sm:p-16 text-center mb-12">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border border-violet-200 dark:border-violet-700/50 shadow-lg shadow-violet-500/10 flex items-center justify-center mx-auto mb-8">
            <Rss size={32} className="text-violet-600 dark:text-violet-400" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Blogs Coming Soon
          </h2>

          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed mb-8">
            I will be sharing insights on{' '}
            <span className="font-medium text-slate-700 dark:text-slate-300">
              AI
            </span>
            ,{' '}
            <span className="font-medium text-slate-700 dark:text-slate-300">
              leadership
            </span>
            , and{' '}
            <span className="font-medium text-slate-700 dark:text-slate-300">
              my personal journey
            </span>{' '}
            — exploring the intersection of technology, philosophy, and what it
            means to build with purpose and depth.
          </p>

          {/* Topics preview */}
          <div className="flex flex-wrap justify-center gap-2">
            {upcomingTopics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/40 border border-violet-200/70 dark:border-violet-700/40 text-violet-700 dark:text-violet-300 text-xs sm:text-sm font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Stay tuned section */}
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              icon: BookOpen,
              title: 'Deep dives',
              description:
                'Long-form essays on AI, philosophy, and building meaningful technology.',
            },
            {
              icon: Rss,
              title: 'Personal reflections',
              description:
                'Thoughts on spirituality, fitness, poetry, and the inner journey.',
            },
            {
              icon: BookOpen,
              title: 'Tech insights',
              description:
                'Practical guides on cloud architecture, DevOps, and data governance.',
            },
          ].map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center mb-4">
                <Icon size={18} className="text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2 text-sm">
                {title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

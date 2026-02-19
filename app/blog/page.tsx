import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, BookOpen, Rss, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Insights on AI strategy, enterprise leadership, cloud architecture, and building revenue-producing AI systems — by Hareen Desai.',
}

const upcomingTopics = [
  'AI Product Strategy',
  'RAG Architecture',
  'GenAI in Enterprise',
  'Cloud Architecture',
  'Tech Leadership',
  'DevOps Excellence',
  'Data Governance',
  'ERP Innovation',
  'Building AI Teams',
  'Entrepreneurship',
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-14 group"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          Back to home
        </Link>

        {/* Header */}
        <div className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4">
            Insights
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
            Executive Insights
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed">
            Perspectives on AI strategy, enterprise leadership, and building
            technology that generates real business value.
          </p>
        </div>

        {/* Coming soon card */}
        <div className="relative rounded-3xl border-2 border-dashed border-blue-200 dark:border-blue-800/50 bg-gradient-to-br from-blue-50/80 to-slate-50 dark:from-blue-950/20 dark:to-slate-900/30 p-12 sm:p-16 text-center mb-12">
          <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 border border-blue-200 dark:border-blue-700/50 shadow-lg shadow-blue-500/10 flex items-center justify-center mx-auto mb-8">
            <Rss size={32} className="text-blue-600 dark:text-blue-400" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Coming Soon
          </h2>

          <p className="text-slate-500 dark:text-slate-400 max-w-lg mx-auto leading-relaxed mb-8">
            I will be sharing insights on{' '}
            <span className="font-medium text-slate-700 dark:text-slate-300">
              AI product strategy
            </span>
            ,{' '}
            <span className="font-medium text-slate-700 dark:text-slate-300">
              executive leadership
            </span>
            , and{' '}
            <span className="font-medium text-slate-700 dark:text-slate-300">
              building revenue-producing AI systems
            </span>{' '}
            — from the perspective of a practising CEO and tech founder.
          </p>

          {/* Topics preview */}
          <div className="flex flex-wrap justify-center gap-2">
            {upcomingTopics.map((topic) => (
              <span
                key={topic}
                className="px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 border border-blue-200/70 dark:border-blue-700/40 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-medium"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>

        {/* Content types */}
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            {
              icon: BookOpen,
              title: 'Deep dives',
              description:
                'Long-form essays on AI architecture, RAG systems, and enterprise product strategy.',
            },
            {
              icon: TrendingUp,
              title: 'Leadership takes',
              description:
                'Practical lessons on scaling engineering teams, making build-vs-buy decisions, and CXO-level thinking.',
            },
            {
              icon: Rss,
              title: 'Tech insights',
              description:
                'Hands-on guides covering cloud architecture, DevOps, data governance, and GenAI implementation.',
            },
          ].map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center mb-4">
                <Icon size={18} className="text-blue-600 dark:text-blue-400" />
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

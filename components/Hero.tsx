import Link from 'next/link'
import { ArrowDown, TrendingUp, ExternalLink } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background — deep dark executive */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/40 dark:from-slate-950 dark:via-slate-900 dark:to-blue-950/40" />

      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-32 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-10">
          <TrendingUp size={14} className="shrink-0" />
          CEO &middot; AI Product Strategist &middot; Tech Founder
        </div>

        {/* Main heading */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
          Hareen{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
            Desai
          </span>
        </h1>

        {/* Role tags */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-8">
          {[
            'CEO · Neophoenix.ai',
            'CTO & Co-founder · Inventam',
            'AI Product Architect',
          ].map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              <span className="text-base sm:text-lg font-semibold text-slate-300">
                {role}
              </span>
              {i < 2 && (
                <span className="text-slate-600 font-light text-xl hidden sm:inline">
                  /
                </span>
              )}
            </span>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Driving AI strategy and execution at{' '}
          <a
            href="https://neophoenix.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-medium hover:underline underline-offset-2"
          >
            Neophoenix.ai
          </a>
          . Building revenue-producing AI systems — RAG pipelines, GenAI products,
          and intelligent enterprise solutions — with{' '}
          <a
            href="https://inventam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-medium hover:underline underline-offset-2"
          >
            Inventam Tech Solution
          </a>
          .
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#ventures"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition-all duration-200 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            View Ventures
            <ExternalLink size={16} className="opacity-70" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-blue-700 font-medium transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            Get in Touch
          </Link>
        </div>

        {/* Key metrics */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-5 max-w-2xl mx-auto">
          {[
            { label: 'Years Building', value: '10+' },
            { label: 'AI Ventures', value: '4+' },
            { label: 'Cloud Partners', value: '3+' },
            { label: 'Teams Led', value: '∞' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-blue-400">{value}</p>
              <p className="text-xs text-slate-500 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#ventures"
          aria-label="Scroll to ventures section"
          className="flex flex-col items-center gap-2 text-slate-500 hover:text-blue-400 transition-colors group"
        >
          <span className="text-xs font-medium opacity-60 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
          <ArrowDown
            size={20}
            className="animate-bounce group-hover:text-blue-400 transition-colors"
          />
        </a>
      </div>
    </section>
  )
}

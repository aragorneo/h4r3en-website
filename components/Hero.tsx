import Link from 'next/link'
import { ArrowDown, Sparkles, ExternalLink } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-violet-950/20" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff06_1px,transparent_1px),linear-gradient(to_bottom,#ffffff06_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Decorative blobs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-violet-400/15 dark:bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -right-20 w-80 h-80 bg-blue-400/15 dark:bg-blue-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-violet-300/10 dark:bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/40 border border-violet-200 dark:border-violet-700/60 text-violet-700 dark:text-violet-300 text-sm font-medium mb-10 animate-fade-in">
          <Sparkles size={14} className="shrink-0" />
          Open to collaborations &amp; conversations
        </div>

        {/* Main heading */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight leading-none animate-slide-up">
          Hareen{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-blue-600 dark:from-violet-400 dark:via-purple-400 dark:to-blue-400">
            Desai
          </span>
        </h1>

        {/* Role tags */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mb-8 animate-slide-up-delay">
          {[
            'CTO & Co-founder',
            'AI & ERP Innovator',
            'Spiritual Seeker',
            'Poet',
          ].map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              <span className="text-base sm:text-lg font-semibold text-slate-700 dark:text-slate-300">
                {role}
              </span>
              {i < 3 && (
                <span className="text-slate-300 dark:text-slate-600 font-light text-xl hidden sm:inline">
                  /
                </span>
              )}
            </span>
          ))}
        </div>

        {/* Subtext */}
        <p className="text-base sm:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up-delay-2">
          Building the future of AI-driven data governance and enterprise
          solutions at{' '}
          <a
            href="https://inventam.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 dark:text-violet-400 font-medium hover:underline underline-offset-2"
          >
            Inventam
          </a>{' '}
          and{' '}
          <a
            href="https://neophoenix.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-violet-600 dark:text-violet-400 font-medium hover:underline underline-offset-2"
          >
            Neophoenix
          </a>
          .
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up-delay-2">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 text-white font-medium transition-all duration-200 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            View Projects
            <ExternalLink size={16} className="opacity-70" />
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-violet-300 dark:hover:border-violet-700 font-medium transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
          >
            Get in Touch
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto animate-fade-in">
          {[
            { label: 'Ventures', value: '5+' },
            { label: 'Cloud Partnerships', value: '3+' },
            { label: 'Years Building', value: '10+' },
            { label: 'Open to Ideas', value: '∞' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="p-4 rounded-xl bg-white/60 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/40 backdrop-blur-sm"
            >
              <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">
                {value}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          aria-label="Scroll to about section"
          className="flex flex-col items-center gap-2 text-slate-400 dark:text-slate-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
        >
          <span className="text-xs font-medium opacity-60 group-hover:opacity-100 transition-opacity">
            Scroll
          </span>
          <ArrowDown
            size={20}
            className="animate-bounce group-hover:text-violet-500 transition-colors"
          />
        </a>
      </div>
    </section>
  )
}

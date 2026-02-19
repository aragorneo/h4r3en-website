import { ExternalLink, ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href?: string
  featured?: boolean
  badge?: { label: string; color: 'blue' | 'amber' | 'slate' | 'green' }
  className?: string
}

function StatusBadge({ label, color }: { label: string; color: 'blue' | 'amber' | 'slate' | 'green' }) {
  const styles = {
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
    amber: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    slate: 'bg-slate-500/10 text-slate-400 border border-slate-500/20',
    green: 'bg-green-500/10 text-green-400 border border-green-500/20',
  }
  return (
    <span className={`px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide ${styles[color]}`}>
      {label}
    </span>
  )
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  featured,
  badge,
  className = '',
}: ProjectCardProps) {
  return (
    <div
      className={`group relative flex flex-col p-7 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        featured
          ? 'bg-gradient-to-br from-blue-700 via-blue-800 to-cyan-900 dark:from-blue-800 dark:via-blue-900 dark:to-cyan-950 border-blue-600/50 shadow-lg shadow-blue-500/20'
          : 'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50 hover:border-blue-300 dark:hover:border-blue-700/70 hover:shadow-blue-500/5'
      } ${className}`}
    >
      {/* Header row */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-center gap-2 flex-wrap pr-8">
          <h3
            className={`text-lg font-bold leading-tight ${
              featured ? 'text-white' : 'text-slate-900 dark:text-white'
            }`}
          >
            {title}
          </h3>
          {featured && (
            <span className="px-2 py-0.5 rounded-full bg-white/15 text-white text-xs font-semibold border border-white/10">
              Flagship
            </span>
          )}
          {badge && <StatusBadge label={badge.label} color={badge.color} />}
        </div>

        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title}`}
            className={`absolute top-5 right-5 p-1.5 rounded-lg transition-all ${
              featured
                ? 'text-blue-200 hover:bg-white/20 hover:text-white opacity-100'
                : 'text-slate-400 dark:text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700 opacity-0 group-hover:opacity-100'
            }`}
          >
            {featured ? (
              <ArrowUpRight size={18} />
            ) : (
              <ExternalLink size={16} />
            )}
          </a>
        )}
      </div>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-6 flex-1 ${
          featured
            ? 'text-blue-100/90'
            : 'text-slate-600 dark:text-slate-400'
        }`}
      >
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className={`px-2.5 py-1 rounded-full text-xs font-medium ${
              featured
                ? 'bg-white/15 text-blue-100 border border-white/10'
                : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-700/30'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* CTA for featured */}
      {featured && href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors group/link"
        >
          Visit Neophoenix.ai
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      )}
    </div>
  )
}

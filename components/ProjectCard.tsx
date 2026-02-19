import { ExternalLink, ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  href?: string
  featured?: boolean
  className?: string
}

export default function ProjectCard({
  title,
  description,
  tags,
  href,
  featured,
  className = '',
}: ProjectCardProps) {
  return (
    <div
      className={`group relative flex flex-col p-7 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        featured
          ? 'bg-gradient-to-br from-violet-600 via-violet-700 to-purple-800 dark:from-violet-700 dark:via-violet-800 dark:to-purple-900 border-violet-500/50 dark:border-violet-600/50 shadow-lg shadow-violet-500/20'
          : 'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50 hover:border-violet-300 dark:hover:border-violet-700/70 hover:shadow-violet-500/5'
      } ${className}`}
    >
      {/* Featured badge */}
      {featured && (
        <div className="absolute top-5 right-5">
          <span className="px-2 py-0.5 rounded-full bg-white/20 text-white text-xs font-medium">
            Featured
          </span>
        </div>
      )}

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3
          className={`text-lg font-bold leading-tight pr-10 ${
            featured ? 'text-white' : 'text-slate-900 dark:text-white'
          }`}
        >
          {title}
        </h3>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title}`}
            className={`absolute top-5 right-5 p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all ${
              featured
                ? 'text-violet-200 hover:bg-white/20 hover:text-white'
                : 'text-slate-400 dark:text-slate-500 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-slate-700'
            } ${featured ? 'opacity-100' : ''}`}
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
            ? 'text-violet-100/90'
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
                ? 'bg-white/15 text-violet-100 border border-white/10'
                : 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200/50 dark:border-violet-700/30'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Visit link for featured */}
      {featured && href && (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors group/link"
        >
          Visit Neophoenix AI
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
          />
        </a>
      )}
    </div>
  )
}

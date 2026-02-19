import { Code2, Brain, Dumbbell, Pen } from 'lucide-react'

const qualities = [
  {
    icon: Code2,
    title: 'Tech Visionary',
    description:
      'Co-founder & CTO driving AI innovation and cloud-native solutions at scale.',
  },
  {
    icon: Brain,
    title: 'Lifelong Learner',
    description:
      'Exploring the intersection of technology, philosophy, and human potential.',
  },
  {
    icon: Dumbbell,
    title: 'Wellness Advocate',
    description:
      'Committed to physical fitness as a foundation for clarity and discipline.',
  },
  {
    icon: Pen,
    title: 'Creative Soul',
    description:
      "Writer of poetry, documenting life's profound journey through words.",
  },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-slate-50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 text-xs font-semibold uppercase tracking-widest mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Bridging Technology &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-400 dark:to-blue-400">
              Human Experience
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Professional */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-gradient-to-r from-violet-600 to-violet-400 dark:from-violet-400 dark:to-violet-600 rounded-full" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Professional Journey
              </h3>
            </div>
            <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
              <p>
                As the{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Co-founder and CTO
                </span>{' '}
                of{' '}
                <a
                  href="https://inventam.com"
                  className="text-violet-600 dark:text-violet-400 hover:underline underline-offset-2 font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Inventam.com
                </a>{' '}
                and{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  Neophoenix AI
                </span>
                , I architect solutions at the cutting edge of artificial
                intelligence and enterprise technology. My work spans AI-driven
                data governance, intelligent ERP systems, and cloud-native
                infrastructure.
              </p>
              <p>
                My expertise covers{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  cloud architecture
                </span>
                ,{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  DevOps engineering
                </span>
                , and{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  AI innovation
                </span>
                . I lead teams in building products that redefine how enterprises
                manage, govern, and leverage their data assets.
              </p>
              <p>
                Through deep partnerships with{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  AWS, Docker, and Vercel
                </span>
                , we deliver scalable, production-ready solutions that push the
                boundaries of what enterprise software can be.
              </p>
            </div>
          </div>

          {/* Personal */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-0.5 bg-gradient-to-r from-violet-600 to-violet-400 dark:from-violet-400 dark:to-violet-600 rounded-full" />
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Beyond the Code
              </h3>
            </div>
            <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed text-[15px]">
              <p>
                I believe the greatest innovations emerge from minds that seek
                understanding beyond the purely technical. My journey is deeply
                rooted in{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  philosophy and spirituality
                </span>
                , which shapes how I approach complexity and lead with empathy
                and purpose.
              </p>
              <p>
                Physical fitness is a cornerstone of my daily discipline — the
                focus cultivated in the gym translates directly into the clarity
                and resilience needed to build ambitious ventures and navigate
                the unknown.
              </p>
              <p>
                I'm also a{' '}
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  writer of poetry
                </span>{' '}
                and a lifelong learner, documenting my inner journey through
                words. Soon, I'll be sharing insights on AI, leadership,
                spirituality, and growth — here on my blog.
              </p>
            </div>
          </div>
        </div>

        {/* Qualities grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {qualities.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 hover:border-violet-300 dark:hover:border-violet-700/70 hover:shadow-lg hover:shadow-violet-500/5 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center mb-5 group-hover:bg-violet-200 dark:group-hover:bg-violet-900/60 transition-colors">
                <Icon
                  size={22}
                  className="text-violet-600 dark:text-violet-400"
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

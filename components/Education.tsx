import { GraduationCap } from 'lucide-react'

const education = [
  {
    institution: 'IIM Ahmedabad',
    shortName: 'IIM-A',
    program: 'Executive Program in IT Management & Strategic Business Leadership',
    credential: 'Future CIO/CTO Program',
    focus: ['IT Governance', 'Strategic Leadership', 'Business Strategy', 'CXO Readiness'],
    tier: 'premier',
  },
  {
    institution: 'IIT Roorkee',
    shortName: 'IIT-R',
    program: 'Executive Program — Cloud Computing & DevOps',
    credential: 'Specialization Certificate',
    focus: ['Cloud Architecture', 'DevOps Engineering', 'Infrastructure Automation'],
    tier: 'premier',
  },
  {
    institution: 'Veer Narmad South Gujarat University',
    shortName: 'VNSGU',
    program: 'Master of Science (MSc) & Bachelor of Science (BSc) in Information Technology',
    credential: 'MSc · BSc in IT',
    focus: ['Information Technology', 'Software Engineering', 'Systems Architecture'],
    tier: 'standard',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-28 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-20">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-widest mb-4">
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            Academic &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
              Executive Credentials
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu) => (
            <div
              key={edu.institution}
              className={`relative p-7 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                edu.tier === 'premier'
                  ? 'bg-gradient-to-br from-slate-900 to-blue-950/60 dark:from-slate-800/80 dark:to-blue-950/80 border-blue-700/40 shadow-md shadow-blue-500/10'
                  : 'bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50'
              }`}
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                  edu.tier === 'premier'
                    ? 'bg-blue-500/20 border border-blue-500/30'
                    : 'bg-blue-100 dark:bg-blue-900/30'
                }`}
              >
                <GraduationCap
                  size={22}
                  className={edu.tier === 'premier' ? 'text-blue-300' : 'text-blue-600 dark:text-blue-400'}
                />
              </div>

              {/* Short name badge */}
              <span
                className={`inline-block px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider mb-3 ${
                  edu.tier === 'premier'
                    ? 'bg-blue-500/20 text-blue-300 border border-blue-500/20'
                    : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                }`}
              >
                {edu.shortName}
              </span>

              {/* Institution */}
              <h3
                className={`text-lg font-bold mb-1 ${
                  edu.tier === 'premier' ? 'text-white' : 'text-slate-900 dark:text-white'
                }`}
              >
                {edu.institution}
              </h3>

              {/* Program */}
              <p
                className={`text-sm font-medium mb-1 ${
                  edu.tier === 'premier' ? 'text-blue-200/90' : 'text-slate-700 dark:text-slate-300'
                }`}
              >
                {edu.program}
              </p>

              {/* Credential label */}
              <p
                className={`text-xs mb-5 ${
                  edu.tier === 'premier' ? 'text-blue-300/70' : 'text-slate-500 dark:text-slate-400'
                }`}
              >
                {edu.credential}
              </p>

              {/* Focus areas */}
              <div className="flex flex-wrap gap-2">
                {edu.focus.map((f) => (
                  <span
                    key={f}
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      edu.tier === 'premier'
                        ? 'bg-white/10 text-blue-100 border border-white/10'
                        : 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200/40 dark:border-blue-700/30'
                    }`}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

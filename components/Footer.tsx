import Link from 'next/link'
import { Linkedin, Github, Mail, Heart } from 'lucide-react'

const footerLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  {
    href: 'https://linkedin.com/in/hareendesai',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://github.com/hareendesai',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'mailto:hareen@inventam.com',
    label: 'Email',
    icon: Mail,
  },
]

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight"
            >
              HD
              <span className="text-violet-600 dark:text-violet-400">.</span>
            </Link>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400 leading-relaxed max-w-xs">
              CTO & Co-founder building the future of AI-driven data governance
              and enterprise solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              Navigation
            </h4>
            <nav className="space-y-2.5">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Ventures */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-white mb-4 uppercase tracking-wider">
              Ventures
            </h4>
            <div className="space-y-2.5">
              {[
                { label: 'Inventam.com', href: 'https://inventam.com' },
                { label: 'Neophoenix AI', href: 'https://neophoenix.ai' },
                { label: 'LedgerX.cloud', href: 'https://ledgerx.cloud' },
                { label: 'DripDash.ai', href: 'https://dripdash.ai' },
                { label: 'Vectalk.ai', href: 'https://vectalk.ai' },
              ].map((v) => (
                <a
                  key={v.label}
                  href={v.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  {v.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
            Made with{' '}
            <Heart
              size={14}
              className="text-violet-500 fill-violet-500"
            />{' '}
            by Hareen Desai &copy; {new Date().getFullYear()}
          </p>

          {/* Social links */}
          <div className="flex items-center space-x-2">
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

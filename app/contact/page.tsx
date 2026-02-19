import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Linkedin, Mail, MessageSquare, Globe } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "Get in touch with Hareen Desai — let's talk AI, enterprise solutions, or anything that sparks curiosity.",
}

const socialLinks = [
  {
    icon: Linkedin,
    label: 'LinkedIn',
    handle: 'hareendesai',
    href: 'https://linkedin.com/in/hareendesai',
    description: 'Connect professionally',
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'hareen@inventam.com',
    href: 'mailto:hareen@inventam.com',
    description: 'Drop me a message',
    color: 'bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400',
  },
  {
    icon: Globe,
    label: 'Inventam',
    handle: 'inventam.com',
    href: 'https://inventam.com',
    description: 'My company website',
    color: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
  },
]

export default function Contact() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            Get in Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-5 leading-tight">
            Contact Me
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg leading-relaxed">
            Let&apos;s talk about AI, enterprise solutions, or anything that
            excites and inspires.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-violet-100 dark:bg-violet-900/40 flex items-center justify-center">
                  <MessageSquare
                    size={18}
                    className="text-violet-600 dark:text-violet-400"
                  />
                </div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  Send a Message
                </h2>
              </div>
              <ContactForm />
            </div>
          </div>

          {/* Side info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Social links */}
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-5">
                Connect with me
              </h3>
              <div className="space-y-3">
                {socialLinks.map(
                  ({ icon: Icon, label, handle, href, description, color }) => (
                    <a
                      key={label}
                      href={href}
                      target={
                        href.startsWith('mailto') ? undefined : '_blank'
                      }
                      rel={
                        href.startsWith('mailto')
                          ? undefined
                          : 'noopener noreferrer'
                      }
                      className="flex items-center gap-4 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60 hover:border-violet-300 dark:hover:border-violet-700 bg-white dark:bg-slate-800/30 hover:bg-slate-50 dark:hover:bg-slate-800/60 transition-all duration-200 group hover:-translate-y-0.5 hover:shadow-sm"
                    >
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}
                      >
                        <Icon size={20} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {label}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          {handle}
                        </p>
                        <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">
                          {description}
                        </p>
                      </div>
                    </a>
                  )
                )}
              </div>
            </div>

            {/* Personal note */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-violet-50 to-slate-50 dark:from-violet-950/20 dark:to-slate-900/30 border border-violet-100 dark:border-violet-900/40">
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Whether you&apos;re exploring a groundbreaking AI project,
                looking for ERP solutions, or simply want to share ideas on
                technology, philosophy, or entrepreneurship — I&apos;d love to
                hear from you.
              </p>
              <div className="mt-4 pt-4 border-t border-violet-100 dark:border-violet-900/40">
                <p className="text-xs text-slate-500 dark:text-slate-500">
                  I typically respond within 24–48 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

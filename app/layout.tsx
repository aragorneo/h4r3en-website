import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Hareen Desai | CTO & Co-founder',
    template: '%s | Hareen Desai',
  },
  description:
    'Personal portfolio of Hareen Desai — CTO & Co-founder, AI & ERP Innovator, Spiritual Seeker, and Poet. Building the future of AI-driven data governance at Inventam and Neophoenix.',
  keywords: [
    'Hareen Desai',
    'CTO',
    'Co-founder',
    'AI',
    'ERP',
    'Inventam',
    'Neophoenix',
    'LedgerX',
    'cloud',
    'DevOps',
    'portfolio',
  ],
  authors: [{ name: 'Hareen Desai' }],
  openGraph: {
    type: 'website',
    title: 'Hareen Desai | CTO & Co-founder',
    description:
      'Building the future of AI-driven data governance and enterprise solutions.',
    siteName: 'Hareen Desai',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

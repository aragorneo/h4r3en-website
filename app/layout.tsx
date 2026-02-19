import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Hareen Desai | CEO & AI Strategist',
    template: '%s | Hareen Desai',
  },
  description:
    'Hareen Desai — CEO at Neophoenix.ai, CTO & Co-founder at Inventam Tech Solution. Building revenue-producing AI systems including RAG, GenAI, and enterprise digital solutions.',
  keywords: [
    'Hareen Desai',
    'CEO',
    'CTO',
    'Co-founder',
    'AI Strategy',
    'Neophoenix',
    'Inventam',
    'RAG',
    'GenAI',
    'LedgerX',
    'cloud',
    'DevOps',
    'portfolio',
  ],
  authors: [{ name: 'Hareen Desai' }],
  openGraph: {
    type: 'website',
    title: 'Hareen Desai | CEO & AI Strategist',
    description:
      'CEO at Neophoenix.ai — driving AI product strategy and building revenue-producing AI systems.',
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

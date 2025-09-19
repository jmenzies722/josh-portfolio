import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Analytics } from '@/components/analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Josh M - DevOps & Platform Engineer',
  description: 'Strategic DevOps/Platform Engineer with expertise in AWS, Kubernetes, Terraform, and observability. Driving organizational transformation through platform-centric infrastructure.',
  keywords: ['DevOps Engineer', 'Platform Engineer', 'AWS', 'Kubernetes', 'Terraform', 'Observability', 'CI/CD'],
  authors: [{ name: 'Josh M' }],
  creator: 'Josh M',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://joshmenzies.dev',
    title: 'Josh M - DevOps & Platform Engineer',
    description: 'Strategic DevOps/Platform Engineer with expertise in AWS, Kubernetes, Terraform, and observability.',
    siteName: 'Josh M Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Josh M - DevOps & Platform Engineer',
    description: 'Strategic DevOps/Platform Engineer with expertise in AWS, Kubernetes, Terraform, and observability.',
    creator: '@jmenzies722',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' }
  ],
  // iPhone-specific optimizations
  viewportFit: 'cover',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* iPhone-specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Josh M" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-tap-highlight" content="no" />
        
        {/* iPhone splash screens */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png" />
        <link rel="apple-touch-icon" sizes="167x167" href="/apple-touch-icon-167x167.png" />
        
        {/* iPhone status bar */}
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
            <Analytics />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter_Tight, Playfair_Display, Inter } from 'next/font/google'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import { site } from '@/data/site'
import './globals.css'

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['400', '600', '800', '900'],
  variable: '--font-inter-tight',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['italic'],
  weight: ['400', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: site.meta.defaultTitle,
    template: site.meta.titleTemplate,
  },
  description: site.meta.defaultDescription,
  openGraph: {
    title: site.meta.defaultTitle,
    description: site.meta.defaultDescription,
    url: site.url,
    siteName: site.fullName,
    type: 'website',
  },
  metadataBase: new URL(site.url),
  twitter: {
    card: 'summary_large_image',
    title: site.meta.defaultTitle,
    description: site.meta.defaultDescription,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} ${playfair.variable} ${inter.variable}`}
    >
      <body className="bg-arion-bg text-white antialiased">
        {/* Skip-to-content for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:bg-arion-orange focus:text-white focus:px-4 focus:py-2 focus:font-inter-tight focus:text-sm focus:tracking-wide focus:uppercase focus:outline-none"
        >
          Skip to content
        </a>

        <SmoothScroll />
        <Navbar />

        <main id="main-content">
          {children}
        </main>

        <Footer />

        {/* Plausible analytics — only loads when NEXT_PUBLIC_PLAUSIBLE_DOMAIN is set */}
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfbf8' },
    { media: '(prefers-color-scheme: dark)', color: '#09090b' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://inclinedtaco.github.io'),
  title: 'Shyam Charan Kesavamoorthi',
  description:
    'Robotics researcher working on loco-manipulation, robot learning, and multi-humanoid collaboration.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Shyam Charan Kesavamoorthi',
    description:
      'Research in loco-manipulation, robot learning, and multi-humanoid collaboration.',
    url: 'https://inclinedtaco.github.io',
    siteName: 'Shyam Charan',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1729,
        height: 910,
        alt: 'Shyam Charan — Robotics researcher',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shyam Charan Kesavamoorthi',
    description:
      'Research in loco-manipulation, robot learning, and multi-humanoid collaboration.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&family=Press+Start+2P&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

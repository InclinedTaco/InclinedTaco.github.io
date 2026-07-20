import type { Metadata, Viewport } from 'next'
import { ThemeProvider } from 'next-themes'
import './globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f7f7f5' },
    { media: '(prefers-color-scheme: dark)', color: '#10100f' },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://inclinedtaco.github.io'),
  title: 'Shyam Charan — Robotics Researcher',
  description:
    'Robotics researcher working on loco-manipulation, robot learning, and multi-humanoid collaboration.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Shyam Charan — Robotics Researcher',
    description:
      'Learning systems for robots that move, manipulate, and collaborate.',
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
    title: 'Shyam Charan — Robotics Researcher',
    description:
      'Learning systems for robots that move, manipulate, and collaborate.',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

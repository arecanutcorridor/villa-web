import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Areca-Nut Corridor - Luxury Villa Retreat',
  description: 'Experience ultimate luxury at Areca-Nut Corridor, a stunning villa retreat with world-class amenities, breathtaking views, and exceptional service.',
  keywords: 'luxury villa, vacation rental, tropical retreat, villa booking, luxury accommodation',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
    themeColor: '#1B4B3A',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
  openGraph: {
    title: 'Areca-Nut Corridor - Luxury Villa Retreat',
    description: 'Experience ultimate luxury at Areca-Nut Corridor',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Saurav Furnitures - Premium Quality Furniture',
  description: 'Discover elegant and modern furniture for your home. Quality sofas, beds, cabinets, and more from Saurav Furnitures.',
  keywords: 'furniture, sofas, beds, cabinets, dining tables, chairs, modern furniture, quality furniture',
  authors: [{ name: 'Saurav Furnitures' }],
  creator: 'Saurav Furnitures',
  publisher: 'Saurav Furnitures',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saurav-furnitures.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Saurav Furnitures - Premium Quality Furniture',
    description: 'Discover elegant and modern furniture for your home. Quality sofas, beds, cabinets, and more.',
    url: 'https://saurav-furnitures.com',
    siteName: 'Saurav Furnitures',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Saurav Furnitures - Premium Quality Furniture',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saurav Furnitures - Premium Quality Furniture',
    description: 'Discover elegant and modern furniture for your home.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
} 
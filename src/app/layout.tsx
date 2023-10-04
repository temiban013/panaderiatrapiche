import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://PanaderiaTrapiche.com'),
  icons: {
      icon: '/favicon.ico'
  },
  title: 'Panaderia Trapiche',
  description: 'Retiro desde el coche',
  alternates: {
      canonical: '/',
      languages: {
          'en-US': '/en-US',
          'es-US': '/es-US'
      }
  },
  openGraph: {
      siteName: 'PanaderiaTrapiche.com',
      description: 'Retiro desde el coche.',
      title: 'Panaderia Trapiche',
      locale: 'en-US',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794015/Trapiche/gtm8rxob7s6aixhnqmef.jpg',
      //videos: 'https://www.youtube.com/watch?v=ti2ob5111g8'
  },
  twitter: {
      card: 'summary_large_image',
      title: 'Panaderia Trapiche',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794015/Trapiche/gtm8rxob7s6aixhnqmef.jpg',
      description: 'Retiro desde el coche.',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

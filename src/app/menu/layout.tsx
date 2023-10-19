import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://PanaderiaTrapiche.com/menu'),
  icons: {
      icon: '/favicon.ico'
  },
  title: 'Panaderia Trapiche',
  description: 'Variedad de Panes Artesanales, cafés y más.',
  alternates: {
      canonical: '/',
      languages: {
          'en-US': '/en-US',
          'es-US': '/es-US'
      }
  },
  openGraph: {
      siteName: 'PanaderiaTrapiche.com/menu',
      description: 'Variedad de Panes Artesanales, cafés y más.',
      title: 'Panaderia Trapiche',
      locale: 'en-US',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1697413842/Trapiche/lsgceibitwu69x9ntulf_hyrbwy.jpg',
      //videos: 'https://www.youtube.com/watch?v=ti2ob5111g8'
  },
  twitter: {
      card: 'summary_large_image',
      title: 'Panaderia Trapiche',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1697413842/Trapiche/lsgceibitwu69x9ntulf_hyrbwy.jpg',
      description: 'Variedad de Panes Artesanales, cafés y más.',
  }
}

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
        {children}
    </section>
  )
}

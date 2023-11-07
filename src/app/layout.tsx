import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://PanaderiaTrapiche.com'),
  icons: {
      icon: '/favicon.ico'
  },
  title: 'Panaderia Trapiche | San German',
  keywords: 'panaderia, galleta de manteca, budin de pan, pan artesanal, dulces, sandwiches, comidas criollas, san german, puerto rico, bakery, bread, artisan bread, sweets, sandwiches, creole food, pizzas, ensaladas, frituras, platos principales, postres',
  description: 'Panadería Trapiche es conocida por su delicioso pan de manteca y budín de pan. Ofrecemos una amplia variedad de panes artesanales, dulces, sándwiches y comidas criollas. Nuestro menú incluye opciones de café y cappuccino, más de diez tipos de panes artesanales, pizzas con opciones de carne y vegetales, ensaladas, sándwiches, wraps, frituras y un menú variado de platos principales y postres. Visítanos en nuestro local ampliado con serví carro y disfruta de la panadería favorita en San Germán y pueblos limítrofes.',
  alternates: {
      canonical: '/',
      languages: {
          'en-US': '/en-US',
          'es-PR': '/es-PR'
      }
  },
  openGraph: {
      siteName: 'Panaderia Trapiche',
      url: 'https://PanaderiaTrapiche.com',
      type: 'website',
      title: 'Panaderia Trapiche | San German',
      description: 'Panadería Trapiche es conocida por su delicioso pan de manteca y budín de pan. Ofrecemos una amplia variedad de panes artesanales, dulces, sándwiches y comidas criollas. Nuestro menú incluye opciones de café y cappuccino, más de diez tipos de panes artesanales, pizzas con opciones de carne y vegetales, ensaladas, sándwiches, wraps, frituras y un menú variado de platos principales y postres. Visítanos en nuestro local ampliado con serví carro y disfruta de la panadería favorita en San Germán y pueblos limítrofes.',
      locale: 'es-PR',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794015/Trapiche/gtm8rxob7s6aixhnqmef.jpg',
      //videos: 'https://www.youtube.com/watch?v=ti2ob5111g8'
  },
  twitter: {
      card: 'summary_large_image',
      title: 'Panaderia Trapiche | San German',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794015/Trapiche/gtm8rxob7s6aixhnqmef.jpg',
      description: 'Panadería Trapiche es conocida por su delicioso pan de manteca y budín de pan. Ofrecemos una amplia variedad de panes artesanales, dulces, sándwiches y comidas criollas. Nuestro menú incluye opciones de café y cappuccino, más de diez tipos de panes artesanales, pizzas con opciones de carne y vegetales, ensaladas, sándwiches, wraps, frituras y un menú variado de platos principales y postres. Visítanos en nuestro local ampliado con serví carro y disfruta de la panadería favorita en San Germán y pueblos limítrofes.',
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

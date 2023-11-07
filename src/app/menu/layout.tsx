import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://PanaderiaTrapiche.com/menu'),
  icons: {
      icon: '/favicon.ico'
  },
  title: 'Panaderia Trapiche | Menu',
  description: 'Descubre un menú variado en Panadería Trapiche: café y cappuccino, más de diez tipos de panes artesanales como pan de anón y ajonjolí, pizzas con opciones de carne y vegetales, ensaladas cesar y de pulpo, sandwiches y wraps, frituras y pastelillos de carne, pollo y bacon. Prueba nuestros platos principales como pechuga a la mexicana, almuerzo criollo, lomo de cerdo en salsa de zetas y dorado en salsa criolla. No te pierdas nuestros postres: cheesecake de oreo, chocolate o fresas, brazo gitano, budín y bizcochos.',
  alternates: {
      canonical: '/',
      languages: {
          'en-US': '/en-US',
          'es-US': '/es-US'
      }
  },
  openGraph: {
      siteName: 'PanaderiaTrapiche.com/menu',
      description: 'Descubre un menú variado en Panadería Trapiche: café y cappuccino, más de diez tipos de panes artesanales como pan de anón y ajonjolí, pizzas con opciones de carne y vegetales, ensaladas cesar y de pulpo, sandwiches y wraps, frituras y pastelillos de carne, pollo y bacon. Prueba nuestros platos principales como pechuga a la mexicana, almuerzo criollo, lomo de cerdo en salsa de zetas y dorado en salsa criolla. No te pierdas nuestros postres: cheesecake de oreo, chocolate o fresas, brazo gitano, budín y bizcochos.',
      title: 'Panaderia Trapiche | Menu',
      locale: 'en-US',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794030/Trapiche/lsgceibitwu69x9ntulf.jpg',
      //videos: 'https://www.youtube.com/watch?v=ti2ob5111g8'
  },
  twitter: {
      card: 'summary_large_image',
      title: 'Panaderia Trapiche | Menu',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794030/Trapiche/lsgceibitwu69x9ntulf.jpg',
      description: 'Descubre un menú variado en Panadería Trapiche: café y cappuccino, más de diez tipos de panes artesanales como pan de anón y ajonjolí, pizzas con opciones de carne y vegetales, ensaladas cesar y de pulpo, sandwiches y wraps, frituras y pastelillos de carne, pollo y bacon. Prueba nuestros platos principales como pechuga a la mexicana, almuerzo criollo, lomo de cerdo en salsa de zetas y dorado en salsa criolla. No te pierdas nuestros postres: cheesecake de oreo, chocolate o fresas, brazo gitano, budín y bizcochos.',
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

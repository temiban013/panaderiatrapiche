import type { Metadata } from 'next'
import './../globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://PanaderiaTrapiche.com/menu'),
  icons: {
      icon: '/favicon.ico'
  },
  title: 'Panaderia Trapiche | Menu',
  keywords: 'panaderia, galleta de manteca, budin de pan, pan artesanal, dulces, sandwiches, comidas criollas, san german, puerto rico, bakery, bread, artisan bread, sweets, sandwiches, creole food, pizzas, ensaladas, frituras, platos principales, postres',
  description: 'Descubre un menú variado en Panadería Trapiche: café y cappuccino, más de diez tipos de panes artesanales como pan de anón y ajonjolí, pizzas con opciones de carne y vegetales, ensaladas cesar y de pulpo, sandwiches y wraps, frituras y pastelillos de carne, pollo y bacon. Prueba nuestros platos principales como pechuga a la mexicana, almuerzo criollo, lomo de cerdo en salsa de zetas y dorado en salsa criolla. No te pierdas nuestros postres: cheesecake de oreo, chocolate o fresas, brazo gitano, budín y bizcochos.',
  alternates: {
      canonical: '/menu',
      languages: {
          'en-US': '/en-US',
          'es-PR': '/es-PR'
      }
  },
  openGraph: {
      siteName: 'Panaderia Trapiche',
      url: 'https://PanaderiaTrapiche.com/menu',
      type: 'website',
      description: 'Descubre un menú variado en Panadería Trapiche: café y cappuccino, más de diez tipos de panes artesanales como pan de anón y ajonjolí, pizzas con opciones de carne y vegetales, ensaladas cesar y de pulpo, sandwiches y wraps, frituras y pastelillos de carne, pollo y bacon. Prueba nuestros platos principales como pechuga a la mexicana, almuerzo criollo, lomo de cerdo en salsa de zetas y dorado en salsa criolla. No te pierdas nuestros postres: cheesecake de oreo, chocolate o fresas, brazo gitano, budín y bizcochos.',
      title: 'Panaderia Trapiche | Menu',
      locale: 'es-PR',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794037/Trapiche/se496dfjzsbl44fgw4j4.jpg',
      //videos: 'https://www.youtube.com/watch?v=ti2ob5111g8'
  },
  twitter: {
      card: 'summary_large_image',
      title: 'Panaderia Trapiche | Menu',
      images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794037/Trapiche/se496dfjzsbl44fgw4j4.jpg',
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

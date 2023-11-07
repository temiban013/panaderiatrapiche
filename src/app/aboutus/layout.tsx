import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    metadataBase: new URL('https://PanaderiaTrapiche.com/aboutus'),
    icons: {
        icon: '/favicon.ico'
    },
    title: 'Panaderia Trapiche | About Us',
    keywords: 'panaderia, galleta de manteca, budin de pan, pan artesanal, dulces, sandwiches, comidas criollas, san german, puerto rico, bakery, bread, artisan bread, sweets, sandwiches, creole food, pizzas, ensaladas, frituras, platos principales, postres',
    description: 'Fundada en 1979, la Panadería Trapiche se ha convertido en un referente de la gastronomía local en San Germán y sus alrededores. Con sus inicios en el edificio Rali, este establecimiento ha crecido hasta duplicar su espacio con la adquisición del antiguo edificio del Banco Santander en 2020, añadiendo además un serví carro para mayor comodidad de sus clientes. Reconocida por su famoso pan de manteca y budín de pan, la Panadería Trapiche ha expandido su oferta para incluir una variedad de panes artesanales, dulces, sándwiches y comidas criollas. Su compromiso con la calidad y la tradición la ha convertido en la panadería favorita de la región.',
    alternates: {
        canonical: '/aboutus',
        languages: {
            'en-US': '/en-US',
            'es-US': '/es-US'
        }
    },
    openGraph: {
        siteName: 'Panaeria Trapiche',
        url: 'https://PanaderiaTrapiche.com/aboutus',
        type: 'website',
        description: 'Fundada en 1979, la Panadería Trapiche se ha convertido en un referente de la gastronomía local en San Germán y sus alrededores. Con sus inicios en el edificio Rali, este establecimiento ha crecido hasta duplicar su espacio con la adquisición del antiguo edificio del Banco Santander en 2020, añadiendo además un serví carro para mayor comodidad de sus clientes. Reconocida por su famoso pan de manteca y budín de pan, la Panadería Trapiche ha expandido su oferta para incluir una variedad de panes artesanales, dulces, sándwiches y comidas criollas. Su compromiso con la calidad y la tradición la ha convertido en la panadería favorita de la región.',
        title: 'Panaderia Trapiche | About Us',
        locale: 'es-PR',
        images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794025/Trapiche/gycih0podts5q7hvatay.jpg',
        //videos: 'https://www.youtube.com/watch?v=ti2ob5111g8'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Panaderia Trapiche | About Us',
        images: 'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794025/Trapiche/gycih0podts5q7hvatay.jpg',
        description: 'Fundada en 1979, la Panadería Trapiche se ha convertido en un referente de la gastronomía local en San Germán y sus alrededores. Con sus inicios en el edificio Rali, este establecimiento ha crecido hasta duplicar su espacio con la adquisición del antiguo edificio del Banco Santander en 2020, añadiendo además un serví carro para mayor comodidad de sus clientes. Reconocida por su famoso pan de manteca y budín de pan, la Panadería Trapiche ha expandido su oferta para incluir una variedad de panes artesanales, dulces, sándwiches y comidas criollas. Su compromiso con la calidad y la tradición la ha convertido en la panadería favorita de la región.',
    }
  }
export default function Layout({ children }: { children: React.ReactNode; }) {
    return <>{children}</>
}

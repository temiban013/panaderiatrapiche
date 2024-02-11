import Link from "next/link"
import Image from "next/image"

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Panaderia Trapiche | Contáctenos',
  description: 'Póngase en contacto con Panaderia Trapiche. Encuentre nuestra ubicación, número de teléfono y dirección de correo electrónico. Conozca nuestros horarios de atención, siga nuestras redes sociales para actualizaciones, vea el mapa para encontrar nuestra ubicación con facilidad y disfrute de las fotos de nuestra panadería.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'Panaderia Trapiche | Contáctanos',
    description: 'Póngase en contacto con Panaderia Trapiche. Encuentre nuestra ubicación, número de teléfono y dirección de correo electrónico. Conozca nuestros horarios de atención, siga nuestras redes sociales para actualizaciones, vea el mapa para encontrar nuestra ubicación con facilidad y disfrute de las fotos de nuestra panadería.',
    images: ['https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_756/v1694794024/Trapiche/mhezye1pgxvzmrsuqpqp.jpg'],
    url: 'https://panaderiatrapiche.com/contactus',
    type: 'website',
  }
}

export default async function ContactUs() {
  return (
    <div className="flex flex-col bg-cover bg-trapiche-orange min-h-screen p-14">
      <div className='flex justify-center items-center'>
        <div className='text-xl md:text-4xl lg:text-5xl font-bold text-trapiche-tan p-5'>
          <Link href="/">Inicio</Link>
        </div>
        <div className='text-xl md:text-4xl lg:text-5xl font-bold text-trapiche-tan p-5'>
          <Link href="/menu">Menu</Link>
        </div>
        <div className='text-xl whitespace-nowrap md5text-6xl lg:text-5xl font-bold text-trapiche-tan p-5'>
          <Link href="/aboutus">Nosotros</Link>
        </div>
      </div>        
      <div className="relative top-16 flex flex-col justify-center items-center">
        <div className="absolute -top-12 w-32 md:w-32">
          <Image className='w-full h-auto' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_200//v1697631966/Trapiche/logos/panaderia-trapiche-logo-transp_svx12v.gif" alt="Logo" width={12} height={12} />
        </div>
        <div className="absolute top-0 w-44 md:w-44 lg:w-48">
          <Image className='w-full h-auto' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_256/v1697420759/Trapiche/logos/Logos-Trapiche-Bakery-1-_1__yg7wqm.gif" alt="Logo" width={12} height={12} />
        </div>
      </div>
      <div className='flex w-full flex-col pt-48 justify-center text-center'>
        <div className="text-4xl text-trapiche-tan pb-10 pt-24">Contact Us</div>
        <a href="https://www.google.com/maps/search/?api=1&query=Panaderia+Trapiche,+San+Germán,+00683,+Puerto+Rico" className="sm:inline-block text-xl pb-3">Ave. Atléticos #191</a>
        <div className="text-xl pb-3">San Germán, 00683</div>
        <div className="text-xl pb-3">Puerto Rico.</div>
        <a href="tel:+17878924673" className="sm:inline-block text-xl pb-3">+1 787-892-4673</a>
      </div>
    </div>
  )
}
'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function SplashScreen () {
  const logos = ['/panaderia-trapiche-logo1.gif', '/panaderia-trapiche-logo2.gif', '/panaderia-trapiche-logo3.gif']

  const [logoIndex, setLogoIndex] = useState(0)
  
  const alternateLogo = () => {
    setLogoIndex((logoIndex + 1) % logos.length)
  }

  return (
    <>
      <div className="flex flex-col min-h-screen bg-cover bg-center bg-trapiche-orange justify-center items-center" 
        style={{ backgroundImage: `url(https://res.cloudinary.com/drc0myo7z/image/upload/v1694794032/Trapiche/csfog9quttnwc4fslclk.jpg)` }}>
        <div className="-top-2 relative flex flex-col justify-center items-center">
          <div className="absolute -top-12 w-32 md:w-32">
            <Image src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_256/v1697631966/Trapiche/logos/panaderia-trapiche-logo-transp_svx12v.gif" alt="Logo" layout="responsive" width={12} height={12} />
          </div>
          <div className="absolute top-0 w-44 md:w-44 lg:w-48">
            <Image src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_256/v1697420759/Trapiche/logos/Logos-Trapiche-Bakery-1-_1__yg7wqm.gif" alt="Logo" layout="responsive" width={12} height={12} />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center pt-44'>
          <div className='text-3xl md:text-4xl lg:text-5xl font-bold text-trapiche-tan text-center text-shadow-black-outline p-10'>
            <Link href="/menu">Menu</Link>
          </div>
          <div className='text-3xl md:text-4xl lg:text-5xl font-bold text-trapiche-tan text-center text-shadow-black-outline p-10'>
            <Link href="/aboutus">Nosotros</Link>
          </div>
          <div className='text-3xl md:text-4xl lg:text-5xl font-bold text-trapiche-tan text-center text-shadow-black-outline p-10'>
            <Link href="/contactus">Contáctenos</Link>
          </div>
        </div>
      </div>
    </>
  )
}
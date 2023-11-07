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
      <div className="flex flex-col min-h-screen bg-cover bg-center justify-start pt-28" 
        style={{ backgroundImage: `url(https://res.cloudinary.com/drc0myo7z/image/upload/v1694794032/Trapiche/csfog9quttnwc4fslclk.jpg)` }}>
          <div className='flex items-center justify-center sm:justify-end sm:pr-28 sm:pb-10'>  
              <div className='absolute ml-0 sm:ml-4 flex pb-24'> 
                  <div className='relative w-40 h-58'>
                      <Image src='https://res.cloudinary.com/drc0myo7z/image/upload/v1697631966/Trapiche/logos/panaderia-trapiche-logo-transp_svx12v.gif' 
                          alt="Logo" layout="responsive" width={12} height={12}/>
                  </div>
              </div>    
              <div className="relative w-48 h-48">
                  <Image src='https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_256/v1697420759/Trapiche/logos/Logos-Trapiche-Bakery-1-_1__yg7wqm.gif' 
                      alt="Logo" layout="responsive" width={12} height={12}/>
              </div>     
          </div>
          <div className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white text-center text-shadow-black-outline pt-20 sm:pt-0 p-10'>
            <Link href="/menu">Menu</Link>
          </div>
          <div className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white text-center text-shadow-black-outline p-10'>
            <Link href="/aboutus">De nosotros</Link>
          </div>
          <div className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-white text-center text-shadow-black-outline p-10'>
            <Link href="/contactus">Contactenos</Link>
          </div>
      </div>
    </>
  )
}
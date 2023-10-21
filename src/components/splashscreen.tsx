'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function SplashScreen () {
  const logos = ['/panaderia-trapiche-logo1.gif', '/panaderia-trapiche-logo2.gif', '/panaderia-trapiche-logo3.gif']
  const backgrounds = [
    'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694130974/Trapiche/trapiche11_myahqg.jpg',
    'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694793735/Trapiche/pfhxdjyfbwzixsd9bmxu.jpg',
    'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794037/Trapiche/se496dfjzsbl44fgw4j4.jpg',
    'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694793739/Trapiche/uimnbieqdnje89fuf6ny.jpg',
    'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694130977/Trapiche/trapiche08_rsxx64.jpg',
    'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694793702/Trapiche/dtvhcrr0b1yihmeg3w4o.jpg',
    'https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794020/Trapiche/owsqqfgdnlrvfvkem6iw.jpg',
  ]
  const [logoIndex, setLogoIndex] = useState(0)
  const [backgroundIndex, setBackgroundIndex] = useState(0)
  
  const alternateLogo = () => {
    setLogoIndex((logoIndex + 1) % logos.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((backgroundIndex + 1) % backgrounds.length)
    }, 15000); // Change the interval time (in milliseconds) as needed
    return () => clearInterval(interval)
  }, [backgroundIndex, backgrounds.length])

  return (
    <>
      <div className="flex flex-col min-h-screen bg-cover bg-center justify-start" 
        style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}>
          <div className='flex items-center justify-center sm:justify-start pt-28 pb-16 pl-0 sm:pl-16'>  
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
          <div className="flex items-center justify-center">
            <div className="text-center bg-black/30 w-80 py-5 rounded-3xl text-shadow-black-outline whitespace-nowrap">
              <h1 className="text-4xl font-bold text-amber-200">Coming Soon</h1>
            </div>
          </div>
      </div>
    </>
  )
}
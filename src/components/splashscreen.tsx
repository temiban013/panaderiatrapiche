'use client'

import { useState } from 'react'
import Menu from './menu'
import Logo from './logo'

export default function SplashScreen () {
  const logos = ['/panaderia-trapiche-logo1.gif', '/panaderia-trapiche-logo2.gif', '/panaderia-trapiche-logo3.gif']

  const [logoIndex, setLogoIndex] = useState(0)
  
  const alternateLogo = () => {
    setLogoIndex((logoIndex + 1) % logos.length)
  }

  return (
    <>
      <div className='lg:block hidden'>
        <div className="flex flex-col min-h-screen bg-cover bg-center bg-trapiche-orange justify-center items-center" 
          style={{ backgroundImage: `url(https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794032/Trapiche/csfog9quttnwc4fslclk.jpg)` }}>
          <Logo/>
          <Menu/>
        </div>
      </div>      
      <div className='md:block lg:hidden hidden'>
        <div className="flex flex-col min-h-screen bg-cover bg-center bg-trapiche-orange justify-center items-center" 
          style={{ backgroundImage: `url(https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_768/v1694794032/Trapiche/csfog9quttnwc4fslclk.jpg)` }}>
          <Logo/>
          <Menu/>
        </div>
      </div>  
      <div className='sm:block md:hidden lg:hidden'>
        <div className="flex flex-col min-h-screen bg-cover bg-center bg-trapiche-orange justify-center items-center" 
          style={{ backgroundImage: `url(https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_640/v1694794032/Trapiche/csfog9quttnwc4fslclk.jpg)` }}>
          <Logo/>
          <Menu/>
        </div>
      </div>
    </>
  )
}
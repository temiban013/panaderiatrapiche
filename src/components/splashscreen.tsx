'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Head from 'next/head'

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
      <Head>
        <title>Panaderia Trapiche</title>
        <meta name='description' content='Retiro desde el coche' />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center" 
        style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}>
          <div className="w-32 mx-auto mb-4 logo rounded">
              <Image src={logos[logoIndex]} alt="Logo" layout="responsive" width={12} height={12} onClick={alternateLogo}/>
          </div>
          <div className="text-center" style={{ transform: 'translateY(-333%)' }}>
              <h1 className="text-4xl font-bold text-white">Coming Soon</h1>
          </div>
      </div>
    </>
  )
}
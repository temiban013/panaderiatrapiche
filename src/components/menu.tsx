'use client'

import Link from "next/link"

export default function Menu (){
  return(    
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
  )
}

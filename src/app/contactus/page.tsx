'use server'

import Link from "next/link"
import Image from "next/image"

export default async function ContactUs() {
  return (
    <div className="flex flex-col bg-cover bg-trapiche-orange min-h-screen p-14">
      <div className='flex justify-center items-center'>
        <div className='text-2xl md:text-6xl lg:text-7xl font-bold text-trapiche-tan p-5'>
          <Link href="/">Inicio</Link>
        </div>
        <div className='text-2xl md:text-6xl lg:text-7xl font-bold text-trapiche-tan p-5'>
          <Link href="/menu">Menu</Link>
        </div>
        <div className='text-2xl whitespace-nowrap md:text-6xl lg:text-7xl font-bold text-trapiche-tan p-5'>
          <Link href="/aboutus">De nosotros</Link>
        </div>
      </div>        
      <div className="relative top-16 flex flex-col justify-center items-center">
        <div className="absolute -top-12 w-32 md:w-32">
          <Image src="https://res.cloudinary.com/drc0myo7z/image/upload/v1697631966/Trapiche/logos/panaderia-trapiche-logo-transp_svx12v.gif" alt="Logo" layout="responsive" width={12} height={12} />
        </div>
        <div className="absolute top-0 w-44 md:w-44 lg:w-48">
          <Image src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_256/v1697420759/Trapiche/logos/Logos-Trapiche-Bakery-1-_1__yg7wqm.gif" alt="Logo" layout="responsive" width={12} height={12} />
        </div>
      </div>
      <div className='flex w-full flex-col pt-48 justify-center text-center'>
        <div className="text-4xl text-trapiche-tan pb-10 pt-24">Contact Us</div>
        <div className="text-xl pb-3">187 Luna Street,</div>
        <div className="text-xl pb-3"> Edificio Rali 105</div>
        <div className="text-xl pb-3">San Germán, 00683</div>
        <div className="text-xl pb-3">Puerto Rico.</div>
        <div className="text-xl pb-3">+1 787-892-4673</div>
      </div>
    </div>
  )
}
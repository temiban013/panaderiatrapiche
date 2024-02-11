'use client'

import Image from "next/image"

export default function LongLogo(){
    return(
        <div className="absolute top-14 md:top-28 lg:top-44 right-8 lg:right-1/4 md:right-36">
          <div className="absolute -top-1 md:top-10 right-4 md:right-12 lg:right-10 w-20 md:w-38 lg:w-40">
            <Image className='w-full h-auto' src="https://res.cloudinary.com/drc0myo7z/image/upload/v1697631966/Trapiche/logos/panaderia-trapiche-logo-transp_svx12v.gif" alt="Logo" width={12} height={12} />
          </div>
          <div className="absolute top-6 lg:top-20 md:top-20 right-0 w-28 md:w-44 lg:w-60">
            <Image className='w-full h-auto' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_256/v1697420759/Trapiche/logos/Logos-Trapiche-Bakery-1-_1__yg7wqm.gif" alt="Logo" width={12} height={12} />
          </div>
        </div>
        )
}

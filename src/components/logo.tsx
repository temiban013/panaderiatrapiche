'use client'

import Image from 'next/image'

export default function Logo (){
    return (
    <div className="-top-2 relative flex flex-col justify-center items-center">
        <div className="absolute -top-12 w-32 md:w-32">
        <Image className='w-full h-auto' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_100/v1697631966/Trapiche/logos/panaderia-trapiche-logo-transp_svx12v.gif" alt="Logo" width={12} height={12} />
        </div>
        <div className="absolute top-0 w-44 md:w-44 lg:w-48 h-auto">
        <Image className='w-full h-auto' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_256/v1697420759/Trapiche/logos/Logos-Trapiche-Bakery-1-_1__yg7wqm.gif" alt="Logo" width={40} height={40} />
        </div>
    </div>
    )
}

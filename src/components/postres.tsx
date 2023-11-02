'use client'

import Image from "next/image"

export default function Platos() {
    return (
        <>
            <div className='min-h-screen bg-cover'
                    style={{ backgroundImage: `url(https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694793743/Trapiche/rlcfmmbypuck0roqljdz.jpg)`,
                            backgroundPosition: '20% center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',}}>
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 min-w-[311px]">
                    <div className="sm:order-1 order-2 justify-center items-center sm:pt-24 pt-0 pl-10 sm:pr-0 pr-10">
                        <div className="flex flex-col items-stretch gap-1 sm:gap-2 bg-black/30 rounded-3xl lg:text-3xl md:text-2xl text-xl p-10">
                            <div className="text-white text-center font-bold lg:text-4xl md:text-3xl text-2xl text-shadow-black-outline pb-10">
                                Variedad de Postres
                            </div>
                            
                            <div className='flex py-5 lg:pl-14 md:pl-8 sm:pl-5 gap-4'>
                                <ul className="list-disc lg:leading-relaxed leading-normal  text-white text-shadow-black-outline text-left">
                                    <li>Cheesecake de Oreo</li>
                                    <li>Cheesecake de chocolate</li>
                                    <li>Cheesecake de fresa</li>
                                    <li>Brazo Gitano</li>
                                    <li>Budín</li>
                                    <li>Bizcochos</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='sm:order-2 order-1 flex items-center justify-center pt-24'>  
                        <div className='absolute flex items-center justify-center pb-24'> 
                            <div className='relative sm:w-40 sm:h-58 w-32 h-50'>
                                <Image src='https://res.cloudinary.com/drc0myo7z/image/upload/v1697631966/Trapiche/logos/panaderia-trapiche-logo-transp_svx12v.gif' 
                                    alt="Logo" layout="responsive" width={12} height={12}/>
                            </div>
                        </div>    
                        <div className="relative sm:w-48 sm:h-48 w-40 h-40">
                            <Image src='https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_256/v1697420759/Trapiche/logos/Logos-Trapiche-Bakery-1-_1__yg7wqm.gif' 
                                alt="Logo" layout="responsive" width={12} height={12}/>
                        </div>     
                    </div>
                </div>
            </div>
        </>
    )
}


'use client'

import Image from "next/image"

export default function Postres() {
    return (
        <>
            <div className='min-h-screen bg-cover'
                    style={{ backgroundImage: `url(https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694793743/Trapiche/rlcfmmbypuck0roqljdz.jpg)`,
                            backgroundPosition: '65% bottom',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',}}>
                <div className='relative top-20 left-1/2 sm:left-2/3 transform -translate-x-1/2 flex items-center justify-center min-w-[311px]'>  
                    <div className='absolute flex items-center justify-center pb-24'> 
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
                <div className="sm:justify-start justify-center items-center">
                    <div className="lg:text-4xl md:text-3xl text-xl translate-y-20 sm:transform sm:-translate-y-20 z-0" >
                        <div className='flex flex-col w-auto sm:w-[45%] gap-2 sm:gap-1 mx-5 p-10 bg-black/40 rounded-3xl'>
                            <div className="text-white font-bold lg:text-4xl md:text-3xl text-2xl text-shadow-black-outline text-center">
                                Varierdad de Postres
                            </div>
                            <div className='flex py-5 lg:pl-14 md:pl-8 sm:pl-5'>
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
                </div>
            </div>
        </>
    )
}
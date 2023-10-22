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
                <div className='relative top-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center'>  
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
                <div className="lg:text-3xl md:text-2xl" >
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 pt-16 sm:pt-10 mx-5'>
                        <div className='flex flex-col gap-1 sm:gap-3 p-5 bg-black/30 rounded-3xl'>
                            <div className='flex space-x-3'>
                                <div className='text-white text-shadow-black-outline whitespace-nowrap'>Pan Sobao:</div>                        
                                <div className='flex-column text-end'>
                                    <div className='text-shadow-black-outline whitespace-nowrap'>1/2 Libra: $1.50</div>
                                    <div className='text-shadow-black-outline whitespace-nowrap'>1 Libra: $3.00</div>
                                </div>
                            </div>
                            <div className='flex space-x-3'>
                                <div className='text-white text-shadow-black-outline whitespace-nowrap'>Pan de Agua:</div>                        
                                <div className='flex-column text-end'>
                                    <div className='text-shadow-black-outline whitespace-nowrap'>1/2 Libra: $1.50</div>
                                    <div className='text-shadow-black-outline whitespace-nowrap'>1 Libra: $3.00</div>
                                </div>
                            </div>
                            <div className='flex space-x-3'>
                                <div className='text-white text-shadow-black-outline whitespace-nowrap'>Con Ajo:</div>                        
                                <div className='text-shadow-black-outline whitespace-nowrap'>$3.50</div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 sm:gap-3 p-5 bg-black/30 rounded-3xl'>
                        <div className='flex space-x-3 justify-start sm:justify-end'>
                            <div className='text-shadow-black-outline'>Café:</div>                        
                                <div className='flex-column'>
                                    <div className='text-shadow-black-outline'>$1.60</div>
                                    <div className='text-shadow-black-outline'>$2.50</div>
                                </div>
                            </div>
                            <div className='flex space-x-3 justify-start sm:justify-end'>
                                <div className='text-white text-shadow-black-outline whitespace-nowrap'>Cappuccino:</div>                        
                                <div className='flex-column text-end'>
                                    <div className='text-shadow-black-outline whitespace-nowrap'>$2.50</div>
                                    <div className='text-shadow-black-outline whitespace-nowrap'>$3.50</div>
                                </div>
                            </div>
                            <div className='flex space-x-3 justify-start sm:justify-end'>
                                    <div className='text-white text-shadow-black-outline whitespace-nowrap'>Galletas de Manteca:</div>
                                    <div className='text-shadow-black-outline whitespace-nowrap'>$3.00</div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-black/30 rounded-3xl mt-5 p-5 mx-5 gap-2 sm:gap-3 flex flex-col'>
                        <div className='flex space-x-3'>
                            <div className='text-white text-shadow-black-outline whitespace-nowrap'>Panes Artesanales:</div>                        
                            <div className='text-shadow-black-outline whitespace-nowrap'>$4.00</div>
                        </div>             
                        <div className='grid grid-rows-5 gap-1 sm:gap-3 sm:grid-rows-3 grid-flow-col'>
                            <div className='text-shadow-black-outline'>Pan de Anón</div> 
                            <div className='text-shadow-black-outline'>Ajonjolí</div> 
                            <div className='text-shadow-black-outline'>Avena</div> 
                            <div className='text-shadow-black-outline'>Integral Criollo</div> 
                            <div className='text-shadow-black-outline'>Cebolla</div> 
                            <div className='text-shadow-black-outline'>Bacon</div> 
                            <div className='text-shadow-black-outline'>Multi-Granos</div> 
                            <div className='text-shadow-black-outline'>Calabaza</div> 
                            <div className='text-shadow-black-outline'>RoseMary</div> 
                            <div className='text-shadow-black-outline'>Dulse con Pasas</div> 
                            <div className='text-shadow-black-outline'>Maíz</div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
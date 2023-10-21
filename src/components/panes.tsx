'use client'

import Image from "next/image"

export default function Panes() {
    return (
        <>
            <div className='min-h-screen bg-cover min-w-[380px]'
                    style={{ backgroundImage: `url(https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1697413842/Trapiche/lsgceibitwu69x9ntulf_hyrbwy.jpg)`,
                            backgroundPosition: '65% bottom',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',}}>
                <div className='relative top-20 left-1/2 transform -translate-x-1/2 flex items-center justify-center min-w-[311px]'>  
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
                        <div className='flex flex-col gap-1 sm:gap-2 p-5 bg-black/30 rounded-3xl'>
                            <div className="text-white font-bold lg:text-4xl md:text-3xl text-2xl text-shadow-black-outline">
                                Pan Criollo
                            </div>
                            <div className="flex-col">
                                <div className="flex text-xs md:text-sm lg:gap-5">
                                    <div className="w-28 lg:w-48 md:w-36"></div>
                                    <div className="text-right w-16">1/2 lb.</div>
                                    <div className="text-right w-14">1 lb.</div>
                                </div>
                                <div className='flex space-x-3'>
                                    <div className='w-24 lg:w-48 md:w-36 lg:gap-3 text-white text-shadow-black-outline whitespace-nowrap'>Pan Sobao:</div>    
                                    <div className='text-shadow-black-outline whitespace-nowrap text-right w-16 lg:w-20'>$1.50</div>  
                                    <div className='text-shadow-black-outline whitespace-nowrap text-right w-16 lg:w-24'>$3.00</div>     
                                </div>
                            </div>
                            <div className='flex space-x-3'>
                                <div className='w-24 lg:w-48 md:w-36 lg:gap-5 text-white text-shadow-black-outline whitespace-nowrap'>Pan de Agua:</div>                        
                                <div className='text-shadow-black-outline whitespace-nowrap text-right w-16 lg:w-20'>$1.50</div>
                                <div className='text-shadow-black-outline whitespace-nowrap text-right w-16 lg:w-24'>$3.00</div>
                            </div>
                            <div className='flex space-x-3'>
                                <div className='w-24 lg:w-48 md:w-36 text-white text-shadow-black-outline whitespace-nowrap'>Con Ajo:</div>                        
                                <div className='text-shadow-black-outline whitespace-nowrap pl-5 md:pl-8 lg:pl-10'>$3.50</div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 sm:gap-2 p-5 bg-black/30 rounded-3xl'>
                            <div className="text-white font-bold lg:text-4xl md:text-3xl text-2xl text-shadow-black-outline text-left sm:text-right">
                                Cafés
                            </div>
                            <div className='flex ustify-start sm:justify-end'>
                                <div className="flex-col space-y-1">
                                    <div className="flex gap-3 text-xs md:text-sm justify-start sm:justify-end">
                                        <div className="w-24 lg:w-48 md:w-40"></div>
                                        <div className="text-center w-16 lg:w-28">peq.</div>
                                        <div className="text-center w-14">grande</div>
                                    </div>  
                                    <div className="flex justify-start sm:justify-end lg:gap-5">
                                        <div className='text-shadow-black-outline w-20 lg:w-48 md:w-40 text-start sm:text-end'>Café:</div>                            
                                        <div className='text-shadow-black-outline text-end w-20'>$1.60</div>
                                        <div className='text-shadow-black-outline text-end w-20'>$2.50</div>   
                                    </div>   
                                    <div className='flex justify-start sm:justify-end lg:gap-5'>
                                        <div className='text-shadow-black-outline w-20 lg:w-48 md:w-40 text-right'>Cappuccino:</div> 
                                        <div className='text-shadow-black-outline text-end w-20'>$2.50</div>
                                        <div className='text-shadow-black-outline text-end w-20'>$3.50</div>   
                                    </div>
                                    <div className='flex justify-start sm:justify-end'>
                                            <div className='text-shadow-black-outline w-40 md:w-64 lg:w-80'>Galletas de Manteca:</div>
                                            <div className='text-shadow-black-outline whitespace-nowrap w-20 text-right'>$3.00</div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='bg-black/30 rounded-3xl mt-5 p-5 mx-5 gap-3 flex flex-col'>
                        <div className='flex space-x-3'>
                            <div className='text-white text-shadow-black-outline whitespace-nowrap font-bold lg:text-4xl md:text-3xl text-2xl '>Panes Artesanales:</div>                        
                            <div className='text-shadow-black-outline whitespace-nowrap self-end'>$4.00</div>
                        </div>             
                        <div className='grid grid-rows-5 sm:grid-rows-3 grid-flow-col lg:gap-4 md:gap-2.5 space-x-2 gap-1 justify-start'>
                            <div className='text-shadow-black-outline whitespace-nowrap'>Pan de Anón</div> 
                            <div className='text-shadow-black-outline'>Ajonjolí</div> 
                            <div className='text-shadow-black-outline'>Avena</div> 
                            <div className='text-shadow-black-outline whitespace-nowrap'>Integral Criollo</div> 
                            <div className='text-shadow-black-outline'>Cebolla</div> 
                            <div className='text-shadow-black-outline'>Bacon</div> 
                            <div className='text-shadow-black-outline'>Multi-Granos</div> 
                            <div className='text-shadow-black-outline'>Calabaza</div> 
                            <div className='text-shadow-black-outline'>RoseMary</div> 
                            <div className='text-shadow-black-outline whitespace-nowrap'>Dulse con Pasas</div> 
                            <div className='text-shadow-black-outline'>Maíz</div> 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
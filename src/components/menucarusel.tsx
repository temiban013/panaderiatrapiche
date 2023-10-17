'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function MenuCarousel () {

    return (
        <>
            <div className="logo">
                <Image src='https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_256/v1697420759/Trapiche/logos/Logos-Trapiche-Bakery-1-_1__yg7wqm.gif' 
                    alt="Logo" layout="responsive" width={12} height={12}/>
            </div>
            <div className="min-h-screen bg-cover" 
                style={{ backgroundImage: `url(https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1697413842/Trapiche/lsgceibitwu69x9ntulf_hyrbwy.jpg)`,
                        backgroundPosition: '65% bottom',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',}}>
                            
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 pt-48 mx-5'>
                    <div className='flex flex-col gap-3 p-5 bg-black/30 rounded-3xl lg:text-3xl md:text-2xl'>
                        <div className='flex space-x-3'>
                            <div className='text-shadow-black-outline'>Café:</div>                        
                            <div className='flex-column'>
                                <div className='text-shadow-black-outline'>$1.60</div>
                                <div className='text-shadow-black-outline'>$2.50</div>
                            </div>
                        </div>
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
                            <div className='text-white text-shadow-black-outline whitespace-nowrap'>Panes Artesanales:</div>                        
                            <div className='text-shadow-black-outline whitespace-nowrap'>$4.00</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-3 p-5 bg-black/30 rounded-3xl lg:text-3xl md:text-2xl'>
                        <div className='flex space-x-3 justify-start sm:justify-end'>
                                <div className='text-white text-shadow-black-outline whitespace-nowrap'>Galletas de Manteca:</div>
                                <div className='text-shadow-black-outline whitespace-nowrap'>$3.00</div>
                        </div>
                        <div className='flex space-x-3 justify-start sm:justify-end'>
                            <div className='text-white text-shadow-black-outline whitespace-nowrap'>Con Ajo:</div>                        
                            <div className='text-shadow-black-outline whitespace-nowrap'>$3.50</div>
                        </div>
                        <div className='flex space-x-3 justify-start sm:justify-end'>
                            <div className='text-white text-shadow-black-outline whitespace-nowrap'>Cappuccino:</div>                        
                            <div className='flex-column text-end'>
                                <div className='text-shadow-black-outline whitespace-nowrap'>$2.50</div>
                                <div className='text-shadow-black-outline whitespace-nowrap'>$3.50</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid grid-rows-5 sm:grid-rows-3 grid-flow-col gap-3 mt-5 p-5 mx-5 bg-black/30 rounded-3xl lg:text-3xl md:text-2xl'>
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
        </>
    )
}
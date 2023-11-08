import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

export default function LongMenu() {
  return (
    <>
      <div className="snap-x snap-mandatory snap-align-start snap-justify-start overflow-x-auto bg-trapiche-orange">

          <Image className="snap-center shrink-0" alt='Dish 1' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794032/Trapiche/csfog9quttnwc4fslclk.jpg" width={2000} height={533} />
          <Image className="snap-center shrink-0" alt='Menu 1' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1698865366/Trapiche/Menus/Trapiche_web_4_vkohwz.jpg" width={2000} height={533} />
          
          <Image className="snap-center shrink-0" alt='Dish 2' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694793711/Trapiche/e3vdyaka8jvufm9nihhb.jpg" width={2000} height={533} />
          <Image className="snap-center shrink-0" alt='Menu 2' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1698883936/Trapiche/Menus/Trapiche_web_6_md6fax.jpg" width={2000} height={533} />

          <Image className="snap-center shrink-0" alt='Dish 3' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694130971/Trapiche/trapiche06_tlbdir.jpg" width={2000} height={533} />
          <Image className="snap-center shrink-0" alt='Menu 3' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1699311688/Trapiche/Menus/Trapiche_web_7_wpig8d.jpg" width={2000} height={533} />

          <Image className="snap-center shrink-0" alt='Dish 4' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794031/Trapiche/hyfpq2ehquzlp8tzgpct.jpg" width={2000} height={533} />
          <Image className="snap-center shrink-0" alt='Menu 4' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1698865366/Trapiche/Menus/Trapiche_web_4_vkohwz.jpg" width={2000} height={533} />

          <Image className="snap-center shrink-0" alt='Dish 5' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794037/Trapiche/n1uqrvehui4pisinbe3r.jpg" width={2000} height={533} />
          <Image className="snap-center shrink-0" alt='Menu 5' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1698865367/Trapiche/Menus/Trapiche_Web_5_wgxjls.jpg" width={2000} height={533} />

          <Image className="snap-center shrink-0" alt='Dish 6' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694794022/Trapiche/bs8mjahgqcs3fynxsyci.jpg" width={2000} height={533} />
          <Image className="snap-center shrink-0" alt='Menu 6' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1698883936/Trapiche/Menus/Trapiche_web_6_md6fax.jpg" width={2000} height={533} />

          <Image className="snap-center shrink-0" alt='Dish 7' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1694793718/Trapiche/cnn39vnke26twuq2pkfo.jpg" width={2000} height={533} />
          <Image className="snap-center shrink-0" alt='Menu 7' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1699311688/Trapiche/Menus/Trapiche_web_7_wpig8d.jpg" width={2000} height={533} />
        
      </div>
      <div className='absolute top-8 md:top-28 lg:top-44 left-3 md:left-16 lg:left-20'>
        <div className='text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-trapiche-tan text-center text-shadow-black-outline p-4 md:p-8 lg:p-10'>
          <Link href="/">Inicio</Link>
        </div>
        <div className='text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-trapiche-tan text-center text-shadow-black-outline p-4 md:p-8 lg:p-10'>
          <Link href="/aboutus">De nosotros</Link>
        </div>
        <div className='text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-trapiche-tan text-center text-shadow-black-outline p-4 md:p-8 lg:p-10'>
          <Link href="/contactus">Contactenos</Link>
        </div>
      </div>
      <div className="absolute top-14 md:top-28 lg:top-44 right-8 lg:right-1/4 md:right-36">
        <div className="absolute -top-1 md:top-10 right-4 md:right-12 lg:right-10 w-20 md:w-38 lg:w-40">
          <Image src="https://res.cloudinary.com/drc0myo7z/image/upload/v1697631966/Trapiche/logos/panaderia-trapiche-logo-transp_svx12v.gif" alt="Logo" layout="responsive" width={12} height={12} />
        </div>
        <div className="absolute top-6 lg:top-20 md:top-20 right-0 w-28 md:w-44 lg:w-60">
          <Image src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_256/v1697420759/Trapiche/logos/Logos-Trapiche-Bakery-1-_1__yg7wqm.gif" alt="Logo" layout="responsive" width={12} height={12} />
        </div>
      </div>
    </>
  )
}

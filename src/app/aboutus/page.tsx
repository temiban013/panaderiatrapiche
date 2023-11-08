'use server'

import Image from 'next/image';
import Layout from "./layout";

export default async function AboutUs() {
  return (
    <Layout>
        
      <div className="snap-x snap-mandatory snap-align-start snap-justify-start overflow-x-auto">
        
        <Image className="snap-center shrink-0" alt='Dish 1' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1699453919/Trapiche/Menus/About_US_1_wlwhyx.jpg" width={2000} height={533} />
        <div className="absolute top-5 right-2 lg:right-32 md:right-16">
          <div className="absolute top-0 right-2 lg:right-5 w-12 md:w-32 lg:w-36">
            <Image src="https://res.cloudinary.com/drc0myo7z/image/upload/v1697631966/Trapiche/logos/panaderia-trapiche-logo-transp_svx12v.gif" alt="Logo" layout="responsive" width={12} height={12} />
          </div>
          <div className="absolute top-6 lg:top-20 md:top-20 right-0 w-16 md:w-40 lg:w-48">
            <Image src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_256/v1697420759/Trapiche/logos/Logos-Trapiche-Bakery-1-_1__yg7wqm.gif" alt="Logo" layout="responsive" width={12} height={12} />
          </div>
        </div>
      </div>
        {/* <div className="flex items-stretch flex-col justify-center">
          <h1>About Us</h1>
          <h3>La Panadería Trapiche fue fundada en 1979 en la localidad del edificio Rali, con alrededor de 1200 pies cuadrados.</h3>
          <h3>En el 2020 se adquirió el edificio del antiguo Banco Santander, duplicando el espacio de la panadería añadiendo un serví carro al local. </h3>
          <h3>La Panadería Trapiche se destaca por su famoso pan de manteca y budín de pan, los cuales son los más vendidos.</h3>
          <h3>Hemos añadido un sinnúmero de panes artesanales, dulces, sándwiches y comidas criollas, convirtiéndose en la panadería favorita en San German y de pueblos limítrofes.</h3>
        </div> */}
    </Layout>
  )
}

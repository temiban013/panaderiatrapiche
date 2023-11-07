'use server'

import Image from 'next/image';
import Layout from "./layout";

export default async function AboutUs() {
  return (
    <Layout>
        
      <div className="snap-x snap-mandatory snap-align-start snap-justify-start overflow-x-auto">
        
      <Image className="snap-center shrink-0" alt='Dish 1' src="https://res.cloudinary.com/drc0myo7z/image/upload/c_scale,w_1080/v1699376525/Trapiche/Menus/About_US_hvnvcc.jpg" width={2000} height={533} />
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

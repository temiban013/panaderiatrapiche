'use client'

import React, {useState} from 'react'
import Image from 'next/image'
import Head from 'next/head'

const SplashScreen: React.FC = () => {
  const logos = ['/panaderia-trapiche-logo1.gif', '/panaderia-trapiche-logo2.gif', '/panaderia-trapiche-logo3.gif'];
  const [logoIndex, setLogoIndex] = useState(0);
  
  const alternateLogo = () => {
    setLogoIndex((logoIndex + 1) % logos.length);
  }

  return (
    <>
      <Head>
        <title>Panaderia Trapiche</title>
        <meta name='deacription' content='Retiro desde el coche' />
      </Head>
      <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/DSCF6354.jpg)' }}>
          <div className="w-32 mx-auto mb-4 logo rounded">
              <Image src={logos[logoIndex]} alt="Logo" layout="responsive" width={12} height={12} onClick={alternateLogo}/>
          </div>
          <div className="text-center" style={{ transform: 'translateY(-333%)' }}>
              <h1 className="text-4xl font-bold text-white">Coming Soon</h1>
          </div>
      </div>
    </>
  );
};

export default SplashScreen;
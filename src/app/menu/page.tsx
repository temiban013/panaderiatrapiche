'use client'

import Head from 'next/head'
import MenuCarousel from '../../components/menucarusel';

export default function Menu() {
    return (
        <>
          <Head>
            <title>Panaderia Trapiche</title>
            <meta name='description' content='Retiro desde el coche' />
          </Head>
          <MenuCarousel />
        </>
      )
}

'use client'

import Head from 'next/head'
import MenuCarousel from '../../components/menucarusel';

export default function Menu() {
    return (
        <>
          <Head>
            <title>Panaderia Trapiche</title>
            <meta name='description' content='Variedad de panes artensanales, cafés y más.' />
          </Head>
          <MenuCarousel />
        </>
      )
}

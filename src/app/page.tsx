'use client'

import Head from 'next/head'
import SplashScreen from '../components/splashscreen';

export default function Home() {
  return (
    <main>
      <Head>
        <title>Panaderia Trapiche</title>
        <meta name='description' content='Retiro desde el coche' />
      </Head>
      <SplashScreen />
    </main>
  )
}

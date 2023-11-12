'use server'

import Head from 'next/head'
import LongMenu from '../../components/longmenu'
import Layout from './layout'

export default async function Menu() {
  return (
    <Layout>
      <LongMenu />
    </Layout>
  )
}

import { Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Teste de Git & Next</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Typography>Teste</Typography>
    </>
  )
}

export default Home

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/Layout/indes'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Teste de Git & Next</title>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp

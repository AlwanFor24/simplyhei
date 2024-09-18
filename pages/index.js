import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Alwan Maulana Firdaus" />
        <p className="description">
          1227050017 <code>IF UIN Bandung </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

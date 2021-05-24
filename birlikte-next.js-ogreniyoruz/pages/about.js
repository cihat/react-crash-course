import Link from "next/link"
import Head from "next/head"

const about = () => {
  return (
    <div>
      <Head>
        <title>Hakkımda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>About Page </h3>
      <Link href="/">Geri Dön</Link>
    </div>
  )
}

export default about

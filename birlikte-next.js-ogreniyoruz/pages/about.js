import Head from "next/head"
import Link from "next/link"

const about = () => {
  return (
    <>
      <Head>
        <title>Hakkımda</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>About Page </h3>
      <Link href="/">Geri Dön</Link>

      <style jsx>{`
        h3 {
          font-size: 20px;
          font-weight: 500;
          color: orangered;
        }
      `}</style>
    </>
  )
}

export default about

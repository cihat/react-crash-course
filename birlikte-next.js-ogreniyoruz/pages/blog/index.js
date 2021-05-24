import Link from "next/link"
import Head from "next/head"

const index = () => {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Blog Page</h3>
      <Link href="/">Geri Dön</Link>
    </div>
  )
}

export default index

import Link from "next/link"
import Head from "next/head"

const post = () => {
  return (
    <div>
      <Head>
        <title>Post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h3>Post Page</h3>
      <Link href="/">Geri Dön</Link>
    </div>
  )
}

export default post

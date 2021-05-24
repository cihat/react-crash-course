import Head from 'next/head'
import Layout, { siteTitle } from '../components/Layout'
import utilStyles from '../public/styles/utils.module.css'

const cihat = () => {
  return (
    <Layout istanbul>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Istanbul Awesome</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  )
}

export default cihat

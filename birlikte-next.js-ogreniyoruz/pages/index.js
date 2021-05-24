import Head from "next/head"
import Popular from "../components/Popular"

const Home = ({ movies }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Popular movies={movies} />
    </>
  )
}

export async function getStaticProps() {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=dd6e04fc4a1cff82f8e5bdc793d3137e&language=en-US&page=1`
  )
  const movies = await request.json()

  return {
    props: {
      movies,
    },
  }
}

export default Home

import Head from "next/head"
import style from "./film.module.scss"

const FilmDetail = ({ movie }) => {
  // console.log(movie)
  return (
    <div className={style.movie}>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <div
        className={style.cover}
        style={{
          backgroundImage: `url(https://www.themoviedb.org/t/p/original${movie.backdrop_path})`,
        }}
      ></div>
      <h3>{movie.title}</h3>
      <div className={style.summary}>{movie.overview}</div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const request = await fetch(
    `https://api.themoviedb.org/3/movie/${params.url}?api_key=dd6e04fc4a1cff82f8e5bdc793d3137e&language=tr-TR`
  )

  const movie = await request.json()

  return {
    props: {
      movie,
    },
  }
}

export default FilmDetail

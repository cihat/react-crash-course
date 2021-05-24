import Link from "next/link"
import styles from './popular.module.scss'

const popular = ({ movies }) => {
  console.log(movies)

  return (
    <div className={styles.popular}>
      <h2>Popular Films</h2>
      <div className={styles['popular-inner']}>
        {movies.results.map((movie) => (
          <Link
            href={`/film/${movie.id}`}
            className={styles['movie-cart']}
            key={movie.id}
          >
            <a>
              <h3>{movie.title}</h3>
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt={`${movie.title}`}
                title={`${movie.title}`}
              />
            </a>
          </Link>
        ))}
      </div>
    </div> 
  )
}

export async function getStaticProps({params}) {
  return {
    props: {
      params
    }
  }
}

export default popular

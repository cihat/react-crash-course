import Link from "next/link"

const popular = ({ movies }) => {
  // console.log(movies)

  return (
    <div className="popular">
      <h2>Popular Films</h2>
      <div className="popular-inner">
        {movies.results.map((movie) => (
          <Link
            href={`/film/${movie.id}`}
            className="movie-cart"
            key={movie.id}
          >
            <a>
              <h3>{movie.title}</h3>
              <img
                src={`https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`}
                alt=""
              />
            </a>
          </Link>
        ))}
      </div>
      <style jsx>{`
        .popular {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px 0;

          h2 {
            font-size: 40px;
            margin-bottom: 20px;
          }

          .popular-inner {
            display: flex;
            flex-wrap: wrap;
            padding-left: 0.5rem;
            padding-right: 0.5rem;
            gap: 0.5rem;

            a {
              width: calc(25% - 0.5rem);
              position: relative;

              h3 {
                font-size: 20px;
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                font-size: 2vw;
                color: #fff;
                background: linear-gradient(to, top, #000, transparent);
                padding: 50px 20px 20px 20px;
              }

              img {
                width: 100%;
              }
            }
          }
        }
      `}</style>
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

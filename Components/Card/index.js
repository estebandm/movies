import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { CardStyles } from './styles'
import ChangePage from './ChangePage'
import PageNotFound from 'Components/NotFound'

export const Card = ({ data }) => {
  const [loader, setLoader] = useState(false)
  const router = useRouter()
  const pageLimit = Math.floor(data.movie_count / data.limit)
  const goDetails = (idMovie) => {
    router.push(`/details/${idMovie}`)
  }

  const onLoad = () => {
    setLoader(true)
  }
  if (data.movies) {
    return (
      <>
        <section>
          {data.movies.length > 0 && data.movies.map(movie => (
            <div
              key={movie.id}
              onClick={() => goDetails(movie.id)}
            >
              {loader &&
              <h3>{movie.title}</h3>
              }
              <img onLoad={onLoad} src={movie.medium_cover_image} />
              {loader &&
              <footer>
                <span>
                  {movie.genres
                    ? movie.genres.map((genre, index) => (
                      <h6 key={index}>{genre}</h6>
                    ))
                    : <h6>Sin género</h6>}
                </span>
                <h6>{movie.year}</h6>
              </footer>
              }
            </div>
          ))}
        </section>
        <ChangePage
          asPath={router.asPath}
          query={router.query}
          pageLimit={pageLimit}
        />
        <style jsx>{CardStyles}</style>
      </>
    )
  }
  return (
    <PageNotFound/>
  )
}

export default Card

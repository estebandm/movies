import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import Search from 'Components/Core/InputSearcher'

const height = '120px'

const initialMovieToSearch = {
  value: '',
  error: false,
  textError: ''
}

export const Searcher = () => {
  const router = useRouter()
  const [movieToSearch, setMovieToSearch] = useState(initialMovieToSearch)
  const [classSearch, setClassSearch] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    movieToSearch.value.length === 0
      ? setMovieToSearch({ error: true, textError: 'Ingrese un texto' })
      : router.push(`/search/movie/${movieToSearch.value}`)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 600) {
        const moveComponentSearch = () => {
          if (window.scrollY >= 58) { setClassSearch('change-search-position') } else setClassSearch('')
        }
        window.addEventListener('scroll', moveComponentSearch)
      }
    }
  }, [])

  return (
    <>
      <form
        className={classSearch}
        onSubmit={onSubmit}
      >
        {movieToSearch.error && <h6>{movieToSearch.textError}</h6>}
        <Search
          setMovieToSearch={setMovieToSearch}
          movieToSearch={movieToSearch}
          classSearch={classSearch}
        />
      </form>

      <style jsx>{`
        h6{
            color: red;
        }
        .change-search-position{
          position: sticky;
          top: 0;
          left: calc(50% - 123.5px);
          display: flex;
          justify-content: center;
          z-index: 10000;
          height: ${height};
          max-width: 240px;
        }
        `}
      </style>
    </>
  )
}

export default Searcher

import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { ChangePageStyles } from './styles'
import ArrowLeft from 'assets/Icons/ArrowLeft'
import ArrowRight from 'assets/Icons/ArrowRight'

export const ChangePage = ({ asPath, query, pageLimit }) => {
  const router = useRouter()
  const pageNumberToGo = Number(router.query.page) > 0 ? Number(router.query.page) : 1
  const [page, setPage] = useState(pageNumberToGo)
  const buttonLeftDisabled = page === 1 ? 'button-disabled' : ''
  const buttonRightDisabled = page === pageLimit ? 'button-disabled' : ''
  const navigate = 1
  const goPage = (forwardOrBackward) => {
    setPage(page + forwardOrBackward)
    if (asPath === '/' || asPath.includes('/movie/page')) {
      router.push(`/movie/page/${pageNumberToGo + forwardOrBackward}`)
    }
    asPath.includes('genre') &&
      router.push(`/movie/genre/${query.genre}/page/${pageNumberToGo + forwardOrBackward}`)
    asPath.includes('filter_movie') &&
      router.push(`/movie/filter_movie/${query.filter_movie}/page/${pageNumberToGo + forwardOrBackward}`)
  }
  return (
    <>
      <footer className='container--change-page'>
        <nav>
          <button
            disabled={page === 1}
            className={buttonLeftDisabled}
            onClick={() => goPage(-navigate)}>
            <ArrowLeft />
          </button>
          <h6>Página {page} de {pageLimit}</h6>
          <button
            onClick={() => goPage(navigate)}
            disabled={page === pageLimit}
            className={buttonRightDisabled}
          >
            <ArrowRight />
          </button>
        </nav>
      </footer>
      <style jsx>{ChangePageStyles}</style>
    </>
  )
}

export default ChangePage

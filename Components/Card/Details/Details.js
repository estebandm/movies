import React, { useState, useEffect } from 'react'

import { CardDetailsStyes } from '../styles'
import SkeletonCardDetails from 'Components/Skeleton/CardDetails'
import Button from 'Components/Core/Button'
import ButtonSkeleton from 'Components/Skeleton/Button'
import ArrowLeft from 'assets/Icons/ArrowLeft'
import { breakPoints } from 'Constants/index'
import breakPointObserver from 'Hooks/useBreakpoint'

export const DetailsCard = ({ movieDetails }) => {
  const [loader, setLoader] = useState(false)
  const [breakPoint, setBreakPoint] = useState()

  const onLoad = () => {
    setLoader(true)
  }
  useEffect(() => {
    breakPointObserver(breakPoints, setBreakPoint)
  }, [breakPoint])
  return (
    <>
      <main>
        <img onLoad={onLoad} src={movieDetails.background_image_original}/>
        {loader
          ? <>
            <Button withClass goBack>
              { breakPoint === 'mobile'
                ? <ArrowLeft/>
                : 'Atrás'}
            </Button>
            <section>
              <picture>
                <img src={movieDetails.medium_cover_image}/>
              </picture>
              <div>
                <h1>{movieDetails.title}</h1>
                <h6>{movieDetails.description_intro
                  ? movieDetails.description_intro
                  : 'Sin descripción'
                }</h6>
                <footer>
                  <span>
                    <h5>Duracion: {movieDetails.runtime}min</h5>
                    <h5>{movieDetails.year}</h5>
                  </span>
                  <span>
                    <span className='flex'>
                      {movieDetails.genres.map((genre, index) => (
                        <h5 key={index}>{genre}</h5>
                      ))}
                    </span>
                    <h5 className='rating'>Puntuación: {movieDetails.rating}</h5>
                  </span>
                </footer>
              </div>
            </section>
          </>
          : <>
            <ButtonSkeleton withClass>Atrás</ButtonSkeleton>
            <SkeletonCardDetails />
          </>
        }
      </main>
      <style jsx>{CardDetailsStyes}</style>
    </>
  )
}

export default DetailsCard

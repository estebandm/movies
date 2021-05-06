import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { headerStyles } from '../styles'
import ButtonMenu from 'Components/AppLayout/Header/ButtonMenu'
import ChevronDown from 'Components/Core/Icon/ChevronDown'
import { GENRES, MOVIES_FILTER } from 'Constants'

const initialClassMenu = {
  genres: '',
  movieFilter: ''
}

export const Header = () => {
  const router = useRouter()
  const [classMenu, setClassMenu] = useState(initialClassMenu)

  const onMouseOver = ({ name }) => {
    setClassMenu({ [name]: 'display-menu' })
  }
  const onMouseOut = ({ name }) => {
    setClassMenu({ [name]: '' })
  }

  const onClick = ({ typeFilter, value }) => {
    router.push(`/movie/${typeFilter}/${value}`)
  }

  const goHome = () => {
    router.push('/')
  }

  return (
    <>
      <header>
        <nav>
          <ButtonMenu
            textColor='white'
            fontWeight='600'
          >
            <h3
              className='letter-spacing'
              onClick={goHome}
            >
                INICIO
            </h3>
          </ButtonMenu>
          <span>
            <ButtonMenu
              textColor='white'
              fontWeight='600'
              setClassMenu={setClassMenu}
              withClass
              name='genres'
            >
              <h3>Géneros</h3>
              <ChevronDown width={18}/>
            </ButtonMenu>
            <ul
              className={classMenu.genres}
              onMouseOver={() => onMouseOver({ name: 'genres' })}
              onMouseOut={() => onMouseOut({ name: 'genres' })}
            >
              {GENRES.map(genre => (
                <li
                  key={genre.value}
                  onClick={() => onClick({ typeFilter: 'genre', value: genre.value })}
                >
                  {genre.label}
                </li>
              ))}
            </ul>
          </span>
          <span>
            <ButtonMenu
              textColor='white'
              fontWeight='600'
              setClassMenu={setClassMenu}
              withClass
              name='movieFilter'
            >
              <h3>Películas</h3>
              <ChevronDown width={18}/>
            </ButtonMenu>
            <ul
              className={`${classMenu.movieFilter} movie-filter-grid`}
              onMouseOver={() => onMouseOver({ name: 'movieFilter' })}
              onMouseOut={() => onMouseOut({ name: 'movieFilter' })}
            >
              {MOVIES_FILTER.map(movieFilterBy => (
                <li
                  key={movieFilterBy.value}
                  onClick={() => onClick({ typeFilter: 'filter_movie', value: movieFilterBy.value })}
                >
                  {movieFilterBy.label}
                </li>
              ))}
            </ul>
          </span>
        </nav>
        {/* {search && <Search/>} */}
        <h1>
          <a
            href='https://github.com/estebandm'
            target="_blank" rel="noreferrer"
          >
            Esteban Milicich
          </a>
        </h1>
      </header>
      <style jsx>{headerStyles}</style>
    </>
  )
}

export default Header

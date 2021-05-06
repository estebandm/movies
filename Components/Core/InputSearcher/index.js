import React from 'react'

import Magnifying from 'assets/Icons/Magnifying/Magnifying'

import { searcher } from './styles'

const underTheHeading = {
  position: 'absolute',
  top: 0,
  borderBottom: ' 1px solid rgb(230, 230, 230)'
}

const insideTheHeading = {
  position: 'absolute',
  right: '-24px',
  backgroundColor: 'white',
  top: 'calc(50% - 13.5px)',
  borderBottom: ' 1px solid rgb(230, 230, 230)',
  height: '26px',
  borderRadius: '0px 3px 3px 0'
}

export const Searcher = ({
  setMovieToSearch,
  movieToSearch,
  classSearch = ''
}) => {
  const onChange = (e) => {
    setMovieToSearch({
      value: e.target.value,
      error: false,
      textError: ''
    })
  }
  const classInput = classSearch === 'change-search-position' ? 'input' : ''
  const classSpan = classSearch === 'change-search-position' ? 'span' : ''
  const styleSVG = classSearch === 'change-search-position' ? insideTheHeading : underTheHeading

  return (
    <>
      <span className={classSpan}>
        <input
          className={classInput}
          name='searcher'
          value={movieToSearch.value}
          placeholder='Buscar'
          onChange={onChange}
          id='search'
        />
        <label htmlFor='search'>
          <Magnifying style={styleSVG} />
        </label>
      </span>
      <style jsx>{searcher}</style>
    </>
  )
}

export default Searcher

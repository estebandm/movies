import React from 'react'
import Head from 'next/head'

import AppLayout from 'Components/AppLayout'
import Searcher from 'Components/Searcher'

import Card from 'Components/Card'

export const GenrePage = ({ data }) => {
  return (
    <AppLayout>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="https://img.icons8.com/ultraviolet/40/000000/movie-projector.png" />
      </Head>
      <Searcher />
      <Card data={data} />
    </AppLayout>

  )
}

export default GenrePage

export async function getServerSideProps (context) {
  const { query } = context
  const apiResponse = await fetch(`https://yts.mx/api/v2/list_movies.json?genre=${query.genre}&page=${query.page}`)
  if (apiResponse.ok) {
    const props = await apiResponse.json()
    return { props: props }
  }
}

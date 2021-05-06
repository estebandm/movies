import React from 'react'
import Head from 'next/head'

import AppLayout from 'Components/AppLayout'

import DetailsCard from 'Components/Card/Details/Details'

export const DetailsPage = ({ data }) => {
  return (
    <AppLayout>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="https://img.icons8.com/ultraviolet/40/000000/movie-projector.png" />
      </Head>
      <DetailsCard movieDetails={data.movie} />
    </AppLayout>

  )
}

export default DetailsPage

export async function getServerSideProps (context) {
  const { query } = context
  const apiResponse = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${query.id}`)
  if (apiResponse.ok) {
    const props = await apiResponse.json()
    return { props: props }
  }
}

/* DetailsPage.getInitialProps = async (context) => {
  const { query } = context
  const { res } = context
  return await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=10`)
    .then(apiResponse => {
      if (apiResponse.ok) return apiResponse.json()
      if (res) {
        res.writeHead(301, { Location: '/' }).end()
      }
    })
} */

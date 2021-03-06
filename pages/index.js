import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import AppLayout from 'Components/AppLayout'
import Searcher from 'Components/Searcher'
import Card from 'Components/Card'

export default function Home ({ data }) {
  return (
    <AppLayout>
      <Head>
        <title>Movies</title>
        <link rel="icon" href="https://img.icons8.com/ultraviolet/40/000000/movie-projector.png" />
      </Head>
      <Searcher/>
      <Card data={data}/>
    </AppLayout>
  )
}

export async function getServerSideProps () {
  const apiResponse = await fetch('https://yts.mx/api/v2/list_movies.json?sort_by=year')
  if (apiResponse.ok) {
    const props = await apiResponse.json()
    return { props: props }
  }
}

/*
Home.getInitialProps = async () => {
  return await fetch('https://yts.mx/api/v2/list_movies.json?')
    .then(res => res.json())
} */

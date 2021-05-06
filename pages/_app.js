/*  background-image:
            radial-gradient(${primary} 1px, transparent 1px),
            radial-gradient(${primary} 1px, transparent 1px);
          background-position: 0 0, 25px 25px;
          background-size: 50px 50px; */

const positionTopButton = '5%'
const positionLeftButton = '5%'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
      :root{
        --blue: #0c7afe;
        --lightBlue: #00b1ea;
        --border: rgb(230, 230, 230);
        --colorSkeleton: rgb(214, 214, 214);
      }
        
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;            
        }        
        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
        .position-button{
          position: absolute;
          top: ${positionTopButton};
          left: ${positionLeftButton};
        }
      `}</style>
    </>
  )
}

export default MyApp

/*
key OMDB API: b748d216
OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=b748d216
*/

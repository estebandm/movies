import React from 'react'

import { heightHeader } from 'Constants'

export const PageNotFound = () => {
  return (
    <>
      <main>
        <h1>Error 404</h1>
        <h2>Page Not Found</h2>
      </main>
      <style jsx>{`
          main{
              width: 100%;
              height: calc(100vh - ${heightHeader});
              background-color: var(--colorSkeleton);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
          }
                
          `}
      </style>
    </>
  )
}

export default PageNotFound

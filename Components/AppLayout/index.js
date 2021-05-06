import React from 'react'

import Header from './Header/Header'
import { container } from './styles'

export const AppLayout = ({ children }) => {
  return (
    <>
      <main >
        <Header/>
        {children}
      </main>
      <style jsx>{container}</style>
    </>
  )
}

export default AppLayout

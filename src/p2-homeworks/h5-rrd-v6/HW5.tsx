import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Header } from './Header'
import { Pages } from './Pages'

export const HW5 = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Pages />
      </HashRouter>
    </div>
  )
}

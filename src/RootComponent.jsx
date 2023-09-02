import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Home, NotFound } from './pages'
import { ROUTES } from './resources/Routes'
// import './styles/main.sass'

const RootComponent = () => {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path={ROUTES.HOMEPAGE_ROUTE} element={<Home />} />
      </Routes>
    </Router>
  )
}

export default RootComponent
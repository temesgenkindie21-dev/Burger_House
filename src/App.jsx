import React from 'react'
import Header from './Components/Header/Header'
import Home from './Components/HomePage/Home'
import CatagoriPromotion from './Components/HomePage/CatagoriPromotion'
import AboutUs from './Components/HomePage/AboutUs'
import Menu from './Components/HomePage/Menu'
import Review from './Components/HomePage/Review'

function App() {
  return (
    <>
      <Header />
      <Home />
      <CatagoriPromotion />
      <AboutUs />
      <Menu />
      <Review />
    </>
  )
}

export default App
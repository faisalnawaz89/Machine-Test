import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroBanner from './components/HeroBanner/HeroBanner'
import About from './components/About/About'
import DoctorBlock from './components/DoctorBlock/DoctorBlock'
import Products from './components/Products/Products'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <About/>
      <DoctorBlock/>
      <Products/>
      <Footer/>
    </>
  )
}

export default App
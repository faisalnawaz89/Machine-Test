import React from 'react'
import Header from './components/Header/Header'
import HeroBanner from './components/HeroBanner/HeroBanner'
import Products from './components/Products/Products'
import WhyChoose from './components/WhyChoose/WhyChoose'
import Testimonial from './components/Testimonial/Testimonial'
import LatestNews from './components/LatestNews/LatestNews'
import About from './components/About/About'
import GetInTouch from './components/GetInTouch/GetInTouch'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Header/>
      <HeroBanner/>
      <Products/>
      <WhyChoose/>
      <About/>
      <LatestNews/>
      <Testimonial/>
      <GetInTouch/>
      <Footer/>
    </>
  )
}

export default App
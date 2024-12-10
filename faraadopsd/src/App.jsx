import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import AboutUs from './Components/AboutUs/AboutUs'
import HowToPlay from './Components/HowToPlay/HowToPlay'
import EarnMoney from './Components/EarnMoney/EarnMoney'
import Footer from './Components/Footer/Footer'
import HeroSlider from './Components/HeroSlider/HeroSlider'

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSlider/>
    <AboutUs/>
    <HowToPlay/>
    <EarnMoney/>
    <Footer/>
    </>
  )
}

export default App
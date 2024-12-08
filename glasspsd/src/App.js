import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import HeroSlider from './Components/HeroSlider/HeroSlider'
import About from './Components/About/About'
import OurGlasses from './Components/OurGlasses/OurGlasses'
import BestQuality from './Components/BestQuality/BestQuality'
import SpecialOffer from './Components/SpecialOffer/SpecialOffer'
import ParallaxBg from './Components/ParallaxBg/ParallaxBg'
import RequestCall from './Components/RequestCall/RequestCall'
import Footer from './Components/Footer/Footer'
import OurCustomer from './Components/OurCustomer/OurCustomer'

const App = () => {
  return (
    <div className='wrapper'>
      <NavBar/>
      <HeroSlider/>
      <About/>
      <OurGlasses/>
      <BestQuality/>
      <ParallaxBg/>
      <SpecialOffer/>
      <OurCustomer/>
      <RequestCall/>
      <Footer/>
    </div>
  )
}

export default App
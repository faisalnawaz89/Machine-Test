import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSlider from './Components/HeroSlider/HeroSlider'
import OurServices from './Components/OurServices/OurServices'
import AboutUs from './Components/AboutUs/AboutUs'
import OurConsept from './Components/OurConsept/OurConsept'
import WhoWeAre from './Components/WhoWeAre/WhoWeAre'
import OurProjects from './Components/OurProjects/OurProjects'
import ClientsSays from './Components/ClientsSays/ClientsSays'
import ContactUs from './Components/ContactUs/ContactUs'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
    <div className='wrapper'>
      <Navbar/>
      <HeroSlider/>
      <OurServices/>
      <AboutUs/>
      <OurConsept/>
      <WhoWeAre/>
      <OurProjects/>
      <ClientsSays/>
      <ContactUs/>
      <Footer/>
    </div>
    </>
  )
}

export default App
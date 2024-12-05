import React from 'react'
import Header from './components/Header/Header'
import HomeSlider from './components/HomeSlider/HomeSlider'
import About from './components/About/About'
import Service from './components/Service/Service'
import Transport from './components/Transpport/Transport'
import Events from './components/Events/Events'
import RequestCall from './components/RequestCall/RequestCall'
import Footer from './components/Footer/Footer'
import Testimonials from './components/Testimonials/Testimonials'

const App = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <HomeSlider/>
        <About/>
        <Service/>
        <Transport/>
        <Events/>
        <Testimonials/>
        <RequestCall/>
        <Footer/>
    </div>
  )
}

export default App
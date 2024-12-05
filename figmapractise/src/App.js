import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import HeroBanner from './components/HeroBanner/HeroBanner'
import Service from './components/Services/Service'
import Accordion from './components/Accordion/Accordion'
import Journey from './components/Journey/Journey'
import Achivement from './components/Acivement/Achivement'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='wrapper page-wrapper'>
        <Navbar/>
        <HeroBanner/>
        <Service/>
        <Accordion/>
        <Journey/>
        <Achivement/>
        <Footer/>
    </div>
  )
}

export default App
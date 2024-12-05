import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import DonationBox from './Components/DonationBox/DonationBox'
import About from './Components/About/About'
import Mission from './Components/Mission/Mission'
import Featured from './Components/Featured/Featured'
import Events from './Components/Events/Events'
import PeopleSays from './Components/PeopleSays/PeopleSays'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <DonationBox/>
      <About/>
      <Mission/>
      <Featured/>
      <Events/>
      <PeopleSays/>
      <Footer/>
    </>
  )
}

export default App
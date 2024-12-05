import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import LiveChannel from './Components/LiveChannel/LiveChannel'
import ShowPlan from './Components/ShowPlan/ShowPlan'
import OurService from './Components/OurService/OurService'
import ClientSays from './Components/ClientSays/ClientSays'
import SubscribeLabel from './Components/SubscribeLabel/SubscribeLabel'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <>
      <HeroBanner/>
      <Navbar/>
      <LiveChannel/>
      <ShowPlan/>
      <OurService/>
      <ClientSays/>
      <SubscribeLabel/>
      <Footer/>
    </>
  )
}

export default App
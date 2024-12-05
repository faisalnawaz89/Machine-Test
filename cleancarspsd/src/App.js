import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Service from './components/Service/Service'
import Quality from './components/Quality/Quality'
import WhyChoseUs from './components/WhyChoseUs/WhyChoseUs'
import Testimonial from './components/Testimonial/Testimonial'
import Footer from './components/Footer/Footer'
//main components
const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Service/>
      <Quality/>
      <WhyChoseUs/>
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default App

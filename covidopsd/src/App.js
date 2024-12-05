import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import DisplayCard from './components/DisplayCard/DisplayCard'
import CovidPoster from './components/CovidPoster/CovidPoster'
import CoronaPrevent from './components/CoronaPrevent/CoronaPrevent'
import CovidCase from './components/CovidCase/CovidCase'
import Testimonials from './components/Testimonials/Testimonials'
import Newsletter from './components/Newslatter/Newsletter'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <Banner/>
      <DisplayCard/>
      <CovidPoster/>
      <CoronaPrevent/>
      <CovidCase/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default App
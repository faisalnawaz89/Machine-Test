import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroBanner from './Components/HeroBanner/HeroBanner'
import MenWomen from './Components/MenWomen/MenWomen'
import Electronic from './Components/Electronic/Electronic'
import Accessories from './Components/Accessories/Accessories'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <MenWomen/>
      <Electronic/>
      <Accessories/>
      <Footer/>
    </>
  )
}

export default App
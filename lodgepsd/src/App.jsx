import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import HomePage from './Pages/HomePage'

const App = () => {
  return (
    <div className='wrapper'>
      <Navbar/>
        <HomePage/>
      <Footer/>
    </div>
  )
}

export default App
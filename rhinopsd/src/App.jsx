import React from 'react'
import Header from './Components/Header/Header'
import Homepage from './Pages/Homepage'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div className='wrapper'>
      <Header/>
      <Homepage/>
      <Footer/>
    </div>
  )
}

export default App
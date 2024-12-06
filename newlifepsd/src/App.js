import React from 'react'
import Navbar from './components/Navbar/Navbar'
import HeroBanner from './components/HeroBanner/HeroBanner'
import About from './components/About/About'
import PatientCare from './components/PatientCare/PatientCare'
import Laboratory from './components/Laboratory/Laboratory'
import PatientsSays from './components/PatientsSays/PatientsSays'
import Appointment from './components/Appointment/Appointment'
import Footer from './components/Footer/Footer'
// All Components
const App = () => {
  return (
    <>
      <Navbar/>
      <HeroBanner/>
      <About/>
      <PatientCare/>
      <Laboratory/>
      <PatientsSays/>
      <Appointment/>
      <Footer/>
    </>
  )
}

export default App
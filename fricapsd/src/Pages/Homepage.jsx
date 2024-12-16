import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import HeroSlider from '../Components/Home/HeroSlider/HeroSlider'
import ProductCategory from '../Components/Home/ProductCategory/ProductCategory'
import LaptopComputer from '../Components/Home/LaptopComputer/LaptopComputer'
import MensCloth from '../Components/Home/MensCloth/MensCloth'
import WomenCloth from '../Components/Home/WomenCloth/WomenCloth'

const Homepage = () => {
  return (
    <>
        <Navbar/>
            <HeroSlider/>
            <ProductCategory/>
            <LaptopComputer/>
            <MensCloth/>
            <WomenCloth/>
        <Footer/>
    </>
  )
}

export default Homepage
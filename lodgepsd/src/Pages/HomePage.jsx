import React from 'react'
import HeroBanner from '../Components/Home/HeroBanner/HeroBanner'
import AboutUs from '../Components/Home/AboutUs/AboutUs'
import ProductCategory from '../Components/Home/ProductCategory/ProductCategory'
import Jewllery from '../Components/Home/Jewllery/Jewllery'
import SpecialBlock from '../Components/Home/SpecialBlock/SpecialBlock'
import Testimonial from '../Components/Home/Testimonial/Testimonial'
import ContactUs from '../Components/Home/ContactUs/ContactUs'

const HomePage = () => {
  return (
    <>
        <HeroBanner/>
        <ProductCategory/>
        <AboutUs/>
        <Jewllery/>
        <SpecialBlock/>
        <Testimonial/>
        <ContactUs/>
    </>
  )
}

export default HomePage
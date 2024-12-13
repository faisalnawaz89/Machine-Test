import React from 'react'
import HomeSlider from '../Components/Home/HomeSlider/HomeSlider'
import HomeCard from '../Components/Home/HomeCard/HomeCard'
import AboutUs from '../Components/Home/AboutUs/AboutUs'
import WhyChoose from '../Components/Home/WhyChoose/WhyChoose'
import FeatureProject from '../Components/Home/FeatureProject/FeatureProject'
import ExpertStaff from '../Components/Home/ExpertStaff/ExpertStaff'
import ContactUs from '../Components/Home/ContactUs/ContactUs'
import Testimonial from '../Components/Home/Testimonial/Testimonial'

const Homepage = () => {
  return (
    <>
        <HomeSlider/>
        <HomeCard/>
        <AboutUs/>
        <FeatureProject/>
        <WhyChoose/>
        <ExpertStaff/>
        <ContactUs/>
        <Testimonial/>
    </>
  )
}

export default Homepage
import React from 'react'
import HeroSlider from '../Components/Home/HeroSlider/HeroSlider'
import Welcome from '../Components/Home/Welcome/Welcome'
import OurStory from '../Components/Home/OurStory/OurStory'
import OurFounder from '../Components/Home/OurFounder/OurFounder'
import InfoLabel from '../Components/Home/InfoLabel/InfoLabel'
import OurCauses from '../Components/Home/OurCauses/OurCauses'
import Volunteer from '../Components/Home/Volunteer/Volunteer'
import LatestNews from '../Components/Home/LatestNews/LatestNews'
import HappyCustomer from '../Components/Home/HappyCustomer/HappyCustomer'
import GetInTouch from '../Components/Home/GetInTouch/GetInTouch'



const Homepage = () => {
  return (
    <>
        <HeroSlider/>
        <Welcome/>
        <OurStory/>
        <OurFounder/>
        <InfoLabel/>
        <OurCauses/>
        <Volunteer/>
        <LatestNews/>
        <HappyCustomer/>
        <GetInTouch/>
    </>
  )
}

export default Homepage
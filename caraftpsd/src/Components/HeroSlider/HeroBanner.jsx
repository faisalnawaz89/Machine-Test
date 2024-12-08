import React from 'react'
import './HeroSlider.css'
import MainSlider from './MainSlider'

const HeroBanner = () => {
  return (
    <div className='herobanner hero--banner'>
        <div className="bg">
            <MainSlider/>
        </div>
    </div>
  )
}

export default HeroBanner
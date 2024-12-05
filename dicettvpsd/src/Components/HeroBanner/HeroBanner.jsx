import React from 'react'
import './HeroBanner.css'
import Slider from '../HeroBanner/Slider'

const HeroBanner = () => {
  return (
    <div className='herobanner hero-banner'>
        <div className="bg">
            <Slider/>
            <div className="overlay"></div>
        </div>
    </div>
  )
}

export default HeroBanner
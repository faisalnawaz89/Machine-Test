import React from 'react'
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    <div className='herobanner hero-banner'>
        <div className="bg">
            <div className="banner--title">
                <h1>Get Best Dry Food</h1>
                <div className="cta--btn">
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    </div>
  )
}

export default HeroBanner
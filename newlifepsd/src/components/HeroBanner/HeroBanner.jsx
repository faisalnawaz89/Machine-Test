import React from 'react'
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    <div className='herobanner hero-banner hero--banner-bg'>
        <div className="hero--banner--curve--layer"></div>
        <div className="hero--slider--title">
            <div className="hero--banner--curve--title">
                <h1>Providing appropritate health care for seniors and  childrens  </h1>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum</p>
                <div className="cta--btn flex cta-slider-btn">
                    <a className="light--btn" href="#">About Us</a>
                    <a className="dark--btn" href="#">Get Appointment</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
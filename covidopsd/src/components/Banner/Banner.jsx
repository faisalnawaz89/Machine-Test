import React from 'react'
import './Banner.css'
import banner from '../Assets/slider-banner.jpg'

const Banner = () => {
  return (
    <div className='banner banner-block'>
        <div className="slider--banner">
            <img src={banner} alt="" />
            <div className="banner--title">
                <h1 className='big--title'>Care early <br /> Coronavirus </h1>
                <div className="flex btn--block cta--btn">
                    <a className="btn--red"href="#">Read More</a>
                    <a className="btn--white" href="#">About Us</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
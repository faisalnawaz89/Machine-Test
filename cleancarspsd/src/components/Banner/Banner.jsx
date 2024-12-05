import React from 'react'
import './Banner.css'
import banner_img from '../Assets/car-banner.jpg'

const Banner = () => {
  return (
    <div className='banner banner-block'>
        <div className="container">
            <div className="grid banner--grid">
                <div className="banner--title--block">
                    <h1>Keep your  Clean Cars  Always</h1>
                    <p>There are many variations of passages of Lorem Ipsum available</p>
                    <div className="cta--btn">
                        <div className="flex flex-gap1">
                            <button className='btn--primary'>Get A Qoute</button>
                            <button className='btn--secondary'>Contact Us</button>
                        </div>
                    </div>
                </div>
                <div className="banner--img--block">
                    <img src={banner_img} alt="car-image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
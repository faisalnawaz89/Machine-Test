import React from 'react'
import './ParallaxBg.css'
import parallax_bg from '../Assets/parallax-img-1.jpg'

const ParallaxBg = () => {
  return (
    <div className='parallaxbg parallax--bg'>
        <div className="grid parallax--bg--block">
            <div className="parallax--bg--inner">
                <img src={parallax_bg} alt="" />
                <span>$50</span>
            </div>
            <div className="parallax--title">
                <h4>Book  our  special  offer</h4>
                <div className="cta--btn">
                    <a href="#">See More offer</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ParallaxBg
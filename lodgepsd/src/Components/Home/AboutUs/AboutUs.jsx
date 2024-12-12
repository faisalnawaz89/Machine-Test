import React from 'react'
import './AboutUs.css'
import about_img from '../../Assets/about-img.jpg'

const AboutUs = () => {
  return (
    <div className='aboutus about--us'>
        <div className="container">
          <div className="grid space--between about--us--inner">
              <div className="pagetitle page--title">
                <h2>About Jewellery Shop</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</p>
                <div className="cta--btn">
                  <a href="#">Read More</a>
                </div>
              </div>
              <div className="about--us--image">
                  <img src={about_img} alt="" />
                  <div className='round--sphere'></div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default AboutUs
import React from 'react'
import './AboutUs.css'
import about_bg_1 from '../Assets/about-img-1.jpg'

const AboutUs = () => {
  return (
    <div className='about about--us'>
        <div className="container">
            <div className="grid space--between about--block">
                <div className="about--inner--bg">
                    <img src={about_bg_1} alt="" />
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="about--title">
                    <div className="pagetitle page--title">
                      <h2>About Us</h2>
                      <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believableThere are many variations of passages of Lorem Ipsum available, but the majority have able</p>
                    </div>
                    <div className="cta--btn">
                      <a className="primary--btn" href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
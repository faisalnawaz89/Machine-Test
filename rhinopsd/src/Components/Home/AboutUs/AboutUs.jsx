import React from 'react'
import './AboutUs.css'
import about_img from '../../Assets/about-img.jpg'

const AboutUs = () => {
  return (
    <div className='aboutus about--us'>
        <div className="container">
            <div className="grid space--between about--us--block">
                <div className="about--us--title">
                    <div className="pagetitle page--title">
                        <h2>About Our Company</h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                        <div className="cta--btn">
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="about--us--image">
                    <img src={about_img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
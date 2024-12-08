import React from 'react'
import './About.css'
import about_img from '../Assets/glass-img.jpg'

const About = () => {
  return (
    <div className='about about--block'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2><span>a</span><span>bout</span> our shop</h2>
            </div>
            <div className="grid space--between aboutus--inner">
                <div className="about--title">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    <div className="cta--btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
                <div className="about--img">
                    <img src={about_img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
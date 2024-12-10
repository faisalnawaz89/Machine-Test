import React from 'react'
import './AboutUs.css'
import about_img from '../Assest/about-bg.jpg'
import about_car from '../Assest/about-img-1.png'

const AboutUs = () => {
  return (
    <div className="about about--block">
        <div className="bg">
            <div className="container">
                <div className="about--container">
                    <div className="about--img">
                        <img src={about_car} alt="" />
                        <div className="about--title">
                            <h2>About Game <p>t is a long established fact that a reader will be distracted by the readable content of a page when looking </p></h2>
                            <div className="cta--btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    </div>
  )
}

export default AboutUs
import React from 'react'
import './About.css'
import about_img from '../Assets/about-img.jpg'

const About = () => {
  return (
    <div className='about about-block'>
        <div className="container">
            <div className="grid about--box">
                <div className="about--content">
                    <div className="pagetitle page--heading">
                        <h2>about Chrity</h2>
                        <p>many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If youmany variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you</p>
                        <div className="cta--btn">
                            <a className="border--btn" href="#">Read More</a>
                        </div>
                    </div>
                </div>
                <div className="about--image">
                    <img src={about_img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
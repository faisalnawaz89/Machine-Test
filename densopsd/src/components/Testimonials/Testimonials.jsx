import React from 'react'
import './Testimonials.css'
import testimonials_img from '../Assets/testimonials-image.jpg'

const Testimonials = () => {
  return (
    <div className='testimonial testimonials-block bg'>
        <div className="container">
            <div className="white--title pagetitle main--tilte">
                <h2>Testimonial</h2>
                <div className="divider"></div>
            </div>
            <div className="grid grid-center testimonial--box">
                <div className="testimonial--box--inner">
                    <div className="flex flex-center">
                        <img src={testimonials_img} alt="" />
                        <h5>Consectetur</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                </div>
                <div className="testimonial--box--inner">
                    <div className="flex flex-center">
                        <img src={testimonials_img} alt="" />
                        <h5>Consectetur</h5>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
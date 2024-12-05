import React from 'react'
import './Testimonial.css'
import customer from '../Assets/customer.jpg'

const Testimonial = () => {
  return (
    <div className='quality quality-block'>
        <div className="container">
            <div className="pagetitle page--main--title">
                <h2>Testimonial</h2>
                <div className="divider"></div>
            </div>

            <div className="testimonial testimonial--block">
                <div className="flex flex-center flex-gap2 testimonial--box">
                    <img src={customer} alt="" />
                    <div className="flex flex-column">
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that</p>
                        <h6>Joech</h6>
                        <span>Customer</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
import React from 'react'
import './Testimonial.css'
import customer1 from '../Assets/testimonial-img-1.jpg'
import customer2 from '../Assets/testimonial-img-2.jpg'
import qoute_icon from '../Assets/qoute.png'

const Testimonial = () => {
  return (
    <div className='testimonials testimonials-block'>
        <div className="pagetitle page--title">
            <h2>Testimonial</h2>
            <div className="divider"></div>
        </div>
        <div className="grid testimonial--box--grid">
            <div className="testimonial--box">
                <div className="flex testimonial--inner">
                    <img src={customer1} alt="" />
                    <div className="flex customer--name">
                        <h5>Jenilio desos</h5>
                        <h6>Customer</h6>
                    </div>
                    <img className="qoute--icon" src={qoute_icon} alt="" />
                </div>
                <p>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
            </div>
            <div className="testimonial--box">
                <div className="flex testimonial--inner">
                    <img src={customer1} alt="" />
                    <div className="flex customer--name">
                        <h5>Jenilio desos</h5>
                        <h6>Customer</h6>
                    </div>
                    <img className="qoute--icon" src={qoute_icon} alt="" />
                </div>
                <p>commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcommodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
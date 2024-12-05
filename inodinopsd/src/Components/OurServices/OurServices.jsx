import React from 'react'
import './OurServices.css'
import our_service_icon_1 from '../Assets/our_service_icon_1.png'
import our_service_icon_2 from '../Assets/our_service_icon_2.png'
import our_service_icon_3 from '../Assets/our_service_icon_3.png'
import our_service_icon_4 from '../Assets/our_service_icon_4.png'

const OurServices = () => {
  return (
    <div className='services our--services'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>our services</h2>
                <p>There are many variations of passages of Lorem Ipsum </p>
            </div>

            <div className="our--services--conatiner">
                <div className="grid space--between our--service--block">
                    <div className="our--service--inner">
                        <img src={our_service_icon_1} alt="" />
                        <h3>furnitures</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the </p>
                        <div className="cta--btn">
                          <a className="primary--btn" href="#">Read More</a>
                        </div>
                    </div>
                    <div className="our--service--inner">
                        <img src={our_service_icon_2} alt="" />
                        <h3>office</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the </p>
                        <div className="cta--btn">
                          <a className="primary--btn" href="#">Read More</a>
                        </div>
                    </div>
                    <div className="our--service--inner">
                        <img src={our_service_icon_3} alt="" />
                        <h3>home</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the </p>
                        <div className="cta--btn">
                          <a className="primary--btn" href="#">Read More</a>
                        </div>
                    </div>
                    <div className="our--service--inner">
                        <img src={our_service_icon_4} alt="" />
                        <h3>bed room</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the </p>
                        <div className="cta--btn">
                          <a className="primary--btn" href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices
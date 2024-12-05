import React from 'react'
import './Service.css'
import service1 from '../Assets/service1.jpg'
import service2 from '../Assets/service2.jpg'
import service3 from '../Assets/service3.jpg'

const Service = () => {
  return (
    <div className='services service-block'>
        <div className="container">
            <div className="pagetitle page--main--title">
                <h2>Our <span>Service</span></h2>
                <div className="divider"></div>
            </div>
            <div className="grid service--grid grid-center">
                <div className="service--box">
                    <img src={service1} alt="service 1" />
                    <h3>Express Exterior </h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                    <div className="cta--btn">
                        <a className="btn--secondary" href="#">see more</a>
                    </div>
                </div>
                <div className="service--box">
                    <img src={service2} alt="service 1" />
                    <h3>Auto Detailing </h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                    <div className="cta--btn">
                        <a className="btn--secondary" href="#">see more</a>
                    </div>
                </div>
                <div className="service--box">
                    <img src={service3} alt="service 1" />
                    <h3>Full Service Car Wash </h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed </p>
                    <div className="cta--btn">
                        <a className="btn--secondary" href="#">see more</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
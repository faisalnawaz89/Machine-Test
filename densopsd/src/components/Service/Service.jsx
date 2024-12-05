import React from 'react'
import './Service.css'
import service_icon1 from '../Assets/air-freight.png'
import service_icon2 from '../Assets/cargo-ship.png'
import service_icon3 from '../Assets/delivery-truck.png'
import service_icon4 from '../Assets/package.png'
import service_icon5 from '../Assets/shield.png'

const Service = () => {
  return (
    <div className='service service-block'>
        <div className="container">
            <div className="pagetitle main--tilte">
                <h2>Services</h2>
                <div className="divider"></div>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
        </div>
        <div className="container">
            <div className="service--icons">
                <div className="flex flex-space-between">
                    <div className="icons-boxes">
                        <div className="icon--box">
                            <img src={service_icon1} alt="" />
                        </div>
                        <h3>FLY ANYWHERE </h3>
                    </div>
                    <div className="icons-boxes">
                        <div className="icon--box">
                            <img src={service_icon2} alt="" />
                        </div>
                        <h3>Cargo service</h3>
                    </div>
                    <div className="icons-boxes">
                        <div className="icon--box">
                            <img src={service_icon3} alt="" />
                        </div>
                        <h3> COURIER SERVICES  </h3>
                    </div>
                    <div className="icons-boxes">
                        <div className="icon--box">
                            <img src={service_icon4} alt="" />
                        </div>
                        <h3>BOX STORAGE</h3>
                    </div>
                    <div className="icons-boxes">
                        <div className="icon--box">
                            <img src={service_icon5} alt="" />
                        </div>
                        <h3>100% safe </h3>
                    </div>
                </div>
                <div className="cta--btn">
                    <a className="primary--btn" href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Service
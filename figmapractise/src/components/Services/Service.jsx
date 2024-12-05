import React from 'react'
import './Service.css'
import service_icon from '../../assets/service-icon.png'

const Service = () => {
  return (
    <div className='service service-block'>
        <div className="service--bar">
            <div className="service-title-bar flex">
                <h3>Service We offer</h3>
                <div className="service--icon">
                    <img src={service_icon} alt="" />
                </div>
            </div>
        </div>
        <div className='blank--div'></div>
    </div>
  )
}

export default Service
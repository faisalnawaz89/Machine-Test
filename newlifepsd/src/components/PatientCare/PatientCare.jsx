import React from 'react'
import './PatientCare.css'
import patient_img from '../Assets/patient_img.jpg'

const PatientCare = () => {
  return (
    <div className='patientcare patientcare-block'>
        <div className="patient--care--bg">
            <div className="grid patient--care--grid">
                <div className="patient--care--img">
                    <img src={patient_img} alt="" />
                </div>
                <div className="white--title patient--care--title">
                    <div className="page--main--title">
                        <h4>Finest Patient</h4>
                        <h3>Care & Amenities</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                        <div className="cta--btn">
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientCare
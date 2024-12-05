import React from 'react'
import './PatientsSays.css'
import customer from '../Assets/customer.png'

const PatientsSays = () => {
  return (
    <div className='patientssays patients-says'>
        <div className="grid patients--says--grid">
            <div className="contact--form">
                <h3>Contact Us</h3>
                <div className="contact--from--field">
                    <input type="text" placeholder='Name' />
                    <input type="email" placeholder='Email' />
                    <input type="tel" placeholder='Phone' />
                    <textarea rows="9" placeholder='Message'></textarea>
                    <button>Send</button>
                </div>
            </div>
            <div className="testimonials--box">
                <h3>What syas our peasant</h3>
                <div className="testimonials--slider">
                    <div className="flex testimonials--header">
                        <img src={customer} alt="" />
                        <h5>Selfideno</h5>
                    </div>
                    <div className="testimonials-content">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PatientsSays
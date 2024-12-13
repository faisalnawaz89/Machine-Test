import React from 'react'
import './ContactUs.css'
const ContactUs = () => {
  return (
    <div className='contactus conatct--us'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>Contact Us</h2>
            </div>
            <div className="grid contact--block">
                <div className="form--container">
                    <input type="text" placeholder='Name'/>
                    <input type="tel" placeholder='Phone' />
                    <input type="email" placeholder='Email' />
                    <textarea rows={9} placeholder='Message'></textarea>
                    <button>Send</button>
                </div>
                <div className="gmap--container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d117911.79320584783!2d88.2947664!3d22.551277900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734096896610!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactUs
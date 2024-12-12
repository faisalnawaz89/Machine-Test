import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='contactus contact-us'>
      <div className="container">
          <div className="pagetitle page--title">
              <h2>Contact Us</h2>
          </div>
          <div className="grid space--between contact--us--block">
              <div className="form--container">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="tel" placeholder='Phone' />
                <textarea type="textarea" placeholder='Message' rows="9"></textarea>
                <button>Send</button>
              </div>
              <div className="contact--frame">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d58955.8966029239!2d88.29466691334733!3d22.551277900000027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734018637576!5m2!1sen!2sin"
                width="100%"
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              </div>
          </div>
          <div className='round--sphere'></div>
      </div>
    </div>
  )
}

export default ContactUs
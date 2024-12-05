import React from 'react'
import './ContactUs.css'

const ContactUs = () => {
  return (
    <div className='contactus contact--us'>
        <div className="bg">
          <div className="container contact--us--block">
              <div className="pagetitle page--title">
                <h2>Contact Us</h2>
                <div className="form--conatiner">
                    <div className="grid space--between form--block">
                        <div className="form--field">
                            <input type="text" placeholder='Name' />
                            <input type="email" placeholder='Email' />
                            <input type="tel" placeholder='Phone' />
                            <textarea type="textarea" placeholder='Message' rows="9"></textarea>
                            <div className="cta--btn">
                              <button type="border-btn">Send</button>
                            </div>
                        </div>
                        <div className="contact--map">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788754.7609475483!2d77.26301839887344!3d21.974658582152525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1733389891201!5m2!1sen!2sin"
                            width="100%"
                            height={350}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                    </div>
                </div>
              </div>
          </div>
          <div className="overlay"></div>
        </div>
    </div>
  )
}

export default ContactUs
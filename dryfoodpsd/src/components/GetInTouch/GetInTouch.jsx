import React from 'react'
import './GetInTouch.css'

const GetInTouch = () => {
  return (
    <div className='getintouch get-in-touch'>
        <div className="pagetitle page--title">
            <h2>Get In Touch</h2>
            <div className="divider"></div>
        </div>
        <div className="form--feild">
            <input type="text" placeholder='Name' />
            <input type="tel" placeholder='Phone' />
            <input type="email" placeholder='Email' />
            <textarea placeholder='Message' rows="9"></textarea>
            <div className="cta--btn">
                <button className='primary--btn'>Send</button>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch
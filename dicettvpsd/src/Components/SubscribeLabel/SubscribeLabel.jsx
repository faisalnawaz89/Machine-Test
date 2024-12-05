import React from 'react'
import './SubscribeLabel.css'

const SubscribeLabel = () => {
  return (
    <div className='subscription subscription-label'>
        <div className="container">
            <div className="grid space--between subscription--content">
                <h3>Subscribe Now</h3>
                <div className="subscription--filed">
                  <div className="flex space--left subscription--input">
                      <input type="email" placeholder='Enter your name' />
                      <button>Subscribe</button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default SubscribeLabel
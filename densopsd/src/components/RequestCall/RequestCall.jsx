import React from 'react'
import './RequestCall.css'

const RequestCall = () => {
  return (
    <div className='event event-block'>
        <div className="container">
            <div className="pagetitle main--tilte">
                <h2>Request a call back</h2>
                <div className="divider"></div>
            </div>
            <div className="requestcall request--call">
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <input type="text" placeholder='Phone' />
                <textarea name="" rows="8" placeholder='Message'></textarea>
                <button>Send</button>
            </div>
        </div>
    </div>
  )
}

export default RequestCall
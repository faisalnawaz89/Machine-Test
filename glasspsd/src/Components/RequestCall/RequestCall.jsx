import React from 'react'
import './RequestCall.css'

const RequestCall = () => {
  return (
    <div className='requestcall request--call'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>Request A call back</h2>
                <div className="form--container">
                    <input type="text" placeholder='Name' />
                    <input type="tel" placeholder='Phone Number' />
                    <input type="email" placeholder="Email" />
                    <textarea type="textarea" placeholder='Message' rows="8"></textarea>
                    <button>Send</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RequestCall
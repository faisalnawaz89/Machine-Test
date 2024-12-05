import React from 'react'
import './OurService.css'

const OurService = () => {
  return (
    <div className='ourservice our-service'>
        <div className="container-fluid">
            <div className="our--service--map">
                <div className="pagetitle page--title">
                    <h2>Check ability to connect our services in your area</h2>
                </div>
                <div className="bg--map">
                    <div className="newslatter--bg">
                        <div className="container">
                            <div className="newslatter--input">
                                <p>It is a long established fact that a reader will be distracted</p>
                                <div className="newslatter--input--inner">
                                    <input type="text" placeholder='Enter your address'/>
                                    <button>Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurService
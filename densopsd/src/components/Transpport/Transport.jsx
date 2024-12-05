import React from 'react'
import './Transport.css'

const Transport = () => {
  return (
    <div className='transport transport-block'>
        <div className="grid transport--grid">
            <div className="transport-content">
                <h3>About transport</h3>
                <div className="divider"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                <div className="cta--btn">
                    <a className="btn--primary" href="#">Read More</a>
                </div>
            </div>
            <div className="transport--bg"></div>
        </div>
    </div>
  )
}

export default Transport
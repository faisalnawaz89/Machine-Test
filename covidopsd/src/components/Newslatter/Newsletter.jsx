import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className='newsletter newsletter-block'>
        <div className="corona--prevent--heading">
            <h3>Get Every Update....</h3>
        </div>
        <div className="newsletter--bg">
            <form className='form--container'>
                <input type="email" placeholder='Your Email' />
                <div className="cta--btn">
                    <a className="btn--theme" href="#">Subscribe Now</a>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Newsletter
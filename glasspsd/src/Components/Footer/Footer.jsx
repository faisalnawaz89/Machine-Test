import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer main--footer'>
        <div className="container">
            <div className="grid main--footer--block">
                <div className="footer--title">
                    <h3>Subscribe Now</h3>
                    <div className="newslatter">
                        <input type="email" placeholder='Enter your email' />
                        <button>Subcribe</button>
                    </div>
                </div>
                <div className="footer--title">
                    <h3>Links</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                </div>
                <div className="footer--title">
                    <h3>Contact Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                </div>
            </div>
        </div>
        <div className="footer--copyright">
            <p>© 2025 Created by Faisal Nawaz</p>
        </div>
    </footer>
  )
}

export default Footer
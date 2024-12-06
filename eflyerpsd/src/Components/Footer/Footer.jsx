import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import PreMenu from '../Navbar/PreMenu'

const Footer = () => {
  return (
    <footer className='footer main--footer'>
        <div className="container">
            <div className="footer--logo">
                <img src={logo} alt="" />
            </div>
            <div className="newslatter--form">
                <input type="email" placeholder='Your Email' />
                <button>Subscribe</button>
            </div>
            <div className="footer--menu">
                <PreMenu/>
            </div>
            <div className="help--line">
                <h4>Help Line  Number : +1 1800 1200 1200</h4>
            </div>
            <div className="copyright">
                <p>© 2025 Created by Faisal Nawaz</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
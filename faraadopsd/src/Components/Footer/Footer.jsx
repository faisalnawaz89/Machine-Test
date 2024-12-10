import React from 'react'
import './Footer.css'
import Menu from '../Navbar/Menu'

const Footer = () => {
  return (
    <footer className='footer main--footer'>
        <div className="container">
            <div className="footer--title">
                <h3>Contact Us</h3>
                <div className="footer--menu">
                    <Menu/>       
                </div>
                <div className="newslatter--block">
                    <h4>NEWSLETTER</h4>
                    <input type="email" placeholder='Enter your email' />
                    <button>Signup</button>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>© 2025 Created By Faisal Nawaz</p>
        </div>
    </footer>
  )
}

export default Footer
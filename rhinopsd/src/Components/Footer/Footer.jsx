import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import insta_img from '../Assets/insta-1.png'

const Footer = () => {
  return (
    <footer className='footer main--footer'>
        <div className="container">
            <div className="grid footer--block">
                <div className="footer--title">
                    <img className="footer--img" src={footer_logo} alt="" />
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                </div>
                <div className="footer--title">
                    <h4>QUICK LINKS</h4>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                        <li>
                            <a href="#">Blogs</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer--title">
                    <h4>INSTAGRAM FEEDS</h4>
                    <div className="grid space--between insta--feed">
                        <img src={insta_img} alt="" />
                        <img src={insta_img} alt="" />
                        <img src={insta_img} alt="" />
                        <img src={insta_img} alt="" />
                    </div>
                </div>
                <div className="footer--title">
                    <h4>SIGN UP TO OUR NEWSLETTER</h4>
                    <div className="footer--newsletter">
                        <input type="email" placeholder='Enter your email' />
                        <button>Signup</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="copyright">
            <p>&copy; 2025 Created by Faisal Nawaz</p>
        </div>
    </footer>
  )
}

export default Footer
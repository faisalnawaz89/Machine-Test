import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/footer-logo.png'
import SocialMedia from '../Header/SocialMedia'

const Footer = () => {
  return (
    <footer className='footer main--footer'>
        <div className="container">
            <div className="flex space--between--top footer--block">
                <div className="footer--logo">
                    <a href="#">
                        <img src={footer_logo} alt="" />
                    </a>
                </div>
                <div className="footer--title">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <a href="#">Our Story</a>
                        </li>
                        <li>
                            <a href="#">Newsroom</a>
                        </li>
                        <li>
                            <a href="#">Causes</a>
                        </li>
                    </ul>
                </div>

                <div className="footer--title">
                    <h3>Navigation</h3>
                    <ul>
                        <li>
                            <a href="#">Become a volunteer</a>
                        </li>
                        <li>
                            <a href="#">Partner with us</a>
                        </li>
                        <li>
                            <a href="#">Conatct Us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer--title">
                    <h3>Contact Infomation</h3>
                    <div className="flex space--start--center footer--details">
                        <box-icon name='phone' color='#fff' ></box-icon>
                        <a href="#">120-240-9600</a>
                    </div>
                    <div className="flex space--start--center footer--details">
                        <box-icon name='envelope' color='#fff'></box-icon>
                        <a href="#">donate@charity.org</a>
                    </div>
                    <div className="flex space--start--center footer--details">
                        <box-icon name='location-plus' color='#fff' ></box-icon>
                        <a href="#">Akershusstranda 20, 0150 Oslo, Norway</a>
                    </div>
                    <div className="cta--btn">
                        <a className="secondary--btn" href="#">Get Direction</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="pre--footer">
            <div className="container">
                <div className="flex space--between">
                    <p>Copyright © 2036 Design: TemplateMo, Developed by Faisal Nawaz.</p>
                    <div className='socialmedia social--media'>
                        <SocialMedia IconsColor='whiteIcons' />
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
import React from 'react'
import './Footer.css'
import footer_flag from '../../assets/flag.png'
import footer_email from '../../assets/mail-icon.png'
import footer_phone from '../../assets/phone-icon.png'

const Footer = () => {
  return (
    <div className='footer footer-block'>
        <div className="container">
            <div className="grid footer--grid">
                <div className="footer--contact">
                    <h2 className='footer--big--title'>Contact Information</h2>
                    <h3>Address</h3>
                    <div className="flex footer-col-space-center">
                        <div className="footer--flag">
                            <img src={footer_flag} alt="" />
                        </div>
                        <div className="footer--address">
                            <p>LOREM IPSUM TEXT LOREM, <br />
                            LOREM IPSUM TEXT, Sector V, LOREM, <br />
                            Kolkata, West Bengal 123467</p>
                        </div>
                    </div>
                    <div className="flex-col-2">
                        <div className="flex footer-col-space-center">
                            <div className="footer--email--icon">
                                <img src={footer_email} alt="" />
                            </div>
                            <div className="footer--email">
                                <h3>EMAIL</h3>
                                <a href="mailto:admin@example.in">admin@example.in</a>
                            </div>
                        </div>
                        <div className="flex footer-col-space-center">
                            <div className="footer--email--icon">
                                <img src={footer_phone} alt="" />
                            </div>
                            <div className="footer--email">
                                <h3>PHONE</h3>
                                <a href="tel:+1231234567">+91-33-12345678</a><br />
                                <a href="tel:+1231234567">+91-123 1234567</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer--about">
                    <h4>About</h4>
                    <ul>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Career</a></li>
                        <li><a href="#">Life at Codelogicx</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>
                <div className="footer--links">
                <h4>Domains</h4>
                    <ul>
                        <li><a href="#">Fintech</a></li>
                        <li><a href="#">Healthcare</a></li>
                        <li><a href="#">Travel & Tourism</a></li>
                        <li><a href="#">HR & Payroll</a></li>
                        <li><a href="#">Manufacturing</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
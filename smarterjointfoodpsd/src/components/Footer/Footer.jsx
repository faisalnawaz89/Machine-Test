import React from 'react'
import './Footer.css'
import footer_logo from '../assets/footer-logo.png'

const Footer = () => {
  return (
    <>
    <div className='footer footer-block'>
        <div className="container">
            <div className="grid footer-grid">
                <div className="footer--info">
                    <div className="footer--logo">
                        <img src={footer_logo} alt="" />
                    </div>
                    <p>These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease.</p>
                </div>
                <div className="footerlinks footer-links">
                    <h5>Quick Links:</h5>
                    <ul>
                        <li><a href="#">Dr.'s Secret</a></li>
                        <li><a href="#">What's in</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>
                <div className="footerlinks footer-address">
                    <h5>Contact Us:</h5>
                    <h6>Smarter Nutrition, Inc. <br /> 17870 Newhope St Ste 104 #480 <br /> Fountain Valley, CA 92708</h6>
                </div>
                <div className="footerlinks footer-address">
                    <h5>Any Questions?</h5>
                    <h6 className='contact--title'>Contact Us:</h6>
                    <h6 style={{color:'#fff'}}>1-877-892-1380 </h6>
                </div>
            </div>
        </div>
    </div>
    <div className="prefooter pre-footer">
        <div className="container">
            <div className="flex pre--footer--block">
                <p>© Smarter Nutrition (Smarter Joint Food). All Rights Reserved.</p>
                <ul>
                    <li><a href="#">Privacy Policy </a></li>
                    <li><a href="#">Terms And Conditions</a></li>
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
import React from 'react'
import delv_icon from '../Assets/delivery-icon.png'
import facebook_icon from '../Assets/facebook.png'
import twitter_icon from '../Assets/twitter.png'
import linkdin_icon from '../Assets/linkedin.png'
import instagram_icon from '../Assets/instagram.png'
import Cart from './Cart'

const PreHeader = () => {
  return (
    <>
    <div className="mobile--cart">
        {window.innerWidth <= 440 ? <><Cart display="flex"/></>:''}
    </div>
    <div className="preheader pre--header">
            <div className="grid pre--header-grid">
                <div className="delivery--info">
                    <div className="flex deliver--info--icon">
                        <a href="#" className='flex'><img src={delv_icon} alt="" /> <span>Free Delivery</span></a>
                        <h4>Return Policy</h4>
                    </div>
                </div>
                <div className="login--info">
                    <div className="flex login--info--btn">
                        <a href="#">Login</a>
                        <div className="flex social--icons">
                            <h4>Follow Us</h4>
                            <ul>
                                <li>
                                    <a href="#">
                                        <img src={facebook_icon} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={twitter_icon} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={linkdin_icon} alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <img src={instagram_icon} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PreHeader
import React from 'react'
import './Footer.css'
import latest_img_1 from '../Assets/latest-news-img-1.jpg'
import latest_img_2 from '../Assets/latest-news-img-2.jpg'
import facebook_icon from '../Assets/facebook.png'
import twitter_icon from '../Assets/twitter.png'
import linkdin_icon from '../Assets/linkedin.png'
import instagram_icon from '../Assets/instagram.png'

const Footer = () => {
  return (
    <footer className='footer main--footer'> 
        <div className="newslatter newslatter--block">
            <input type="email" placeholder='Your Email' />
            <button>Subscribe</button>
        </div>
        <div className="grid main--footer--content">
            <div className="footer--link">
                <h4>Useful Link</h4>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About </a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                    <li>
                        <a href="#">Testimonial</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
            </div>
            <div className="footer--link">
                <h4>Features Food</h4>
                <p>It is a long established fact that a reader will be distracted  copy</p>
            </div>
            <div className="footer--link">
                <h4>Instagram</h4>
                <div className="flex insta--feed">
                    <img src={latest_img_1} alt="" />
                    <h5>Dry Food</h5>
                </div>
                <div className="flex insta--feed">
                    <img src={latest_img_2} alt="" />
                    <h5>Dry Food</h5>
                </div>
                <div className="flex insta--feed">
                    <img src={latest_img_1} alt="" />
                    <h5>Dry Food</h5>
                </div>
            </div>
            <div className="footer--link">
                <h4>Contact Us</h4>
                <div className="flex address--icon">
                    <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        style={{ fill: "#fff", transform: "", msfilter: "" }}
                        >
                        <path d="M12 22s8.029-5.56 8-12c0-4.411-3.589-8-8-8S4 5.589 4 9.995C3.971 16.44 11.696 21.784 12 22zM8 9h3V6h2v3h3v2h-3v3h-2v-3H8V9z" />
                        </svg>
                    </span>
                    <h5>Making this the first true  </h5>
                </div>
                <div className="flex address--icon">
                    <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        style={{ fill: "#fff", transform: "", msfilter: "" }}
                        >
                        <path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z" />
                        <path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z" />
                        </svg>
                    </span>
                    <h5>Call : +01 1234567890</h5>
                </div>
                <div className="flex address--icon">
                    <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        style={{ fill: "#fff", transform: "", msfilter: "" }}
                        >
                        <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" />
                    </svg>
                    </span>
                    <h5>Email : demo@gmail.com</h5>
                </div>
                <div className="flex social--icons">
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
        <div className="footer--copyright">
            <p>© 2025 Created by Faisal Nawaz</p>
        </div>
    </footer>
  )
}

export default Footer
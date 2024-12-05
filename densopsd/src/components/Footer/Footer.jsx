import React from 'react'
import './Footer.css'
import call_icon from '../Assets/call-icon.png'
import email from '../Assets/email-icon.png'
import location from '../Assets/location-icon.png'
import footer_logo from '../Assets/footer_logo.png'

const Footer = () => {
  return (
    <footer className='footer footer-block'>
        <div className="prefooter pre--footer--block">
            <div className="container">
                <div className="grid pre--footer--grid">
                    <a className="flex flex-space-between" href="tel:01123467890">
                        <span className='footer--call--icon'>
                            <img src={call_icon} alt="" />
                        </span>
                        <h5>Call Now +01 123467890</h5>
                    </a>
                    <a className="flex flex-space-between" href="#">
                        <span className='footer--call--icon'>
                            <img src={location} alt="" />
                        </span>
                        <h5>Location</h5>
                    </a>
                    <a className="flex flex-space-between" href="mailto:demo@gmail.com">
                        <span className='footer--call--icon'>
                            <img src={email} alt="" />
                        </span>
                        <h5>demo@gmail.com</h5>
                    </a>
                </div>
            </div>
        </div>
        <div className="main--footer">
            <div className="container">
                <div className="grid footer-grid">
                    <div className="footer-info">
                        <img src={footer_logo} alt="" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim </p>
                        <div className="social--icons">
                            <ul>
                                <li>
                                    <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        style={{ fill: "#3cb878", transform: "", msfilter: "" }}>
                                        <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z" />
                                    </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        style={{ fill: "#3cb878", transform: "", msfilter: "" }}
                                        >
                                        <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        style={{ fill: "#3cb878", transform: "", msfilter: "" }}
                                        >
                                        <circle cx="4.983" cy="5.009" r="2.188" />
                                        <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        style={{ fill: "#3cb878", transform: "", msfilter: "" }}
                                        >
                                        <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" />
                                        <circle cx="11.994" cy="11.979" r="3.003" />
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-info">
                        <div className="grid footer--info--links">
                            <div className="footer--link">
                                <h3>Information</h3>
                                <ul>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                </ul>
                            </div>
                            <div className="footer--link">
                                <h3>Helpful Links</h3>
                                <ul>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                </ul>
                            </div>
                            <div className="footer--link">
                                <h3>Supported</h3>
                                <ul>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                    <li><a href="#">Lorem Ipsum</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer--copyrights">
        <p>© 2025 Created by Faisal Nawaz</p>
        </div>
    </footer>
  )
}

export default Footer
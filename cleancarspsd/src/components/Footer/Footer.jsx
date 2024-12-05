import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer footer-block'>
        <div className="container">
            <div className="grid footer--grid">
                <div className="footer--title-info">
                    <h3>Contact Us</h3>
                    <div className="flex flex-gap1 flex--bottom--space">
                        <span className='location--icon'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#aaaaaa"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-map-pin"
                            >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                            <circle cx={12} cy={10} r={3} />
                            </svg>
                        </span>
                        <p>Location</p>
                    </div>
                    <div className="flex flex-gap1 flex--bottom--space">
                        <span className='call--icon'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#aaaaaa"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-phone"
                            >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </span>
                        <p>Call +01 1234567890</p>
                    </div>
                    <div className="flex flex-gap1 flex--bottom--space">
                        <span className='call--icon'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#aaaaaa"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-mail"
                            >
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </span>
                        <p>demo@gmail.com</p>
                    </div>
                </div>
                <div className="footer--title-info">
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Quality</a></li>
                        <li><a href="#">Choose</a></li>
                        <li><a href="#">Testimonials</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer--title-info">
                    <h3>Opening Time</h3>
                    <p>Mon: 07;00am  to  09:00 pm </p>
                    <p>Mon: 07;00am  to  09: 00 pm </p>
                    <p>Mon : 07;00am to  09: 00 pm </p>
                </div>
                <div className="footer--title-info">
                    <h3>Newsletter</h3>
                    <div className="newsletter-block">
                        <input type="email" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="social--icon">
                <ul>
                    <li>
                        <a href="#">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
                            >
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
                            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
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
                            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
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
                            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
                            >
                            <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" />
                            <circle cx="11.994" cy="11.979" r="3.003" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="pre--footer">
                <p>© 2020 All Rights Reserved. Design by Free Html Templates</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
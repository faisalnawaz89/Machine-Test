import React from 'react'
import './Footer.css'
import map from '../Assets/map.png'

const Footer = () => {
  return (
    <div className='footer footer-block'> 
        <div className="grid footer--container--grid">
            <div className="footer-info-block grid--cell">
                <h3>Resources</h3>
                <ul>
                    <li><a href="#">What we do</a></li>
                    <li><a href="#">Media</a></li>
                    <li><a href="#">Travels Advice</a></li>
                    <li><a href="#">Protection</a></li>
                    <li><a href="#">Care</a></li>
                </ul>
            </div>
            <div className="footer-info-block grid--cell">
                <h3>About</h3>
                <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various</p>
            </div>
            <div className="footer-info-block grid--cell">
                <h3>Contact Us</h3>
                <div className="flex flex--center">
                    <span><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-map-pin"
                    >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx={12} cy={10} r={3} />
                    </svg>
                    </span>
                    <p>Making this the first true  </p>
                </div>
                <div className="flex flex--center">
                    <span><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-phone"
                    >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    </span>
                    <p>Call : +01 1234567890</p>
                </div>
                <div className="flex flex--center">
                    <span><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-mail"
                    >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                    </svg>
                    </span>
                    <p>Email : demo@gmail.com</p>
                </div>
            </div>
            <div className="footer-info-block grid--cell">
                <h3>Countrys</h3>
                <span><img src={map} alt="" /></span>
            </div>
        </div>
        <div className="prefooter">
            <p>© 2025 Created by Faisal Nawaz</p>
        </div>
    </div>
  )
}

export default Footer
import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'

const Navbar = () => {

  const [Menu, setMenu] = useState(true)

  return (
    <header className='header main--header'>
        <div className="container">
            <div className="grid space--between main--header--block">
                <div className="mobile-tab">
                    <div className="mobile--tab--icon" onClick={()=>setMenu(!Menu)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            style={{ fill: "#143a51", transform: "", msfilter: "" }}>
                            <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z" />
                        </svg>
                    </div>
                    <div className={`offcanvas--menu ${!Menu?'open':'close'}`}>
                        <div className="offcanvas--menu--block">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Shop</a>
                                    </li>
                                    <li>
                                        <a href="#">Product</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Login</a>
                                    </li>
                                </ul>
                            </nav>
                            <span className="close--btn" onClick={()=>setMenu(!Menu)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={30}
                                viewBox="0 0 24 24"
                                style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msfilter: "" }}>
                                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
                            </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="user--account">
                    <div className="flex user--icons">
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={30}
                                viewBox="0 0 24 24"
                                style={{ fill: "#143a51", transform: "", msfilter: "" }}
                                >
                                <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
                            </svg>
                        </span>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={30}
                                viewBox="0 0 24 24"
                                style={{ fill: "#143a51", transform: "", msfilter: "" }}
                                >
                                <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921z" />
                                <circle cx="10.5" cy="19.5" r="1.5" />
                                <circle cx="17.5" cy="19.5" r="1.5" />
                            </svg>
                        </span>
                        <span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={30}
                                height={30}
                                viewBox="0 0 24 24"
                                style={{ fill: "#143a51", transform: "", msfilter: "" }}
                                >
                                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
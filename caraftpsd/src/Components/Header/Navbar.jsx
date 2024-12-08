import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'

const Navbar = () => {

  const[Menu, setMenu] = useState(false)

  return (
    <header className='header main--header'>
        <div className="container">
            <div className="grid space--between header--block">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="flex space--between accout--bar-block">
                    <div className="login--block">
                        <a href="#">Log In</a>
                    </div>
                    <div className="cart--block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
                            >
                            <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z" />
                            <circle cx="10.5" cy="19.5" r="1.5" />
                            <circle cx="17.5" cy="19.5" r="1.5" />
                        </svg>
                    </div>
                    <div className="search--block">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
                            >
                            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                        </svg>
                    </div>
                    <div className="menu--tab" onClick={()=>setMenu(!Menu)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
                            >
                            <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
                        </svg>
                    </div>
                </div>
            </div>
            {!Menu || <><div className="mobile--menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            </>}
        </div>
    </header>
  )
}

export default Navbar
import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import Menu from './Menu'

const Navbar = () => {

  const[menu, setMenu] = useState(false)

  return (
    <header className='header header-block'>
        <div className="container-fluid">
            <div className="main--header">
                <div className="header---block grid space--between">
                    <div className="log">
                        <img src={logo} alt="logo" />
                    </div>
                    <Menu/>
                    <div className="accounts account--bar">
                        <ul className='flex space--center'>
                            <li>
                                <a href="#">
                                    <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        style={{ fill: "#fff", transform: "", msfilter: "" }}>
                                        <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        style={{ fill: "#fff", transform: "", msfilter: "" }}>
                                        <path d="M5 22h14c1.103 0 2-.897 2-2V9a1 1 0 0 0-1-1h-3V7c0-2.757-2.243-5-5-5S7 4.243 7 7v1H4a1 1 0 0 0-1 1v11c0 1.103.897 2 2 2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-4 3h2v2h2v-2h6v2h2v-2h2l.002 10H5V10z" />
                                    </svg>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        style={{ fill: "#fff", transform: "", msfilter: "" }}>
                                        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                                    </svg>
                                    </span>
                                </a>
                            </li>
                            <li className='mobile--menu' onClick={()=>setMenu(!menu)}>
                                <a href="#">
                                    <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        style={{ fill: "#fff", transform: "", msfilter: "" }}
                                        >
                                        <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
                                        </svg>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {!menu || <><div className="mobile--menu--block"><Menu/></div></>}
            </div>
        </div>
    </header>
  )
}

export default Navbar
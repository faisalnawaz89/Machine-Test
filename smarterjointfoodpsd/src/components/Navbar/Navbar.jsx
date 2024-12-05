import React, { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import Menu from './Menu'

const Navbar = () => {

  const[menu, setMenu] = useState(false)

  return (
    <div className='navbar navbar-block'>
        <div className="container">
            <header className='header header-block'>
                <nav className='navigation navigation-bar flex'>
                    <div className="logo logo--block">
                        <img src={logo} alt="logo" />
                    </div>
                    <Menu/>
                    <span onClick={()=>setMenu(!menu)} className='mobile--menu'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu"
                            >
                            <line x1={3} y1={12} x2={21} y2={12} />
                            <line x1={3} y1={6} x2={21} y2={6} />
                            <line x1={3} y1={18} x2={21} y2={18} />
                        </svg>
                    </span>
                </nav>
            </header>
            {!menu || <div className="mobile--menu--block"><Menu/></div> }
            
        </div>
    </div>
  )
}

export default Navbar
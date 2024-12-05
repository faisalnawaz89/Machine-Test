import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import company_logo from "../../assets/compnay_logo.png"
import Menu from './Menu'

const Navbar = () => {

  const[menu, setMenu] = useState(false)

  return (
    <header className='header header-block'>
        <div className='container'>
            <nav className='nav nav-block flex'>
                <img className="logo" src={company_logo} alt=""/>
                <Menu display="smnone" />
                <button className='btn get--cta smnone'>Contact Us</button>
                <span className='mdnone humburger--menu' onClick={()=>setMenu(!menu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                </span>
            </nav>
            <div className="mobile-menu">
                {!menu || <Menu/>}
            </div>
        </div>
    </header>
  )
}

export default Navbar
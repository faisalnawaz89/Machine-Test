import React, { useState } from 'react'
import './Header.css'
import logo from '../Assets/logo.png'
import Menu from './Menu'

const Header = () => {

  const [menu, setMenu] = useState(false)

  return (
    <>
    <header className='header main-header'>
        <div className="container">
            <div className="preheader pre--header">
                <div className="grid pre-header-block">
                    <div className="logo">
                        <a href="#">
                          <img src={logo} alt="" />
                        </a>
                    </div>
                    <div className="icon--container">
                        <div className="icons">
                            <a className="flex flex-center" href="tel:011234567890"><span className='icon-bg call--icon'></span> <h4>Call Us : +01 1234567890</h4></a>
                        </div>
                    </div>
                    <div className="icon--container">
                        <div className="icons">
                            <a className="flex flex-center" href="mailto:demo@gmail.com"><span className='icon-bg email--icon'></span> <h4>demo@gmail.com</h4></a>
                        </div>
                    </div>
                    <div className="search--bar">
                        <input type="search" className='serach--bar--input'/>
                        <span className='search--icon'></span>
                    </div>
                </div>
                <div className="mobile--menu" onClick={()=>setMenu(!menu)}>
                    <div className='mobile--svg'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={40}
                        height={40}
                        viewBox="0 0 24 24"
                        style={{ fill: "#fff", transform: "", msfilter: "" }}
                      >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                    </svg>
                    </div>
                </div>
            </div>
        </div>
        <nav className='navigation navigation--menu'>
          <div className="container">
              <Menu/>
          </div>
        </nav>
    </header>
    <nav className='mobile--menu--block'>
        {!menu || <Menu/>}
    </nav>
    </>
  )
}

export default Header
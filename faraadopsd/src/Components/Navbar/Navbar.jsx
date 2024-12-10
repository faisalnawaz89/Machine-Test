import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assest/logo.png'
import Menu from './Menu'

const Navbar = () => {

  const[MainMenu, setMainMenu] = useState(false)

  return (
    <header className='header header--block'>
        <div className="grid space--between main--header">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="menu--tab" onClick={()=>setMainMenu(!MainMenu)}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                    style={{ fill: "#fff", transform: "", msfilter: "" }}
                    >
                    <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
                </svg>
            </div>
        </div>
        {!MainMenu || <div className='main--menu--block'><Menu/></div>}
    </header>
  )
}

export default Navbar
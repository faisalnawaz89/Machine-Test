import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import Menu from './Menu'


const Navbar = () => {

  const[MainMenu, setMainMenu] = useState(false)

  return (
    <header className='header main--header'>
        <div className="container">
            <div className="grid space--between main--header--block">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <Menu/>
                <div className="flex user--access">
                    <a href="#">Register</a>
                    <a className="orange--btn" href="#">Login</a>
                    <div className="mobile--tab" onClick={()=>setMainMenu(!MainMenu)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={36}
                            height={36}
                            viewBox="0 0 24 24"
                            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}>
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                        </svg>
                    </div>
                </div>
            </div>
            {!MainMenu || <div className='mobile--menu--block'><Menu/></div>}
        </div>
    </header>
  )
}

export default Navbar
import React, { useState } from 'react'
import './Navbar.css'
import Menu from './Menu'

const Navbar = () => {
  
  const [menu, setMenu] = useState(false)  

  return (
    <div className='navbar nav-bar-block'>
        
            <div className="grid nav--bar--grid">
                <div className="logo-block">
                    <a href="#">CleanCars</a>
                </div>
                <nav className='menu main--menu'>
                    <Menu/>
                </nav>
                <div className="mobile--menu" onClick={()=>setMenu(!menu)}>
                    <span className='mobile--hamburger--icon'>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        style={{ fill: "#fff", transform: "", msfilter: "" }}
                        >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                        </svg>
                    </span>
                </div>
                <div className="search--icon">
                    <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#fff"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-search"
                        >
                        <circle cx={11} cy={11} r={8} />
                        <line x1={21} y1={21} x2="16.65" y2="16.65" />
                        </svg>
                    </span>
                </div>
            </div>

            <div className="mobile--menu--block">
                {!menu || <Menu/>}
            </div>
       
    </div>
  )
}

export default Navbar
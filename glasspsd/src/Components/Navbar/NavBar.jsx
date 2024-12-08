import React, { useState } from 'react'
import './NavBar.css'
import logo from '../Assets/logo.png'
import Menu from './Menu'

const NavBar = () => {

  const[Menutab, setMenu] = useState(false)

  return (
    <header className='header header--block'>
        <div className="main--header">
            <div className="grid header--navigation">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <Menu/>
                <div className="account--bar">
                    <a href="#">Login</a>
                    <div className="flex space--between user--account">
                        <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            style={{ fill: "#bdbcbc", transform: "", msfilter: "" }}
                            >
                            <path d="M21 4H2v2h2.3l3.28 9a3 3 0 0 0 2.82 2H19v-2h-8.6a1 1 0 0 1-.94-.66L9 13h9.28a2 2 0 0 0 1.92-1.45L22 5.27A1 1 0 0 0 21.27 4 .84.84 0 0 0 21 4zm-2.75 7h-10L6.43 6h13.24z" />
                            <circle cx="10.5" cy="19.5" r="1.5" />
                            <circle cx="16.5" cy="19.5" r="1.5" />
                        </svg>
                        </span>
                        <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            style={{ fill: "#bdbcbc", transform: "", msfilter: "" }}
                            >
                            <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                        </svg>
                        </span>
                    </div>
                    <span className='mobile--tab' onClick={()=>setMenu(!Menutab)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        style={{ fill: "#bdbcbc", transform: "", msfilter: "" }}
                        >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                    </svg>
                    </span>
                </div>
            </div>
            {!Menutab || <><div className="mobile--menu--block"><Menu/></div></>}
        </div>
    </header>
  )
}

export default NavBar
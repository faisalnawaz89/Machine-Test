import React from 'react'
import './Header.css'
import logo from '../Assets/logo.png'
import Menu from './Menu'
import PreHeader from './PreHeader'
import { useState } from 'react'

const Header = () => {
  
  const [MainMenu, setMainMenu] = useState(false)

  return (
    <header className="header main--header">
      <PreHeader/>
      <div className="navigation main--menu">
        <div className="container">
            <div className="grid space--between main--menu--block">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <nav className="nav nav--menu">
                    <Menu />
                </nav>
                <div className="search--icon">
                    <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        style={{ fill: "#161825", transform: "", msfilter: "" }}>
                        <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                    </svg>
                    </span>
                    <span className='mobile-tab' onClick={()=>setMainMenu(!MainMenu)}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            style={{ fill: "#161825", transform: "", msfilter: "" }}
                            >
                            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                        </svg>
                    </span>
                </div>
            </div>
        </div>
      </div>
      {!MainMenu || <> <div className="mobile--menu--block"> <PreHeader/> <Menu/> </div> </>}
    </header>
  );
}

export default Header
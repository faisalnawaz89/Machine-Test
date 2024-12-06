import React, { useState } from 'react'
import './Navbar.css'
import PreMenu from './PreMenu'
import menu_tab from '../Assets/menutab.png'
import search_icon from '../Assets/search-icon.png'
import logo from '../Assets/logo.png'
import NavFilter from './NavFilter'
import NavLanguage from './NavLanguage'
import NavAccount from './NavAccount'

const Navbar = () => {

  const[Menu, setMenu] = useState(false)

  return (
    <>    
    <header className='header header--block'>
        <div className="pre--header">
            <PreMenu/>
        </div>
        <div className="navigation--filter">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="grid space--between filter--bar">
                <div className="menu--tab" onClick={()=>setMenu(!Menu)}>
                    <img src={menu_tab} alt="" />
                </div>
                <div className="filter--bar--block">
                  <div className="grid space--between search--bar--block">
                      <NavFilter/>
                      <div className="search--input">
                          <input type="email" placeholder='Search...' />
                          <div className="search--icons">
                            <img src={search_icon} alt="" />
                          </div>
                      </div>
                      <NavLanguage/>
                  </div>
                </div>
                <NavAccount/>
            </div>
        </div>
    </header>

    {!Menu || <>
    <div className="mobile--menu--block">
      <div className="mobile--menu">
        <NavFilter/>
        <NavAccount/>
      </div>
      <PreMenu/>
    </div>
    </>
    }

    </>
  )
}

export default Navbar
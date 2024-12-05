import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import menu_tab from '../Assets/menutab.png'
import MainMenu from './MainMenu'


const Navbar = () => {
  
  const [Menu, setMenu] = useState(false)

  return (
    <header className='header header--block'>
        <nav className='menu main--menu'>
            <div className="grid space--between menu--block">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <MainMenu/>
                <div className="menu--tab" onClick={()=>setMenu(!Menu)}>
                    <img src={menu_tab} alt="" />
                </div>
            </div>
            
            {!Menu || <><div className="mobile--menu--block"><MainMenu/></div></>}
            
        </nav>
    </header>
  )
}

export default Navbar
import React, { useState } from 'react'
import './Navbar.css'
import Menu from './Menu'
import search_icon from '../Assets/search-icon.png'
import tab_menu from '../Assets/hamburger-menu.png'

const Navbar = () => {

  const [menu, setMenu] = useState(false)

  return (
<>
    <header className='header header-block'>
        <div className="grid page--header main--menu">
            <div className="tabmenu tab-menu" onClick={()=>{setMenu(!menu)}}>
                <img src={tab_menu} alt="" />
            </div>
            <Menu/>
            <ul className='user--login'>
                <li>
                    <a href="#"><img src={search_icon} alt="" /></a>
                </li>
                <li>
                    <a href="#">Login</a>
                </li>
            </ul>
        </div>
    </header>
    <div className={`mobile--offcanvas ${!menu? 'close':'open'}`}>
        <div className="mobile--offcanvas--inner">
            {!menu ||<> <span className='close--btn' onClick={()=>{setMenu(!menu)}}>X</span> <Menu/> </> }
        </div>
    </div>
</>
  )
}

export default Navbar
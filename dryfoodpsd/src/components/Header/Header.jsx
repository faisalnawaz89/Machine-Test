import React, { useState } from 'react'
import './Header.css'
import logo from '../Assets/logo.png'
import filter_icon from '../Assets/hamburger-icon.png'
import Menu from './Menu'
import PreHeader from './PreHeader'
import Cart from './Cart'
import search_icon from '../Assets/search-icon.png'

const Header = () => {
const [menu, setMenu] = useState(false)
  return (
    <header className='header main-header'>
        <PreHeader/>
        <nav className='navigation navigation--block'>
            <div className="mainmenu main--menu">
                <div className="grid main--menu--grid">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="flex search--bar">
                        <div className="search--filter">
                            <div className="flex filter-icon">
                                <img src={filter_icon} alt="" />
                                <h4>All Category </h4>
                            </div>
                        </div>
                        <div className="search--input">
                            <input type="search" placeholder='Find your products' />
                            <button>{window.innerWidth <= 440 ? <><img src={search_icon} alt="" /></>: 'Search' }</button>
                        </div>
                        <div className="hamburger--menu" onClick={()=>setMenu(!menu)}>
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={40}
                                    height={40}
                                    viewBox="0 0 24 24"
                                    style={{ fill: "#727272", transform: "", msfilter: "" }}>
                                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <Cart/>
                </div>
            </div>
        </nav>
        <div className={`main--navigation ${!menu? 'close':'open'}`}>
            <Menu/>
        </div>
    </header>
  )
}

export default Header
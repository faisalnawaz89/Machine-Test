import React from 'react'
import logo from '../Assets/logo.png'

const Menu = () => {
  return (
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Doctor</a></li>
            <li className='logo'><a href="#"><img src={logo} alt="" /></a></li>
            <li><a href="#">Department</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Menu
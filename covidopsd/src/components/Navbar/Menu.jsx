import React from 'react'
import logo from '../Assets/logo.png'

const Menu = ({displayNone}) => {
  return (
    <ul className='menu menu-bar flex'>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Take Action</a></li>
        <li style={{display:`${displayNone}`}}><a href="#" className="main--logo"><img src={logo} alt="" /></a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Doctores</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
  )
}

export default Menu
import React, { useState } from 'react'
import './Header.css'
import Menu from './Menu'
import PreHeader from './PreHeader'


const Header = () => {
 
  const[mainMenu, setMainMenu] = useState(false)
 
  return (
    <header className='header main--header'>
        <PreHeader/>
        <Menu/>
    </header>
  )
}

export default Header
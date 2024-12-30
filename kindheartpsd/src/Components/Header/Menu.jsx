import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import Navigation from './Navigation'

const Menu = () => {
  
  const[mainMenu, setMainMenu] = useState(false)
  
  return (

    <>
        <div className="mainmenu main--menu">
            <div className="container">
                <div className="grid space--between main--menu--block">
                    <div className="logo">
                        <a href="#">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <Navigation/>
                    <div className="mobile--tab" onClick={()=>setMainMenu(!mainMenu)}>
                        <box-icon name='menu-alt-right' size="md" color="grey"></box-icon>
                    </div>
                </div>
            </div>
        </div>
        {!mainMenu || <div className='mobile--menu--block'><Navigation/></div>}
        
    </>
  )
}

export default Menu
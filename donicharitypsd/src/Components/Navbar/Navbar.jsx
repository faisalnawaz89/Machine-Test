import React, { useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import Menu from './Menu'

const Navbar = () => {

const [menu, setMenu] = useState(false)

  return (
    <header className='header main--header'>
        <div className="container-fluid">
            <div className="grid navigation--bar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <nav className='menu main--menu'>
                    <Menu/>
                </nav>
                <div className="mobile--menu--icon" onClick={()=>setMenu(!menu)}>
                    <span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 24 24"
                        style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
                        >
                        <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
                        </svg>

                    </span>
                </div>
                <div className="flex donate--btn">
                    <a href="#">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}
                            >
                            <path d="M17.726 13.02 14 16H9v-1h4.065a.5.5 0 0 0 .416-.777l-.888-1.332A1.995 1.995 0 0 0 10.93 12H3a1 1 0 0 0-1 1v6a2 2 0 0 0 2 2h9.639a3 3 0 0 0 2.258-1.024L22 13l-1.452-.484a2.998 2.998 0 0 0-2.822.504zm1.532-5.63c.451-.465.73-1.108.73-1.818s-.279-1.353-.73-1.818A2.447 2.447 0 0 0 17.494 3S16.25 2.997 15 4.286C13.75 2.997 12.506 3 12.506 3a2.45 2.45 0 0 0-1.764.753c-.451.466-.73 1.108-.73 1.818s.279 1.354.73 1.818L15 12l4.258-4.61z" />
                        </svg>
                    </span>
                    <span>Donate Now</span>  
                    </a>
                </div>
            </div>
            
            {!menu || <><div className="mobile--menu--block"><Menu/></div></>}

        </div>
    </header>
  )
}

export default Navbar
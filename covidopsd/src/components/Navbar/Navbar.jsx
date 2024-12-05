import React, { useState } from 'react'
import './Navbar.css'
import Menu from './Menu'

const Navbar = () => {

  const[menu, setMenu] = useState(false)

  return (
    <div className='navbar navbar-block'>
        <header className='navigation grid navigation--block'>
            <div className="search--icon">
                <span className='seasearch--icon--svg'>
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    style={{ fill: "#fff", transform: "", msfilter: "" }}
                    >
                    <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                    </svg>
                </span>
            </div>
            <Menu/>
            <div className="admin--icon">
                <span className='admin--icon--svg'>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    style={{ fill: "#fff", transform: "", msfilter: "" }}
                    >
                    <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
                </svg>
                </span>
            </div>
            <div className="mobile--menu" onClick={()=>setMenu(!menu)}>
                <span><svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu"
                >
                <line x1={3} y1={12} x2={21} y2={12} />
                <line x1={3} y1={6} x2={21} y2={6} />
                <line x1={3} y1={18} x2={21} y2={18} />
                </svg>
                </span>
            </div>
        </header>
        {!menu || 
        <div className='mobile--menu--block'>
            <Menu displayNone="none"/>
        </div>
        }
    </div>
  )
}

export default Navbar
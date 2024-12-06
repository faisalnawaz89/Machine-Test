import React from 'react'
import flag_icon from '../Assets/flag.png'

const NavLanguage = () => {
  return (
    <div className="language--menu">
        <button>
            <span className="flag--icon">
            <img src={flag_icon} alt="" />
            </span>
            <span>English</span>
            <span className="arrow--icon"></span>
        </button>
    </div>
  );
}

export default NavLanguage
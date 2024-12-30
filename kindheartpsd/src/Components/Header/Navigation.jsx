import React from 'react'
import PreHeader from './PreHeader'

const Navigation = () => {
  return (
    <>
        <nav className="navigation nav--menu">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                   <a href="#">Causes</a>
                </li>
                <li>
                    <a href="#">Volunteer</a>
                </li>
                <li>
                    <a href="#">News</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
                <li>
                    <a href="#">Donate</a>
                </li>
            </ul>
        </nav>
        <div className="mobile--pre--header">
            <PreHeader/>
        </div>
    </>  
  )
}

export default Navigation
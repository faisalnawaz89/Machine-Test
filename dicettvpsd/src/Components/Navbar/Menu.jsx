import React from 'react'

const Menu = () => {
  return (
    <nav className="menu main--menu">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">Blogs</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
        <li className="border--btn">
          <a href="#">Get Started</a>
        </li>
      </ul>
    </nav>
  );
}

export default Menu
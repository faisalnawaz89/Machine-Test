import React from 'react'
import drop_arrow from '../../assets/dropdown_arror.png'

const Menu = ({display}) => {
  return (
    <ul className={display}>
        <li>
            <a href="">Technologies <span><img src={drop_arrow} alt="" /></span></a>
        </li>
        <li>
            <a href="">Services <span><img src={drop_arrow} alt="" /></span></a>
        </li>
        <li>
            <a href="">Domain</a>
        </li>
        <li>
            <a href="">About</a>
        </li>
    </ul>
  )
}

export default Menu
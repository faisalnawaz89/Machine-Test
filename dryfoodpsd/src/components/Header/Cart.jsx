import React from 'react'
import cart_icon from '../Assets/bag.png'
import heart_icon from '../Assets/heart.png'
import login_icon from '../Assets/user.png'

const Cart = ({display}) => {
  return (
    <div className="account--bar" style={{display:display}}>
      <div className="flex account--bar--icons">
        <img src={cart_icon} alt="" />
        <h4>Cart</h4>
      </div>
      <div className="flex account--bar--icons">
        <img src={heart_icon} alt="" />
        <h4>Like</h4>
      </div>
      <div className="flex account--bar--icons">
        <img src={login_icon} alt="" />
        <h4>Login</h4>
      </div>
    </div>
  );
}

export default Cart
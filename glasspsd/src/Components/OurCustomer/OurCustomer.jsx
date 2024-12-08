import React from 'react'
import './OurCustomer.css'
import customer_img from '../Assets/customer-img.png'

const OurCustomer = () => {
  return (
    <div className='ourcustomer our--customer'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2><span>W</span><span>hat</span> says our customer</h2>
            </div>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <img src={customer_img} alt="" />
            <h4>Jacksmith sand</h4>
        </div>
    </div>
  )
}

export default OurCustomer
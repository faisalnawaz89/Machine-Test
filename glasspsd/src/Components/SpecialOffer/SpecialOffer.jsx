import React from 'react'
import './SpecialOffer.css'
import glasses_img from '../Assets/glasses-places.png'

const SpecialOffer = () => {
  return (
    <div className='specialoffer special--offer'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2><span>B</span><span>uy</span> your stylish <span>glasses</span></h2>
            </div>
            <img src={glasses_img} alt="" />
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, </p>
            <div className="cta--btn">
                <a href="#">Buy Now</a>
            </div>
        </div>
    </div>
  )
}

export default SpecialOffer
import React from 'react'
import './SpecialBlock.css'
import special_block_img from '../../Assets/special-block.jpg'

const SpecialBlock = () => {
  return (
    <div className='specialblock special--block'>
        <div className="container">
            <div className="grid space--between special--block--inner">
                <div className="spcial--block--left">
                    <h4>Special</h4>
                    <h3>Wedding Ring</h3>
                    <a href="#">Buy Now</a>
                </div>
                <div className="spacial--block--bg">
                    <img src={special_block_img} alt="" />
                </div>
            </div>
        </div>
        <div className='round--sphere'></div>
    </div>
  )
}

export default SpecialBlock
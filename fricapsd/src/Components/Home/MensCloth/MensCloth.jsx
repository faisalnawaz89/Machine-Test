import React from 'react'
import './MensCloth.css'
import mens_cloth_img from '../../Assets/mens-cloth-sample.png'

const MensCloth = () => {
  return (
    <div className='menscloth mens--cloth'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>Man’s clothes</h2>
            </div>
            <div className="grid space--between mens--cloth--inner">
                <div className="mens--cloth--title">
                    <h3>Best  Offer Every Man’s Iteams</h3>
                    <p>There are many variations of passages of Lorem Ipsum available,
                    but the majority have</p>
                    <div className="cta--btn">
                        <a className="secondary--btn" href="#">Buy Now</a>
                    </div>
                </div>
                <div className="mens--cloth--image"></div>
            </div>
        </div>
    </div>
  )
}

export default MensCloth
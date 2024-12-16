import React from 'react'
import './WomenCloth.css'
import women_cloth_img from '../../Assets/women-sample.png'

const WomenCloth = () => {
  return (
    <div className='womencloth women--cloth'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>woman’s clothes</h2>
            </div>
            <div className="grid women--cloth--block">
                <div className="women--cloth--title">
                    <h3>Get <br /> offer Every <br /> Iteams</h3>
                    <div className="cta--btn">
                        <a className="secondary--btn" href="#">Read More</a>
                    </div>
                </div>
                <div className="women--cloth--image">
                    <img src={women_cloth_img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default WomenCloth
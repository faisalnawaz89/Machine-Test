import React from 'react'
import './BestQuality.css'
import best_quality_img from '../Assets/bestquality-img.jpg'

const BestQuality = () => {
  return (
    <div className='bestquality best--quality'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2><span>b</span><span>est</span> Quality</h2>
            </div>
            <div className="grid space--between best--quality--block">
                <div className="best--quality--title">
                    <h4><span>01</span>It is a long established fact that a reader will be distracted </h4>
                    <h4><span>02</span>by the readable content of a page when looking at its </h4>
                    <h4><span>03</span>layout. The point of using Lorem Ipsum is that it has a  </h4>
                    <h4><span>04</span>more-or-less normal distribution of letters, a  </h4>
                </div>
                <div className="best--quality--imgage">
                    <img src={best_quality_img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BestQuality
import React from 'react'
import './OurGlasses.css'
import glass_img_1 from '../Assets/glass-img-1.jpg'
import glass_img_2 from '../Assets/glass-img-2.jpg'
import glass_img_3 from '../Assets/glass-img-3.jpg'
import glass_img_4 from '../Assets/glass-img-4.jpg'
import glass_img_5 from '../Assets/glass-img-5.jpg'
import glass_img_6 from '../Assets/glass-img-6.jpg'
import glass_img_7 from '../Assets/glass-img-7.jpg'
import glass_img_8 from '../Assets/glass-img-8.jpg'

const OurGlasses = () => {
  return (
    <div className='ourglasses our--glasses'>
        <div className="container">
            <div className="our--glasses--block">
                <div className="pagetitle page--title">
                    <h2><span>O</span><span>ur</span> Glasses</h2>
                </div>
                <div className="grid product--boxes">
                    <div className="box--inner">
                        <img src={glass_img_1} alt="" />
                        <h4>$50</h4>
                        <a href="#">Buy Now</a>
                    </div>
                    <div className="box--inner">
                        <img src={glass_img_2} alt="" />
                        <h4>$50</h4>
                        <a href="#">Buy Now</a>
                    </div>
                    <div className="box--inner">
                        <img src={glass_img_3} alt="" />
                        <h4>$50</h4>
                        <a href="#">Buy Now</a>
                    </div>
                    <div className="box--inner">
                        <img src={glass_img_4} alt="" />
                        <h4>$50</h4>
                        <a href="#">Buy Now</a>
                    </div>
                    <div className="box--inner">
                        <img src={glass_img_5} alt="" />
                        <h4>$50</h4>
                        <a href="#">Buy Now</a>
                    </div>
                    <div className="box--inner">
                        <img src={glass_img_6} alt="" />
                        <h4>$50</h4>
                        <a href="#">Buy Now</a>
                    </div>
                    <div className="box--inner">
                        <img src={glass_img_7} alt="" />
                        <h4>$50</h4>
                        <a href="#">Buy Now</a>
                    </div>
                    <div className="box--inner">
                        <img src={glass_img_8} alt="" />
                        <h4>$50</h4>
                        <a href="#">Buy Now</a>
                    </div>
                </div>
                <div className="cta--btn">
                    <a href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurGlasses
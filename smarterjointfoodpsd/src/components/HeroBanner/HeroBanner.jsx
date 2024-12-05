import React from 'react'
import './HeroBanner.css'
import icon1 from '../assets/icons1.png'
import icon2 from '../assets/icons2.png'
import icon3 from '../assets/icons3.png'
import icon4 from '../assets/icons4.png'
import product from '../assets/products.png'
import play_btn from '../assets/play-btn.png'
import badge_icon from '../assets/badge-icon.png'


const HeroBanner = () => {
  return (
    <div className='herobanner hero-banner-block'>
        <div className="grid hero--banner">
            <div className="bg--outline"></div>
            <div className="dr-bg-img">
                <img className="product-img" src={product} alt="" />
                <div className="play--btn-widget">
                    <img className="play-btn" src={play_btn} alt="" />
                    <div className="flex badge-block">
                        <img src={badge_icon} alt="" />
                        <h4>Over 9 million  bottles sold</h4>
                    </div>
                </div>
            </div>
        </div>
        <div className="hero-banner-content-block">
            <div className="container">
                <div className="grid banner-info-block">
                    <div className="banner-title-cell">
                        <h1 className='big--title'>Clinically-proven <br />joint nutrition</h1>
                        <p>Stop the misery and reclaim your mobility with Smarter Joint Food</p>
                        <div className="grid grid-col-4">
                            <div className="title--points">
                                <div className="icons">
                                    <img src={icon1} alt="" />
                                </div>
                                <div className="title-text">
                                    <p>Relieves  Joint Discomfort</p>
                                </div>
                            </div>
                            <div className="title--points">
                                <div className="icons">
                                    <img src={icon2} alt="" />
                                </div>
                                <div className="title-text">
                                    <p>Results Starting in Just 2 Weeks!</p>
                                </div>
                            </div>
                            <div className="title--points">
                                <div className="icons">
                                    <img src={icon3} alt="" />
                                </div>
                                <div className="title-text">
                                    <p>Nourishes Joint Cartilage</p>
                                </div>
                            </div>
                            <div className="title--points">
                                <div className="icons">
                                    <img src={icon4} alt="" />
                                </div>
                                <div className="title-text">
                                    <p>Promotes Joint Flexibility</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex cta--button">
                            <button className='solid-cta-button'>Buy Now</button>
                            <button className='primary-cta-button'>Learn More</button>
                        </div>
                    </div>
                    <div className="banner-product-cell">
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
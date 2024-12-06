import React from 'react'
import './HeroBanner.css'
import playbtn from '../../assets/play-btn.png'
import videoThumb from '../../assets/videoThumb.png'
import n1 from '../../assets/notify-icon-1.png'
import n2 from '../../assets/notify-icon-2.png'
import n3 from '../../assets/notify-icon-3.png'
import company_bg from '../../assets/abstract_bg.png'
import company_main_img from '../../assets/work_img-1.png'
import company1 from '../../assets/forbes.png'
import company2 from '../../assets/thewallstreet.png'
import company3 from '../../assets/thetimesofindia.png'
import company4 from '../../assets/businessinsider.png'
import company5 from '../../assets/tnw.png'
import company6 from '../../assets/huffpost.png'

const HeroBanner = () => {
  return (
    <div className='hero hero-banner'>
        <div className="container">
            <div className="grid hero-banner-block">
                <div className="hero-content-block">
                    <h1>CodeLogic</h1>
                    <h2>Product Engineering</h2>
                    <div className="flex hero--bottom-cta">
                        <button>Get Started</button>
                        <h3>Company</h3>
                    </div>
                </div>
                <div className="hero-video-block">
                    <div className="flex video--block">
                        <img src={playbtn} alt="" />
                        <img src={videoThumb} alt="" />
                    </div>
                    <div className="flex notify-container">
                        <div className="flex notify notify-icons">
                            <img className="n1" src={n1} alt="" />
                            <img className="n2" src={n2} alt="" />
                            <img className="n3" src={n3} alt="" />
                        </div>
                        <button className='btn review-btn'>Excellent 100+ Reviews</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="company grid">
            <div className="company-img">
                <div className="company-img-container">
                    <img className="company-img-bg" src={company_bg} alt="" />
                    <img className="company-main-img" src={company_main_img} alt="" />
                </div>
            </div>
            <div className="company-navigation">
                <ul>
                    <li><a href=""><img src={company1} alt="" /></a></li>
                    <li><a href=""><img src={company2} alt="" /></a></li>
                    <li><a href=""><img src={company3} alt="" /></a></li>
                    <li><a href=""><img src={company4} alt="" /></a></li>
                    <li><a href=""><img src={company5} alt="" /></a></li>
                    <li><a href=""><img src={company6} alt="" /></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default HeroBanner
import React from 'react'
import './WhyChoose.css'
import devl_large from '../Assets/delivery-large.png'
import almond_large from '../Assets/almond-large.png'
import medal_large from '../Assets/medal-large.png'

const WhyChoose = () => {
  return (
    <div className='whychoose why--choose--us--block'>
        <div className="pagetitle page--title">
            <h2>Why Choose Our Food</h2>
            <div className="divider"></div>
        </div>
        <div className="grid why--choose--us--boxes">
            <div className="why--choose--us--box">
                <div className="why--choose--us--box--inner">
                     <img src={devl_large} alt="" />
                </div>
                <h4>Free Delivery</h4>
                <p>Content here, content here', making it look like readable English. Many desktop publishing packages and</p>
            </div>
            <div className="primary--color why--choose--us--box">
                <div className="why--choose--us--box--inner">
                     <img src={almond_large} alt="" />
                </div>
                <h4>Dry Food </h4>
                <p>Content here, content here', making it look like readable English. Many desktop publishing packages and</p>
            </div>
            <div className="why--choose--us--box">
                <div className="why--choose--us--box--inner">
                     <img src={medal_large} alt="" />
                </div>
                <h4>high quality</h4>
                <p>Content here, content here', making it look like readable English. Many desktop publishing packages and</p>
            </div>
        </div>
        <div className="cta--btn">
            <a className="secondary--btn" href="#">Read More</a>
        </div>
    </div>
  )
}

export default WhyChoose
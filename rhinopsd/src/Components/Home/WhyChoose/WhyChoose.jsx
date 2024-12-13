import React from 'react'
import './WhyChoose.css'
import whychooseus_icon_1 from '../../Assets/whychooseus-icon-1.png'
import whychooseus_icon_2 from '../../Assets/whychooseus-icon-2.png'
import whychooseus_icon_3 from '../../Assets/whychooseus-icon-3.png'

const WhyChoose = () => {
  return (
    <div className='why--choose--us'>
        <div className="bg">
            <div className="container">
                <div className="grid why--choose--us--block">
                    <div className="why--choose--us--title">
                        <div className="pagetitle page--title">
                            <h2>Why Choose Us</h2>
                        </div>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                        <div className="flex space--start why--choose--us--card">
                            <div className="why--chosse--us--card--inner">
                                <img src={whychooseus_icon_1} alt="" />
                                <h4>client satisfaction</h4>
                            </div>
                            <div className="why--chosse--us--card--inner">
                                <img src={whychooseus_icon_2} alt="" />
                                <h4>award</h4>
                            </div>
                            <div className="why--chosse--us--card--inner">
                                <img src={whychooseus_icon_3} alt="" />
                                <h4>Trustable</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    </div>
  )
}

export default WhyChoose
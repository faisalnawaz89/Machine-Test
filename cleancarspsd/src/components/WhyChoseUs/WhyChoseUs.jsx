import React from 'react'
import './WhyChoseUs.css'

const WhyChoseUs = () => {
  return (
    <div className='quality quality-block'>
        <div className="container">
            <div className="pagetitle page--main--title">
                <h2>Why <span>Choose Us?</span></h2>
                <div className="divider"></div>
            </div>

            <div className="why--choose--us--block">
                <div className="grid grid-center why--choose--grid">
                    <div className="why--choose--us--box">
                        <div className="flex flex-gap1">
                            <span>01</span>
                            <h5>Trusted Services</h5>
                        </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The  </p>
                    </div>
                    <div className="primary--color why--choose--us--box">
                        <div className="flex flex-gap1">
                            <span>02</span>
                            <h5>Talented Workers</h5>
                        </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The  </p>
                    </div>
                    <div className="why--choose--us--box">
                        <div className="flex flex-gap1">
                            <span>03</span>
                            <h5>Organic Products </h5>
                        </div>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The  </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WhyChoseUs
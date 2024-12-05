import React from 'react'
import './HomeSlider.css'

const HomeSlider = () => {
  return (
    <div className='homeSlider home-slider'>
        <div className="home--slider--bg">
            <div className="container">
                <div className="grid slider--content--block">
                    <div className="slider--title">
                        <h1>AUTOS &  TRANSPORTATION </h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                        <div className="cta--btn">
                            <a className="primary--btn" href="#">Contact Us</a>
                        </div>
                    </div>
                    <div className="slider--quick--connect">
                        <div className="slider--form--inner">
                            <p>Professional Services  </p>
                            <h3>Get your transport quote </h3>
                            <div className="form--conatiner">
                                <input type="text" placeholder='Location' />
                                <input type="text" placeholder='Destination'/>
                                <input type="email" placeholder='Email' />
                                <input type="tel" placeholder='Telephone' />
                                <div className="cta--btn">
                                     <button type='submit' className='secondary--btn'>Get Now quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeSlider
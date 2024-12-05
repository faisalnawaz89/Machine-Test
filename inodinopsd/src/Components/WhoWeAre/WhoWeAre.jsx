import React from 'react'
import './WhoWeAre.css'

const WhoWeAre = () => {
  return (
    <div className='whoweare who--we--are'>
          <div className="bg">
              <div className="who--we--are--inner">
                  <div className="pagetitle page--title">
                    <h2>who we are ?</h2>
                    <p>DESIGNERS & INNOVATORS</p>
                    <p className='who--we--are--content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                  </div>
                  <div className="cta--btn">
                    <a className="secondary--btn" href="#">Get A Qoute</a>
                  </div>
              </div>
              <div className="overlay"></div>
          </div>
    </div>
  )
}

export default WhoWeAre
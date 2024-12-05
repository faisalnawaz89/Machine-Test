import React from 'react'
import './ShowPlan.css'

const ShowPlan = () => {
  return (
    <div className='showplan'>
      <div className="show--plan--curve--border">
        <div className="show--plan--conatiner">
          <div className="container">
              <div className="pagetitle page--title">
                <h3>Tariffs</h3>
                <h2>Choose your plan</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum, est ac faucibus hendrerit, mauris ante viverra urna, in elementum urna est ut ligula.</p>
              </div>
              <div className="grid space--between plan--boxes">
                  <div className="plan--box">
                    <div className="plan--box--inner">
                        <h4>Easy Surfing </h4>
                        <h5>Internet</h5>
                        <h3>$24.99</h3>
                        <h6>Month</h6>
                        <p>It is a long established f act distracteontent </p>
                    </div>
                    <div className="cta--btn">
                        <a className="primary--btn" href="#">See More</a>
                    </div>
                  </div>
                  <div className="plan--box">
                    <div className="plan--box--inner">
                        <h4>Impression </h4>
                        <h5>TV</h5>
                        <h3>$24.99</h3>
                        <h6>Month</h6>
                        <p>It is a long established f act distracteontent </p>
                    </div>
                    <div className="cta--btn">
                        <a className="primary--btn" href="#">See More</a>
                    </div>
                  </div>
                  <div className="plan--box">
                    <div className="plan--box--inner">
                        <h4>Premium Plan  </h4>
                        <h5>Internet + TV + Phone </h5>
                        <h3>$24.99</h3>
                        <h6>Month</h6>
                        <p>It is a long established f act distracteontent </p>
                    </div>
                    <div className="cta--btn">
                        <a className="primary--btn" href="#">See More</a>
                    </div>
                  </div>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ShowPlan
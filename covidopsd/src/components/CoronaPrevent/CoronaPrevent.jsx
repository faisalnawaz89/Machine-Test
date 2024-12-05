import React from 'react'
import './CoronaPrevent.css'
import mask_icon from '../Assets/mask.png'
import handwash from '../Assets/handwash.png'
import caution from '../Assets/caution.png'

const CoronaPrevent = () => {
  return (
    <div className='coronaprevent corona-pevent'>
        <div className="corona--prevent--heading">
            <h3>How to Protect Yourself</h3>
            <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
        </div>
        
        <div className="covid-prevent-bg bg">
            <div className="flex covid--prevent--card">
                <div className="card--block">
                    <div className="card--block--inner">
                        <img src={mask_icon} alt="" />
                        <h4>Wear Mask</h4>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                    </div>
                    <div className="cta--btn">
                        <a className="btn--theme" href="#">Read More</a>
                    </div>
                </div>
                <div className="card--block">
                    <div className="card--block--inner">
                        <img src={handwash} alt="" />
                        <h4>Wash Your Hands </h4>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                    </div>
                    <div className="cta--btn">
                        <a className="btn--red" href="#">Read More</a>
                    </div>
                </div>
                <div className="card--block">
                    <div className="card--block--inner">
                        <img src={caution} alt="" />
                        <h4>Stay at Home</h4>
                        <p>Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                    </div>
                    <div className="cta--btn">
                        <a className="btn--theme" href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoronaPrevent
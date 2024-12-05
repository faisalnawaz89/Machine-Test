import React from 'react'
import './Achivement.css'

const Achivement = () => {
  return (
    <div className='achivement achivement-block'>
        <div className="container">
            <div className="grid achivement-block-bar">
                <div className="achivement--cell">
                    <h4>7<span>+</span></h4>
                    <p>Year in Business</p>
                </div>
                <div className="achivement--cell">
                    <h4>140<span>+</span></h4>
                    <p>Strong Team</p>
                </div>
                <div className="achivement--cell">
                    <h4>4<span>+</span></h4>
                    <p>Clients across continents</p>
                </div>
                <div className="achivement--cell">
                    <h4>1 millions<span>+</span></h4>
                    <p>People use our product daily</p>
                </div>
                <div className="achivement--cell">
                    <h4>6<span>+</span></h4>
                    <p>Strongest relationship with client</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achivement
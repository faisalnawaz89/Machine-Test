import React from 'react'
import './Journey.css'
import journey_icon from '../../assets/journey-icon.png'
import journey_graph from '../../assets/journey_growth.png'

const Journey = () => {
  return (
    <>
    <div className='journey journey-block'>
        <div className='blank--div'></div>
        <div className="journey--bar">
            <div className="journey-title-bar flex">
                <div className="journey--icon">
                    <img src={journey_icon} alt="" />
                </div>
                <h3>Journey of our Growth</h3>
            </div>
        </div>
    </div>
    <div className="journey-growth">
        <div className="journey--growth--img">
            <img src={journey_graph} alt="" />
            <div className="journey-layer-up">
                <div className="layer content--layer--1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="layer content--layer--1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="layer content--layer--1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
            <div className="journey-layer-down">
                <div className="layer content--layer--1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="layer content--layer--1">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Journey
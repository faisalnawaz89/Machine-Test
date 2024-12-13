import React from 'react'
import './HomeCard.css'
import home_card_1 from '../../Assets/card--icon-1.png'
import home_card_2 from '../../Assets/card--icon-2.png'
import home_card_3 from '../../Assets/card--icon-3.png'

const HomeCard = () => {
  return (
    <div className='homecard home--card'>
        <div className="container">
            <div className="grid space--start home--cards">
                <div className="home--card--inner">
                    <img src={home_card_1} alt="" />
                    <h3>construction services</h3>
                </div>
                <div className="home--card--inner">
                    <img src={home_card_2} alt="" />
                    <h3>RECONSTRUCTION</h3>
                </div>
                <div className="home--card--inner">
                    <img src={home_card_3} alt="" />
                    <h3>ELECTRICAL services</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeCard
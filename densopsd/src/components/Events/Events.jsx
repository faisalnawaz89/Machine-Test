import React from 'react'
import './Events.css'
import event_img_1 from '../Assets/slider-bg.jpg'
import event_img_2 from '../Assets/slider-bg-2.jpg'
import event_img_3 from '../Assets/slider-bg-3.jpg'

const Events = () => {
  return (
    <div className='event event-block'>
        <div className="container">
            <div className="pagetitle main--tilte">
                <h2>LATEST NEWS AND EVENTS</h2>
                <div className="divider"></div>
            </div>
            <div className="grid grid-space-between event--box">
                <div className="event--box--inner">
                    <img src={event_img_1} alt="" />
                    <span className='date-badge'>01 Sep</span>
                    <h4>LIBERALISATION OF AIR CARGO INDUSTRY</h4>
                    <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute </p>
                </div>
                <div className="box--shadow event--box--inner">
                    <img src={event_img_2} alt="" />
                    <span className='date-badge'>02 Sep</span>
                    <h4>NEW WAREHOUSE NOW OPERATIONAL </h4>
                    <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute </p>
                </div>
                <div className="event--box--inner">
                    <img src={event_img_3} alt="" />
                    <span className='date-badge'>03 Sep</span>
                    <h4>New trucks arriving</h4>
                    <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute </p>
                </div>
            </div>
            <div class="cta--btn"><a class="primary--btn" href="#">Read More</a></div>
        </div>
    </div>
  )
}

export default Events
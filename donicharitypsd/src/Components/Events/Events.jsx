import React from 'react'
import './Events.css'
import event_img_1 from '../Assets/event-img-1.jpg'
import event_img_2 from '../Assets/event-img-2.jpg'

const Events = () => {
  return (
    <div className='upcoming--event featured-block'>
        <div className="container">
            <div className="featured--box">
                <div className="pagetitle page--heading">
                    <h2>UPCOMING EVENTS</h2>
                    <p>going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                </div>
                <div className="grid featured--image--grid">
                    <img src={event_img_1} alt="" />
                    <div className="featured--content">
                        <h4>The Internet tend to repeat</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literatureContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                        <div className='flex featured--title'>
                            <h5>Raised: $60,010</h5>
                            <h5>Goal: $70,000 </h5>
                        </div>
                        <div className="flex cta--btn">
                            <a className="primary--btn" href="#">Read More</a>
                            <a className="secondary--btn" href="#">Donate Now</a>
                        </div>
                    </div>
                </div>
                <div className="grid featured--image--grid">
                    <img src={event_img_2} alt="" />
                    <div className="featured--content">
                        <h4>The Internet tend to repeat</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literatureContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature</p>
                        <div className='flex featured--title'>
                            <h5>Raised: $60,010</h5>
                            <h5>Goal: $70,000 </h5>
                        </div>
                        <div className="flex cta--btn">
                            <a className="primary--btn" href="#">Read More</a>
                            <a className="secondary--btn" href="#">Donate Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events
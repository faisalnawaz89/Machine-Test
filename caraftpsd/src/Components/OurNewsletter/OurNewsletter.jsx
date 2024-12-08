import React from 'react'
import './OurNewsletter.css'
import newslatter_bg from '../Assets/newslatter-bg.jpg'

const OurNewsletter = () => {
  return (
    <div className='newslatterbg news--latter'>
        <div className="bg">
            <div className="news--latter--inner--title">
                <h5>Connect to caraft</h5>
                <h3>Join Our Newsletter</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                <div className="newslatter--input">
                    <input type="email" placeholder='Enter your email' />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
    </div>
  )
}

export default OurNewsletter
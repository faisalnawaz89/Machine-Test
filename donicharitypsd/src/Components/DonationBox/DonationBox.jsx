import React from 'react'
import './DonationBox.css'
import volunteer_icon from '../Assets/volunteer.png'
import hand_icon from '../Assets/hand.png'
import money_icon from '../Assets/money-bag.png'

const DonationBox = () => {
  return (
    <div className='donation-box'>
        <div className="container">
            <div className="donation--contact--from">
                <div className="form--field">
                    <h3>Contact For Donation</h3>
                    <div className="grid form--input">
                        <input type="text" placeholder='Your Name' />
                        <input type="email" placeholder='Email' />
                        <input type="phone" placeholder='Phone'/>
                        <div className="cta--btn">
                            <button className='primary--btn'>Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid donation--category--box">
                <div className="donationbox donation--for--voulunteers">
                    <img src={volunteer_icon} alt="" />
                    <h3>VOLUNTEERS </h3>
                    <p>Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                    <a href="#">Join Now</a>
                </div>
                <div className="donationbox donation--for--fundraise">
                    <img src={hand_icon} alt="" />
                    <h3>FUNDRAISE  </h3>
                    <p>Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                    <a href="#">Join Now</a>
                </div>
                <div className="donationbox donation--for--donations">
                    <img src={money_icon} alt="" />
                    <h3>DONATION  </h3>
                    <p>Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                    <a href="#">Join Now</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DonationBox
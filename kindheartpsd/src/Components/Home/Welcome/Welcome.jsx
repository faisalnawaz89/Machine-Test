import React from 'react'
import './Welcome.css'
import hand from '../../Assets/hands.png'
import heart from '../../Assets/heart.png'
import receive from '../../Assets/receive.png'
import scholarship from '../../Assets/scholarship.png'

const Welcome = () => {
  return (
    <div className='welcome welcome--block'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>Welcome to Kind Heart Charity</h2>
            </div>
            <div className="flex space--between welcome--boxes">
                <div className="welcome--box">
                    <div className="welcome--inner">
                        <div className="welcome--inner--img">
                            <img src={hand} alt="" />
                        </div>
                        <div className="page--subtitle"><h4>Become a <span>volunteer</span></h4></div>
                    </div>
                </div>
                <div className="welcome--box">
                    <div className="welcome--inner">
                        <div className="welcome--inner--img">
                            <img src={heart} alt="" />
                        </div>
                        <div className="page--subtitle"><h4>Caring <span>Earth</span></h4></div>
                    </div>
                </div>
                <div className="welcome--box">
                    <div className="welcome--inner">
                        <div className="welcome--inner--img">
                            <img src={receive} alt="" />
                        </div>
                        <div className="page--subtitle"><h4>Make a <span>Donation</span></h4></div>
                    </div>
                </div>
                <div className="welcome--box">
                    <div className="welcome--inner">
                        <div className="welcome--inner--img">
                            <img src={scholarship} alt="" />
                        </div>
                        <div className="page--subtitle"><h4>Scholarship <span>Program</span></h4></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome
import React from 'react'
import './HowToPlay.css'

const HowToPlay = () => {
  return (
    <div className='howtoplay how--to--play'>
        <div className="bg">
        <div className="container">
            <div className="how--to--play--main">
                <div className="pagetitle page--title">
                    <h2>How To Play This Game</h2>
                    <span className='divider'></span>
                </div>
                <div className="grid space--between how--to--play--block">
                    <div className="how--to--play--form">
                        <div className="form--block">
                            <h4>Login Now</h4>
                            <input type="text" placeholder='Username'/>
                            <input type="email" placeholder='Email' />
                            <input type="password" placeholder='Password' />
                            <button>Login</button>
                        </div>
                    </div>
                    <div className="how--to--play--title--inner">
                        <div className="how--to--play--title">
                            <span>01</span> <h4>There are many variations of passages of Lorem Ipsum available, but the majority </h4>
                        </div>
                        <div className="how--to--play--title">
                            <span>02</span> <h4>There are many variations of passages of Lorem Ipsum available, but the majority </h4>
                        </div>
                        <div className="how--to--play--title">
                            <span>03</span> <h4>There are many variations of passages of Lorem Ipsum available, but the majority </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="overlay"></div>
        </div>
    </div>
  )
}

export default HowToPlay
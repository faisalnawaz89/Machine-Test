import React from 'react'
import './EarnMoney.css'
import earn_money_img from '../Assest/earn-money.png'
import flare_car from '../Assest/flare-car.png'
import play_store from '../Assest/play-store-btn.png'
import apple_store from '../Assest/apple-store-btn.png'

const EarnMoney = () => {
  return (
    <div className='earnmoney earn--money'>
        <div className="bg">
             <div className="earn--money--block">
                <div className="pagetitle page--title">
                    <h2>You Can Earn money From Car Spped Game</h2>
                    <span className='divider'></span>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority There are
                    many variations of passages of Lorem Ipsum available, but the majority </p>
                </div>
                <div className="earn--money--image">
                    <img src={earn_money_img} alt="" />
                </div>
                <div className="cta--btn">
                    <a href="#">Play Now</a>
                    <a href="#">Get Coins</a>
                    <a href="#">Exchange</a>
                </div>
             </div>
             <div className="flare--car--block">
                <div className="container">
                    <div className="grid space--between flare--car--inner">
                        <div className="flare--car--title">
                            <div className="pagetitle page--title">
                                <h2>Download From</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority There are
                                many variations of passages of Lorem Ipsum available, but the majority </p>
                            </div>
                            <div className="flex">
                                <img src={play_store} alt="" />
                                <img src={apple_store} alt="" />
                            </div>
                        </div>
                        <div className="flare--car">
                            <img src={flare_car} alt="" />
                        </div>
                    </div>
                </div>
             </div>
            <div className="overlay"></div>
        </div>
    </div>
  )
}

export default EarnMoney
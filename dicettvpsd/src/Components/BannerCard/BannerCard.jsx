import React from 'react'
import './BannerCard.css'
import signal_icon from '../Assets/signal.png'
import television_icon from '../Assets/television.png'
import tv_icon from '../Assets/tv.png'

const BannerCard = () => {
  return (
    <div className='bannercard banner-card'>
        <div className="grid space--center banner--card">
            <div className="card--inner">
                <img src={signal_icon} alt="" />
                <h3>Broadband </h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, m Ipsum, you need to be </p>
            </div>
            <div className="white--bg card--inner">
                <img src={television_icon} alt="" />
                <h3>Satelite TV  </h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, m Ipsum, you need to be </p>
            </div>
            <div className="card--inner">
                <img src={tv_icon} alt="" />
                <h3>Mobility  </h3>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, m Ipsum, you need to be </p>
            </div>
        </div>
    </div>
  )
}

export default BannerCard
import React from 'react'
import './LiveChannel.css'
import about_img from '../Assets/about-img.jpg'

const LiveChannel = () => {
  return (
    <div className='livechannel live-channel'>
        <div className="live--channel--blocks">
            <div className="grid live--channel--block">
                <div className="live--channel--img">
                    <img src={about_img} alt="" />
                </div>
                <div className="live--channel-content">
                    <div className="pagetitle page--title">
                        <h2>Live Sport and TV-shows for best
                        friends</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,</p>
                    </div>
                    <div className="theme cta--btn">
                        <a className="theme--btn" href="#">4K Ultra HD Quality </a>
                        <a className="secondary--btn" href="#">200+ Online Channels</a>
                    </div>
                    <div className="cta--btn">
                        <a className="secondary--btn" href="#">READ MORE</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiveChannel
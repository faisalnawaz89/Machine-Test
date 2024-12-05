import React from 'react'
import './Mission.css'
import about_img_1 from '../Assets/mission-img-1.jpg'
import about_img_2 from '../Assets/mission-img-2.jpg'
import about_img_3 from '../Assets/mission-img-3.jpg'
import about_img_4 from '../Assets/mission-img-4.jpg'
import about_img_5 from '../Assets/mission-img-5.jpg'
import about_img_6 from '../Assets/mission-img-6.jpg'

const Mission = () => {
  return (
    <div className='mission mission-block'>
        <div className="container-fluid">
            <div className="mission--single--rows">
                <div className="pagetitle page--heading">
                    <h2>Mission causes</h2>
                    <p>going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                </div>
                <div className="flex mission--box">
                    <div className="mission--inner mission--box--inner">
                        <img src={about_img_1} alt="" />
                        <div className="mission--inner--content">
                            <h4>whichalteration in some </h4>
                            <p>alteration in some form, by injected humour, or randomised words whichalteration in some form, by injected humour, or randomised words which</p>
                            <div className="flex mission--bg--btn">
                                <div className="cta--btn">
                                    <a className="border--btn" href="#">Read More</a>
                                </div>
                                <div className="cta--btn">
                                    <a className="border--btn" href="#">Donate Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mission--inner">
                        <img src={about_img_2} alt="" />
                    </div>
                </div>
            </div>

            <div className="mission--single--rows">
                <div className="flex mission--box">
                    <div className="mission--inner">
                        <img src={about_img_3} alt="" />
                    </div>
                    <div className="mission--inner">
                        <img src={about_img_4} alt="" />
                    </div>
                </div>
            </div>

            <div className="mission--single--rows">
                <div className="flex mission--box">
                    <div className="mission--inner">
                        <img src={about_img_5} alt="" />
                    </div>
                    <div className="mission--inner">
                        <img src={about_img_6} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Mission
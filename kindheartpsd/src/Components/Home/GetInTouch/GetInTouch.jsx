import React from 'react'
import './GetInTouch.css'
import info_img from '../../Assets/customer3.jpg'

const GetInTouch = () => {
  return (
    <div className='getintouch'>
        <div className="container">
            <div className="grid space--center--top get--in--touch">
                <div className="get--in--touch--block">
                    <div className="pagetitle page--title">
                        <h2>Get in touch</h2>
                    </div>
                    <div className="flex space--start--center info--img">
                        <img src={info_img} alt="" />
                        <div className="info--img--title">
                            <p>Clara Barton</p>
                            <h5>HR & Office Manager</h5>
                        </div>
                    </div>
                    <div className="contact--info">
                        <div className="page--subtitle">
                            <h4>Contact Infomation</h4>
                            <div className="flex space--start--center info--details">
                                <box-icon name='location-plus' color='#717275' ></box-icon>
                                <a href="#">Akershusstranda 20, 0150 Oslo, Norway</a>
                            </div>
                            <div className="flex space--start--center info--details">
                                <box-icon name='phone' color='#717275' ></box-icon>
                                <a href="#">120-240-9600</a>
                            </div>
                            <div className="flex space--start--center info--details">
                                <box-icon name='envelope' color='#717275'></box-icon>
                                <a href="#">donate@charity.org</a>
                            </div>
                            <div className="cta--btn">
                                <a className="secondary--btn" href="#">Get Direction</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="get--in--touch--form">
                    <div className="pagetitle page--title">
                        <h2>Contact form</h2>
                        <p>Or, you can just send an email: info@charity.org</p>
                    </div>
                    <div className="get--in--touch--formfield">
                        <div className="flex space--start form--input">
                            <input type="text" placeholder='First Name' />
                            <input type="text" placeholder='Last Name' />
                        </div>
                        <input type="email" placeholder='johndoe@gmail.com' />
                        <textarea rows={3} placeholder='What we can help you?'></textarea>
                        <div className="cta--btn">
                            <button className='secondary--btn'>Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GetInTouch
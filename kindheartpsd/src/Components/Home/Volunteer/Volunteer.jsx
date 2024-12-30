import React from 'react'
import './Volunteer.css'
import volunteer_img from '../../Assets/volunteer-img.jpg'

const Volunteer = () => {
  return (
    <div className='volunteer volunteer--block'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>Volunteer</h2>
            </div>
            <div className="grid space--between volunteer--block--inner">
                <div className="volunteer--form">
                    <div className="volunteer--form--container">
                        <h3>Become a volunteer today</h3>
                        <div className="form--field">
                            <div className="flex space--between form--input">
                                <input type="text" placeholder='John Doe' />
                                <input type="email" placeholder='johndoe@gmail.com' />
                            </div>
                            <div className="flex space--between form--input">
                                <input type="text" placeholder='subject' />
                                <div className="flex space--between input--layer">
                                    <input type="email" placeholder='Upload your CV' />
                                    <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}>
                                        <path d="M13 19v-4h3l-4-5-4 5h3v4z" />
                                        <path d="M7 19h2v-2H7c-1.654 0-3-1.346-3-3 0-1.404 1.199-2.756 2.673-3.015l.581-.102.192-.558C8.149 8.274 9.895 7 12 7c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-3v2h3c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.056-3.888C18.507 7.67 15.56 5 12 5 9.244 5 6.85 6.611 5.757 9.15 3.609 9.792 2 11.82 2 14c0 2.757 2.243 5 5 5z" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <textarea rows={3} placeholder='comments(optional)'></textarea>
                            <div className="cta--btn">
                                <button className='secondary--btn'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="volunteer--img">
                    <img src={volunteer_img} alt="" />
                    <div className="volunteer--title">
                        <div className="page--subtitle">
                            <h4>About Volunteering</h4>
                            <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg--props--round primary--color--props"></div>
    </div>
  )
}

export default Volunteer
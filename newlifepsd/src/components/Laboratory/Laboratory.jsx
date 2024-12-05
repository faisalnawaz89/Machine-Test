import React from 'react'
import './Laboratory.css'
import lab_icon_1 from '../Assets/lab-icon-1.png'
import lab_icon_2 from '../Assets/lab-icon-2.png'
import lab_icon_3 from '../Assets/lab-icon-3.png'
import doc_png from '../Assets/doctor_bg.png'

const Laboratory = () => {
  return (
    <div className='laboratory laboratory-block'>
        <div className="grid laboratory--info--boxes">
            <div className="laboratory--info--box">
                <img src={lab_icon_1} alt="" />
                <h4>Emergency Cases </h4>
                <h5>1-800-400-5768 </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  </p>
            </div>
            <div className="laboratory--info--box primary--color">
                <img src={lab_icon_2} alt="" />
                <h4>Doctors timetable </h4>
                <h5>10:00 AM to 05:00 PM</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  </p>
            </div>
            <div className="laboratory--info--box">
                <img src={lab_icon_3} alt="" />
                <h4>Opening hours  </h4>
                <h5>09:00 AM to 05:00 PM </h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  </p>
            </div>
        </div>

        <div className="laboratory--doc">
            <div className="grid laboratory--doc--grid">
                <div className="laboratory--doc--title">
                    <div className="patient--care--title">
                        <div className="page--main--title">
                            <h4>Best Laboratory</h4>
                            <h3>Tests Available</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur </p>
                            <div className="cta--btn">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="laboratory--doc--img">
                    <img src={doc_png} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Laboratory
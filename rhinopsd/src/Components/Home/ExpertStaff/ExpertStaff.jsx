import React from 'react'
import './ExpertStaff.css'
import SocialIcons from '../../Header/SocialIcons'
import staff_img_1 from '../../Assets/staff-img-1.jpg'
import staff_img_2 from '../../Assets/staff-img-2.jpg'
import staff_img_3 from '../../Assets/staff-img-3.jpg'
import staff_img_4 from '../../Assets/staff-img-4.jpg'

const ExpertStaff = () => {
  return (
    <div className='expertstaff expert--staff'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>Our Expert Staff</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the </p>
            </div>
            <div className="grid space--between staff--card">
                <div className="staff--card--inner">
                    <img src={staff_img_1} alt="" />
                    <div className="staff--info--panel">
                        <h4>Muthu Swami</h4>
                        <SocialIcons iconColor="#fd9801"/>
                    </div>
                </div>
                <div className="staff--card--inner">
                    <img src={staff_img_2} alt="" />
                    <div className="staff--info--panel">
                        <h4>Jessica Alb</h4>
                        <SocialIcons iconColor="#fd9801"/>
                    </div>
                </div>
                <div className="staff--card--inner">
                    <img src={staff_img_3} alt="" />
                    <div className="staff--info--panel">
                        <h4>Alex Joe</h4>
                        <SocialIcons iconColor="#fd9801"/>
                    </div>
                </div>
                <div className="staff--card--inner">
                    <img src={staff_img_4} alt="" />
                    <div className="staff--info--panel">
                        <h4>Shoun Tu</h4>
                        <SocialIcons iconColor="#fd9801"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="cta--btn">
            <a href="#">Read More</a>
        </div>
    </div>
  )
}

export default ExpertStaff
import React from 'react'
import './Appointment.css'

const Appointment = () => {
  return (
    <div className='appointment appointment-block'>
        <div className="grid appointment--grid">
            <div className="white--text page--main--title">
                <h4>Need a doctor for check-Up</h4>
                <h3>Make An Appointment & You’re Done</h3>
            </div>
            <div className="cta--btn">
                <a className="dark--btn" href="#">Make An Appointment</a>
            </div>
        </div>
    </div>
  )
}

export default Appointment
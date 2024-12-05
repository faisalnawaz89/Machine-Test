import React from 'react'
import './DoctorBlock.css'
import doctor_img from '../assets/doctor-img.png'

const DoctorBlock = () => {
  return (
    <div className="doctorblok doctor-block">
        <div className='container-fluid'>
            <div className="grid doctor--block--grid">
                <div className="blank"></div>
                <div className="doctor--block-content">
                    <h3>Joint surgeon, Dr. John Hahn believes he has discovered the secret. And he’s got <strong>hundreds of thousands of followers,</strong> some even in their nineties, to prove it.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem sem, mollis sed viverra id, cursus at dolor. Maecenas ac semper sem, in lobortis est. Cras pharetra vitae tellus quis commodo. Phasellus semper viverra purus, vel feugiat nunc venenatis et. Suspendisse nisi arcu, tristique dictum sollicitudin vel, facilisis at urna. Cras a vulputate risus. Nam venenatis enim et libero molestie tincidunt. 
                    nunc leo, eget suscipit ex semper quis. Quisque mollis ornare consectetur. Cras facilisis sem erat, et facilisis ante dignissim in. Suspendisse ex libero, pellentesque ac tincidunt id, posuere vitae lorem. Aenean vitae tortor augue. Maecenas convallis sodales nulla vitae auctor. Mauris tincidunt auctor ante. 
                    nunc leo, eget suscipit ex semper quis. Quisque mollis ornare consectetur. Cras facilisis sem erat, et facilisis ante dignissim in. Suspendisse ex libero,
                    </p>
                </div>
                <div className="doctor--block--images">
                    <div className="doctor--bg--img">
                        <div className="doctor--img">
                            <img src={doctor_img} alt="" />
                            <p className='doctor--qoute'> 
                            <span></span> nunc leo, eget suscipit ex semper quis. Quisque mollis ornare consectetur. Cras facilisis sem erat, et facilisis ante dignissim in. Suspendisse ex libero, pellentesque ac tincidunt id,
                            <div className="doctor--name">
                                <h4>Dr. John Hahn</h4>
                                <p> DPM, ND, America’s <br /> Joint Doctor</p>
                            </div>
                            </p>
                            
                        </div>
                    </div>
                    <div className="outline-border"></div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default DoctorBlock
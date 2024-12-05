import React from 'react'
import './DisplayCard.css'
import corona_img from '../Assets/covidpng.png'

const DisplayCard = () => {
  return (
    <div className='card card--block'>
        <div className="grid card-grid">
            <div className="card--content">
                <h2>About Us</h2>
                <div className="divider"></div>
                <p>English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for</p>
                <div className="cta--btn">
                    <a className="btn--theme" href="#">Read More</a>
                </div>
            </div>
            <div className="card-img">
                <img className="big--covid--img" src={corona_img} alt="" />
                <span className='small--covid--img'></span>
            </div>
        </div>
    </div>
  )
}

export default DisplayCard
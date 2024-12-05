import React from 'react'
import './CovidPoster.css'
import covid_poster from '../Assets/covid-poster.png'

const CovidPoster = () => {
  return (
    <div className='covidposter covid-poster'>
        <div className="grid covid--poster--grid">
            <div className="poster--img">
                <img src={covid_poster} alt="" />
            </div>
            <div className="covid--poster--content">
                <h3>Coronavirus <br /> what it is?</h3>
                <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                <div className="cta--btn">
                    <a className="btn--theme" href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CovidPoster
import React from 'react'
import './InfoLabel.css'

const InfoLabel = () => {
  return (
    <div className='infolabel info--label'>
        <div className="bg--props--round primary--color--props"></div>
        <div className="container">
            <div className="flex space--center info--label--block">
                <div className="info--label--title">
                    <div className="pagetitle page--title">
                        <h2>Make an impact. <br />
                        Save lives.</h2>
                    </div>
                </div>
                <div className="info--label--btns">
                    <div className="cta--btn">
                        <a className="default--btn" href="#">Make a donation</a>
                        <a className="secondary--btn" href="#">Become a volunteer</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="bg--props--circle secondary--color--props"></div>
    </div>
  )
}

export default InfoLabel
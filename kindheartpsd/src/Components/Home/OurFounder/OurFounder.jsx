import React from 'react'
import './OurFounder.css'
import SocialMedia from '../../Header/SocialMedia'
import our_founder from '../../Assets/our-founder.jpg'

const OurFounder = () => {
  return (
    <div className='ourfounder our--founder'>
        <div className="container">
            <div className="custom--container">
                <div className="grid space--between founder--block">
                    <div className="founder--img">
                        <img src={our_founder} alt="" />
                    </div>
                    <div className="founder--title">
                        <div className="pagetitle page--title">
                            <h2>Sandy Chan</h2>
                            <span>Co-Founding Partner</span>
                        </div>
                        <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based</p>
                        <p>You are not allowed to redistribute this template ZIP file on any other template collection website. Please contact TemplateMo for more information.</p>
                        <div className='socialmedia social--media'>
                            <SocialMedia IconsColor='whiteIcons' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurFounder
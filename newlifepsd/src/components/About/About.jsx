import React from 'react'
import './About.css'
import about_img from '../Assets/about_img.png'

const About = () => {
  return (
    <div className='about about--block'>
        <div className="grid about--grid">
            <div className="about--title">
                <div className="page--main--title">
                    <h4>about</h4>
                    <h3>The Highest provide health care</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposedIt is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed</p>
                    <div className="cta--btn">
                        <a href="#">Read More</a>
                    </div>
                </div>
            </div>
            <div className="about--image">
                <div className="about--image--inner">
                    <img src={about_img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
import React from 'react'
import './About.css'
import almond_bg from '../Assets/almond_bg.jpg'

const About = () => {
  return (
    <div className='about about-block'>
        <div className="bg">
            <div className="pagetitle page--title">
                <h2>About Foods</h2>
                <div className="divider"></div>
                <p>when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editorswhen looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors</p>
                <div className="cta--btn">
                    <a className="primary--btn" href="#">Read More</a>
                </div>
                
            </div>
            <div className="overlay"></div>
        </div>
    </div>
  )
}

export default About
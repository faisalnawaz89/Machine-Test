import React from 'react'
import './About.css'
import about_img1 from '../assets/about-img-1.jpg'
import about_img2 from '../assets/about-img-2.jpg'
import about_img3 from '../assets/about-img-3.jpg'
import about_img4 from '../assets/about-img-4.jpg'


const About = () => {
  return (
    <div className='about about-block'>
        <div className="container">
            <div className="grid about--grid">
                <div className="flex about--collage-images">
                    <div className="img-cell"><img src={about_img1} alt="" /></div>
                    <div className="img-cell"><img src={about_img2} alt="" /></div>
                    <div className="img-cell"><img src={about_img3} alt="" /></div>
                    <div className="img-cell"><img src={about_img4} alt="" /></div>
                </div>
                <div className="about--content">
                    <h2>Doctors’ Secret  to Living Ache-Free  and Mobile for Life…</h2>
                    <h3>Feed Your Joints Daily!</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem sem, mollis sed viverra id, cursus at dolor. Maecenas ac semper sem, in lobortis est. Cras pharetra vitae tellus quis commodo. Phasellus semper viverra purus, vel feugiat nunc venenatis et. Suspendisse nisi arcu, tristique dictum sollicitudin vel, facilisis at urna. Cras a vulputate risus. Nam venenatis.</p>
                    <button className='btn about-btn'>Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
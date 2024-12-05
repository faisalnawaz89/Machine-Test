import React from 'react'
import './Featured.css'
import featured_img from '../Assets/featured-img.jpg'

const Featured = () => {
  return (
    <div className='featured featured-block'>
        <div className="container">
            <div className="featured--box">
                <div className="pagetitle page--heading">
                    <h2>FEATURED CAUSE </h2>
                    <p>going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                </div>
                <div className="grid featured--image--grid">
                    <img src={featured_img} alt="" />
                    <div className="featured--content">
                        <h4>GIVE EDUCATION</h4>
                        <p>variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by  injected humour, or randomised variations of passages of Lorem Ipsum  available, but the majority have suffered alteration in some form, by injected humour, or randomised </p>
                        <div className='flex featured--title'>
                            <h5>Raised: $60,010</h5>
                            <h5>Goal: $70,000 </h5>
                        </div>
                        <div className="flex cta--btn">
                            <a className="primary--btn" href="#">Read More</a>
                            <a className="secondary--btn" href="#">Donate Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured
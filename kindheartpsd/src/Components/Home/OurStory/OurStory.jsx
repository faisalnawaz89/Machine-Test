import React from 'react'
import './OurStory.css'
import group_people from '../../Assets/people-group.jpg'

const OurStory = () => {
  return (
    <div className='ourstory our--story'>
        <div className="container">
            <div className="our--story--block">
                <div className="grid our--story--block--canvas">
                    <div className="our--story--block--image">
                         <img src={group_people} alt="" />
                    </div>
                    <div className="our--story--group--title">
                        <div className="our--story--title">
                            <div className="pagetitle page--title"><h2>Our Story</h2></div>
                            <div className="page--subtitle"><h4>Kind Heart Charity, Non-Profit Organization</h4></div>
                            <p>This is a Bootstrap 5.2.2 CSS template for charity organization websites. You can feel free to use it. Please tell your friends about TemplateMo website. Thank you. HTML CSS files updated on 20 Oct 2022.</p>
                        </div>
                        <div className="grid space--start count--down--inner">
                            <div className="our--misiion">
                            <div className="page--subtitle"><h4>Our Mission</h4></div>
                                <p>Sed leo nisl, posuere at molestie ac, suscipit auctor quis metus</p>
                                <div className="flex space--center--start cross--check">
                                    <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}>
                                        <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
                                    </svg>
                                    </span>
                                    <h5>Charity Theme</h5>
                                </div>
                                <div className="flex space--center--start cross--check">
                                    <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={24}
                                        height={24}
                                        viewBox="0 0 24 24"
                                        style={{ fill: "rgba(0, 0, 0, 1)", transform: "", msfilter: "" }}>
                                        <path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z" />
                                    </svg>
                                    </span>
                                    <h5>Semantic HTML</h5>
                                </div>
                            </div>
                            <div className="count--down">
                                <h2 className='big--digit'>2009 <span>Founded</span></h2>
                                <h2 className='big--digit'>120B <span>Donations</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurStory
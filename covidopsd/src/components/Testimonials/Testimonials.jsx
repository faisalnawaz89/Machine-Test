import React from 'react'
import './Testimonials.css'
import customer1 from '../Assets/customer1.jpg'
import customer2 from '../Assets/customer2.jpg'

const Testimonials = () => {
  return (
    <div className='testimonials testimonilas-block'>
        <div className="corona--prevent--heading">
            <h3>What doctors say..</h3>
        </div>
        <div className="grid testimonials">
            <div className="testimonial--article">
                <div className="testimonial--inner">
                    <img src={customer1} alt="" />
                    <h5>Dr.Golap den</h5>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                    <span className='double--qoute--svg'>
                    <svg
                        height="32px"
                        width="32px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32"
                        xmlSpace="preserve"
                        >
                        <g>
                            <g id="right_x5F_quote">
                            <g>
                                <path
                                style={{ fill: "#030104" }}
                                d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"
                                />
                                <path
                                style={{ fill: "#030104" }}
                                d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"
                                />
                            </g>
                            </g>
                        </g>
                    </svg>
                    </span>
                </div>
            </div>
            <div className="testimonial--article spyke--bg">
                <div className="testimonial--inner">
                    <img src={customer2} alt="" />
                    <h5>Dr.Golap den</h5>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                    <span className='double--qoute--svg'>
                    <svg
                        height="32px"
                        width="32px"
                        version="1.1"
                        id="Capa_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 32 32"
                        xmlSpace="preserve"
                        >
                        <g>
                            <g id="right_x5F_quote">
                            <g>
                                <path
                                style={{ fill: "#030104" }}
                                d="M0,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H0z"
                                />
                                <path
                                style={{ fill: "#030104" }}
                                d="M20,4v12h8c0,4.41-3.586,8-8,8v4c6.617,0,12-5.383,12-12V4H20z"
                                />
                            </g>
                            </g>
                        </g>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
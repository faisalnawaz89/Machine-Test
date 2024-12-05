import React from 'react'
import './OurConsept.css'
import our_consept_img_1 from '../Assets/our_consept_img_1.jpg'
import our_consept_img_2 from '../Assets/our_consept_img_2.jpg'

const OurConsept = () => {
  return (
    <div className='ourconsept our--consept'>
        <div className="container">
            <div className="pagetite page--title">
              <h2>OUR CONCEPT</h2>
              <p>There are many variations of passages of Lorem Ipsum </p>
            </div>
            <div className="grid space--between our--consept--block">
                <div className="our--consept--inner">
                    <div className="search--overlay">
                      <img src={our_consept_img_1} alt="" />
                        <span className='search_icon'>
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                              viewBox="0 0 24 24"
                              style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msfilter: "" }}
                            >
                              <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                            </svg>
                        </span>
                    </div>
                    <h4>tempor incididunt ut labore et dolore</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                </div>
                <div className="our--consept--inner">
                    <img src={our_consept_img_2} alt="" />
                    <h4>tempor incididunt ut labore et dolore</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurConsept
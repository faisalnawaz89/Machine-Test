import React from 'react'
import './HeroBanner.css'

const HeroBanner = () => {
  return (
    <div className='herobanner hero--banner'>
        <div className="bg">
          <div className="overlay"></div>
          <div className="container">
              <div className="grid hero--baneer--container">
                  <div className="hero--banner--title">
                      <h3>Are you looking for your dream job?</h3>
                      <h1>Online Platform. <br /> Best Job portal</h1>
                      <div className="cta--btn">
                          <a className="border--btn" href="#">Browse Categories</a>
                      </div>
                  </div>
                  <div className="hero--slider--form">
                      <div className="hero--slider--form--container">
                          <h2>Search your dream job</h2>
                          <div className="flex input--form--container">
                              <div className="input--inner">
                                  <span className='user--icon'>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      style={{ fill: "rgba(111, 108, 108, 1)", transform: "", msfilter: "" }}>
                                      <path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z" />
                                    </svg>
                                  </span>
                                  <input type="text" placeholder='Job Title' />
                              </div>
                              <div className="input--inner">
                                  <span className='location--icon'>
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={24}
                                      height={24}
                                      viewBox="0 0 24 24"
                                      style={{ fill: "rgba(111, 108, 108, 1)", transform: "", msfilter: "" }}>
                                      <path d="M11.42 21.815a1.004 1.004 0 0 0 1.16 0C12.884 21.598 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.996c-.029 6.444 7.116 11.602 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.004.021 4.438-4.388 8.423-6 9.731-1.611-1.308-6.021-5.293-6-9.735 0-3.309 2.691-6 6-6z" />
                                      <path d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3z" />
                                    </svg>
                                  </span>
                                  <input type="text" placeholder='Location' />
                              </div>
                          </div>
                          <div className="cta--btn">
                            <button className='form--btn'>Find a job</button>
                          </div>
                          <div className="flex form--tags">
                              <h4>Popular keywords:</h4>
                              <div className="flex keyword--tag">
                                  <span>Web design</span>
                                  <span>Marketing</span>
                                  <span>Customer support</span>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default HeroBanner
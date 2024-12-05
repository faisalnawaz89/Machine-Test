import React from 'react'
import './LatestNews.css'
import latest_img_1 from '../Assets/latest-news-img-1.jpg'
import latest_img_2 from '../Assets/latest-news-img-2.jpg'

const LatestNews = () => {
  return (
    <div className='latestnews latest-news'>
        <div className="pagetitle page--title">
            <h2>Latest News</h2>
            <div className="divider"></div>
        </div>
        <div className="latest--news--block">
            <div className="grid latest--news--box">
                <img src={latest_img_1} alt="" />
                <div className="latest--news--title">
                    <h4>Khajur Benifits </h4>
                    <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                    <div className="cta--btn">
                        <a className="primary--btn" href="#">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <div className="latest--news--block">
            <div className="grid latest--news--box">
                <div className="latest--news--title">
                    <h4>Kissmiss Benifits </h4>
                    <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla</p>
                    <div className="cta--btn">
                        <a className="primary--btn" href="#">Read More</a>
                    </div>
                </div>
                <img src={latest_img_2} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LatestNews
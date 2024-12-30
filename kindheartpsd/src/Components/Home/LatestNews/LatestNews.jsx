import React from 'react'
import './LatestNews.css'
import news_img_1 from '../../Assets/news-img-1.jpg'
import news_img_2 from '../../Assets/news-img-2.jpg'
import news_img_3 from '../../Assets/news-img-3.jpg'
import news_img_4 from '../../Assets/news-img-4.jpg'
import news_img_5 from '../../Assets/news-img-5.jpg'


const LatestNews = () => {
  return (
    <div className='latestnews latest--news'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>Latest News</h2>
            </div>
            <div className="grid space--start latest--news--block">
                <div className="lates--news--posts">
                    <div className="news--feed">
                        <div className="news--main--image">
                            <img src={news_img_1} alt="" />
                            <div className="flex space--start--center category--tags">
                                <a href="#">Lifestyle,</a>
                                <a href="#">Clothing Donation</a>
                            </div>
                        </div>
                        <div className="flex space--between--center news--published--info">
                            <div className="flex space--satrt--center published--dates">
                                <box-icon name="calendar" style={{fill:'rgb(113 114 117)'}}></box-icon>
                                <p>October 12, 2036</p>
                            </div>
                            <div className="flex space--satrt--center published--dates">
                                <box-icon name="user" style={{fill:'rgb(113 114 117)'}}></box-icon>
                                <p>By Admin</p>
                            </div>
                            <div className="flex space--satrt--center published--dates">
                                <box-icon name='comment-dots' style={{fill:'rgb(113 114 117)'}}></box-icon>
                                <p>32 Comments</p>
                            </div>
                        </div>
                        <div className="page--subtitle">
                            <h4>Clothing donation to urban area</h4>
                            <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito Professional charity theme based on Bootstrap</p>
                        </div>
                    </div>

                    <div className="news--feed">
                        <div className="news--main--image">
                            <img src={news_img_2} alt="" />
                            <div className="flex space--start--center category--tags">
                                <a href="#">Food,</a>
                                <a href="#">Donating,</a>
                                <a href="#">Caring</a>
                            </div>
                        </div>
                        <div className="flex space--between--center news--published--info">
                            <div className="flex space--satrt--center published--dates">
                                <box-icon name="calendar" style={{fill:'rgb(113 114 117)'}}></box-icon>
                                <p>October 20, 2036</p>
                            </div>
                            <div className="flex space--satrt--center published--dates">
                                <box-icon name="user" style={{fill:'rgb(113 114 117)'}}></box-icon>
                                <p>By Admin</p>
                            </div>
                            <div className="flex space--satrt--center published--dates">
                                <box-icon name='comment-dots' style={{fill:'rgb(113 114 117)'}}></box-icon>
                                <p>35 Comments</p>
                            </div>
                        </div>
                        <div className="page--subtitle">
                            <h4>Food donation area</h4>
                            <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus elementum, tempor risus vel, condimentum orci</p>
                        </div>
                    </div>
                </div>
                <div className="news--filter">
                    <div className="serach--input">
                        <input type="search" placeholder='Search' />
                        <box-icon name="search" style={{fill:'rgb(113 114 117)', cursor:'pointer'}}></box-icon>
                    </div>

                    <div className="recent--posts">
                        <div className="news--feed--block">
                            <div className="page--subtitle post--title">
                                <h4>Recent news</h4>
                            </div>
                            <div className="flex space--start recent--thumb">
                                <div className="news--post-thumb">
                                    <img src={news_img_3} alt="" />
                                </div>
                                <div className="news--feed--info">
                                    <div className="page--subtitle">
                                        <h4>Food donation area</h4>
                                    </div>
                                    <div className="flex space--satrt--center published--dates">
                                        <box-icon name="calendar" style={{fill:'rgb(113 114 117)'}}></box-icon>
                                        <p>October 12, 2036</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex space--start recent--thumb">
                                <div className="news--post-thumb">
                                    <img src={news_img_4} alt="" />
                                </div>
                                <div className="news--feed--info">
                                    <div className="page--subtitle">
                                        <h4>Volunteering Clean</h4>
                                    </div>
                                    <div className="flex space--satrt--center published--dates">
                                        <box-icon name="calendar" style={{fill:'rgb(113 114 117)'}}></box-icon>
                                        <p>October 24, 2036</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex space--start recent--thumb">
                                <div className="news--post-thumb">
                                    <img src={news_img_5} alt="" />
                                </div>
                                <div className="news--feed--info">
                                    <div className="page--subtitle">
                                        <h4>Educational books</h4>
                                    </div>
                                    <div className="flex space--satrt--center published--dates">
                                        <box-icon name="calendar" style={{fill:'rgb(113 114 117)'}}></box-icon>
                                        <p>October 31, 2036</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="recent--posts">
                        <div className="page--subtitle post--title">
                            <h4>Categories</h4>
                        </div>
                        <div className="category--tags--number">
                            <a href="#">Drinking water <span>20</span></a>
                            <a href="#">Food Donation  <span>30</span></a>
                            <a href="#">Children Education <span>10</span></a>
                            <a href="#">Poverty Development  <span>15</span></a>
                            <a href="#">Clothing Donation <span>20</span></a>
                        </div>
                    </div>

                    <div className="recent--posts">
                        <div className="page--subtitle post--title">
                            <h4>Tags</h4>
                        </div>
                        <div className="category--tags--number tags--badge">
                            <a href="#">Donation</a>
                            <a href="#">Clothing</a>
                            <a href="#">Food</a>
                            <a href="#">Children</a>
                            <a href="#">Education</a>
                            <a href="#">Poverty</a>
                            <a href="#">Clean Water</a>
                        </div>
                    </div>

                    <div className="recent--posts newslatter--form">
                        <div className="page--subtitle post--title">
                            <h4>Newsletter Form</h4>
                        </div>
                        <div className="news--letter--input">
                            <input type="email" placeholder='Email Address' required/>
                            <div className="cta--btn">
                                <button className='secondary--btn'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LatestNews
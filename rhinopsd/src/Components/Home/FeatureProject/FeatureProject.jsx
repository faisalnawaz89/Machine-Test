import React from 'react'
import './FeatureProject.css'
import feature_img_1 from '../../Assets/feature-img-1.jpg'
import feature_img_2 from '../../Assets/feature-img-2.jpg'
import feature_img_3 from '../../Assets/feature-img-3.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import left_arrow from '../../Assets/left-arrow.png'
import right_arrow from '../../Assets/right-arrow.png'

const FeatureProject = () => {
  return (
    <div className='featureproject feature--project'>
        <div className="custom--container">
            <div className="pagetitle page--title">
                <h2>Our Features Projects</h2>
                <p>It is a long established fact that a reader will be distracted by the readable</p>
            </div>

            <div className="feature--card">
                <div className="feature--card--inner">
                    <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    modules={[Navigation, Autoplay]}
                    autoplay={{delay:3000, disableOnInteraction:false}}
                    navigation={{prevEl:'.feature-nav-left', nextEl:'.fetaure-nav-right'}}
                    breakpoints={{640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}}>
                        <SwiperSlide>
                            <div className="feature--card--bg">
                                <img src={feature_img_1} alt="" />
                                <div className="feature--card--hover--title">
                                    <h3>Reader will be distracted by the readable</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feature--card--bg">
                                <img src={feature_img_2} alt="" />
                                <div className="feature--card--hover--title">
                                    <h3>Reader will be distracted by the readable</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feature--card--bg">
                                <img src={feature_img_3} alt="" />
                                <div className="feature--card--hover--title">
                                    <h3>Reader will be distracted by the readable</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feature--card--bg">
                                <img src={feature_img_1} alt="" />
                                <div className="feature--card--hover--title">
                                    <h3>Reader will be distracted by the readable</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <div className="feature--arrow">
                            <div className="feature-nav-left"><img src={left_arrow} alt="" /></div>
                            <div className="feature-nav-right"><img src={right_arrow} alt="" /></div>
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeatureProject
import React from 'react'
import './HomeSlider.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import left_arrow from '../../Assets/left-arrow.png'
import right_arrow from '../../Assets/right-arrow.png'

const HomeSlider = () => {
  return (
    <div className='homeslider home--slider'>
        <Swiper
            slidesPerView={1}
            autoplay={{delay:3000, disableOnInteraction:false}}
            modules={[Navigation, Autoplay]}
            navigation={{prevEl:'.custom-nav-left', nextEl:'.custom-nav-right'}}>
        <SwiperSlide>
            <div className="bg">
                <div className="slider--container">
                    <div className="container">
                        <div className="slider--title">
                            <h1>We Are Builders</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority 
                            There are many variations of passages of</p>
                            <div className="cta--btn">
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="bg">
                <div className="slider--container">
                    <div className="container">
                        <div className="slider--title">
                            <h1>We Are Builders</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority 
                            There are many variations of passages of</p>
                            <div className="cta--btn">
                                <a href="#">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overlay"></div>
            </div>
        </SwiperSlide>
        <div className="navigation--arrow">
            <div className="custom-nav-left"><img src={left_arrow} alt="" /></div>
            <div className="custom-nav-right"><img src={right_arrow} alt="" /></div>
        </div>
        </Swiper>
    </div>
  )
}

export default HomeSlider
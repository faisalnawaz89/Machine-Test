import React from 'react'
import './HeroSlider.css'
import slider_img_1 from '../../Assets/slider-img-1.png'
import slider_img_2 from '../../Assets/slider-img-2.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import left_arrow from '../../Assets/left-arrow.png'
import right_arrow from '../../Assets/right-arrow.png'

const HeroSlider = () => {
  return (
    <div className='heroslider hero--slider'>
        <div className="container">
            <div className="slider--container">
                <Swiper 
                autoplay={{delay:4000, disableOnInteraction:false}}
                modules={[Navigation]}
                navigation={{prevEl:'.nav-left', nextEl:'.nav-right'}}
                >
                    <SwiperSlide>
                    <div className="grid space--center slider--inner">
                        <div className="first--slider--image">
                            <img src={slider_img_1} alt="" />
                        </div>
                        <div className="slider--title">
                            <h1>Big Sale Offer</h1>
                            <div className="flex cta--btn">
                                <a className="primary--btn" href="#">Buy Now</a>
                                <a className="secondary--btn" href="#">Contact Now</a>
                            </div>
                        </div>
                        <div className="last--slider--image">
                            <img src={slider_img_2} alt="" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="grid space--center slider--inner">
                        <div className="first--slider--image">
                            <img src={slider_img_1} alt="" />
                        </div>
                        <div className="slider--title">
                            <h1>Big Sale Offer</h1>
                            <div className="flex cta--btn">
                                <a className="primary--btn" href="#">Buy Now</a>
                                <a className="secondary--btn" href="#">Contact Now</a>
                            </div>
                        </div>
                        <div className="last--slider--image">
                            <img src={slider_img_2} alt="" />
                        </div>
                    </div>
                    </SwiperSlide>
                    <div className="navigation--arrow">
                        <div className="nav-left"><img src={left_arrow} alt="" /></div>
                        <div className="nav-right"><img src={right_arrow} alt="" /></div>
                    </div>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default HeroSlider
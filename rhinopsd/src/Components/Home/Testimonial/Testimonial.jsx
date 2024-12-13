import React from 'react'
import './Testimonial.css'
import client_img from '../../Assets/client-img-1.jpg'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import left_arrow from '../../Assets/left-arrow.png'
import right_arrow from '../../Assets/right-arrow.png'

const Testimonial = () => {
  return (
    <div className='testimonials testimonials--block'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>Clients Words</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </p>
            </div>
            <div className="testimonials--container">
                <Swiper
                modules={[Navigation]}
                autoplay={{delay:3000, disableOnInteraction:false}}
                navigation={{prevEl:'.testimonial-nav-left', nextEl:'.testimonial-nav-right'}}>
                    <SwiperSlide>
                        <div className="testimonials--inner">
                            <div className="testimonials--header">
                                <div className="client--img">
                                    <img src={client_img} alt="" />
                                </div>
                            </div>
                            <div className="testimonials--body">
                                <h5>consectetur</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="testimonials--inner">
                            <div className="testimonials--header">
                                <div className="client--img">
                                    <img src={client_img} alt="" />
                                </div>
                            </div>
                            <div className="testimonials--body">
                                <h5>consectetur</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="testimonials--arrow">
                        <div className="testimonial-nav-left"><img src={left_arrow} alt="" /></div>
                        <div className="testimonial-nav-right"><img src={right_arrow} alt="" /></div>
                    </div>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
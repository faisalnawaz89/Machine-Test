import React from 'react'
import './Testimonial.css'
import client_img from '../../Assets/client--img.jpg'
import left_arrow from '../../Assets/left-arrow.png'
import right_arrow from '../../Assets/right-arrow.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'

const Testimonial = () => {
  return (
    <div className='testimonial testimonial--block'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>Testimonial</h2>
                <h4>What is says our customer</h4>
            </div>
            <div className="client--testimonial">
                <div className="client--testimonial--inner">
                    <Swiper
                    autoplay={{delay:3000, disableOnInteraction:false}}
                    modules={[Autoplay, Navigation]}
                    navigation={{prevEl:'.custom-nav-left', nextEl:'.custom-nav-right'}}>
                        <SwiperSlide>
                          <div className="grid testimonial--card">
                              <div className="client--img">
                                <div className='round--sphere'>
                                  <img src={client_img} alt="" />
                                </div>
                              </div>
                              <div className="client--info">
                                <h4>Aliqua</h4>
                                <h6>Consectetur adipiscing</h6>
                              </div>
                              <div className="client--content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum</p>
                              </div>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="grid testimonial--card">
                              <div className="client--img">
                                <div className='round--sphere'>
                                  <img src={client_img} alt="" />
                                </div>
                              </div>
                              <div className="client--info">
                                <h4>Aliqua</h4>
                                <h6>Consectetur adipiscing</h6>
                              </div>
                              <div className="client--content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum</p>
                              </div>
                          </div>
                        </SwiperSlide>
                        <div className="navigation--arrow">
                            <div className="custom-nav-left"><img src={left_arrow} alt="" /></div>
                            <div className="custom-nav-right"><img src={right_arrow} alt="" /></div>
                        </div>
                    </Swiper>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial
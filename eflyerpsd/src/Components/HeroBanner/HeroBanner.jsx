import React from 'react'
import './HeroBanner.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import left_arrow_icon from '../Assets/left_arrow_icon.png'
import right_arrow_icon from '../Assets/right_arrow_icon.png'

const HeroBanner = () => {
  return (
    <div className='herobanner hero--banner'>
        <Swiper slidesPerView={1} autoplay={{delay:2500, disableOnInteraction:false}} modules={[Navigation, Autoplay]} navigation={{
          prevEl: '.custom-nav-arrow-left',
          nextEl: '.custom-nav-arrow-right'
        }}>
          <SwiperSlide>
              <div className="slider--container slider1">
                  <div className="slider--title">
                      <h1>Get Start <br /> Your favriot shoping</h1>
                      <div className="cta--btn">
                        <a href="#">Buy Now</a>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
          <SwiperSlide>
              <div className="slider--container slider2">
                  <div className="slider--title">
                      <h1>Get Start <br /> Your favriot shoping</h1>
                      <div className="cta--btn">
                        <a href="#">Buy Now</a>
                      </div>
                  </div>
              </div>
          </SwiperSlide>
          <div className="slider--navigation--arrow">
            <div className="custom-nav-arrow-left">
              <img src={left_arrow_icon} alt="" />
            </div>
            <div className="custom-nav-arrow-right">
              <img src={right_arrow_icon} alt="" />
            </div>
          </div>
        </Swiper>
    </div>
  )
}

export default HeroBanner
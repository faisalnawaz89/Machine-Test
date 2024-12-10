import React, { useRef } from 'react'
import './HeroSlider.css'
import slider_1 from '../Assest/car-slide-1.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Pagination} from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'

const HeroSlider = () => {

  const swiperRef = useRef(null);

  return (
    <div className='heroslider hero--slider'>
        <div className="bg">
          <span className='arrow up-arrow'></span>
          <div className="main--slider">
              <div className="slider--conatiner">
                <div className="container-fluid">
                  <Swiper 
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  slidesPerView={1} 
                  modules={[Pagination]} 
                  autoplay={{delay:3000, disableOnInteraction:false}} 
                  pagination={{ 
                    clickable: true, 
                    el: '.custom-pagination',
                    renderBullet: (index, className) => {
                      return `<span class="${className} custom-bullet"></span>`;
                    },
                    }}>
                    <SwiperSlide>
                      <h1>Speed Car Game</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable</p>
                      <div className="cta--btn">
                        <a href="#">Download Now</a>
                      </div>
                      <div className="slider--image">
                        <img src={slider_1} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h1>Speed Car Game</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable</p>
                      <div className="cta--btn">
                        <a href="#">Download Now</a>
                      </div>
                      <div className="slider--image">
                        <img src={slider_1} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <h1>Speed Car Game</h1>
                      <p>It is a long established fact that a reader will be distracted by the readable</p>
                      <div className="cta--btn">
                        <a href="#">Download Now</a>
                      </div>
                      <div className="slider--image">
                        <img src={slider_1} alt="" />
                      </div>
                    </SwiperSlide>
                    <div className="custom-pagination"></div>
                  </Swiper>
                </div>
                
              </div>
          </div>
          <span className='arrow down-arrow'></span>
        </div>
        <div className="overlay"></div>
    </div>
  )
}

export default HeroSlider
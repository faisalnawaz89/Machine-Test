import React from 'react'
import './HeroSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import slider_1 from '../Assets/slider_1.jpg'
import slider_2 from '../Assets/slider_2.jpg'
import arrow_left from '../Assets/left-arrow.png'
import arrow_right from '../Assets/right-arrow.png'

const HeroSlider = () => {
  return (
    <div className="heroslider hero--slider">
        <div className="grid space--left slider--container">
            <div className="slider--empty"></div>
            <div className="main--slider">
              <Swiper spaceBetween={1} autoplay={{delay:3000, disableOnInteraction:false}} 
              navigation={{prevEl:'.custom-nav-prev', nextEl:'.custom-nav-next'}} modules={[Navigation, Autoplay]}>
                  <SwiperSlide>
                    <div className="slider--bg" style={{ backgroundImage: `url(${slider_1})`}}></div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="slider--bg" style={{ backgroundImage: `url(${slider_2})`}}></div>
                  </SwiperSlide>
              </Swiper>
              <div className="slider--navigation">
                <div className="custom-nav-prev">
                    <img src={arrow_right} alt="" />
                </div>
                <div className="custom-nav-next">
                    <img src={arrow_left} alt="" />
                </div>
              </div>
            </div>
        </div>
        <div className="slider--title--container">
            <div className="slider--title">
                <h1>interior design</h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by</p>
                <div className="cta--btn">
                    <a className="primary--btn" href="#">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeroSlider
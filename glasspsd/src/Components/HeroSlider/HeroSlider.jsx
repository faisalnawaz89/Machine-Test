import React from 'react'
import './HeroSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react' 
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import arrow_left from '../Assets/left-arrow.png'
import arrow_right from '../Assets/right-arrow.png'

const HeroSlider = () => {
  return (
    <div className='heroslider hero--slider'>
        <div className="slider--conatiner">
            <Swiper 
            slidesPerView={1} 
            modules={[Navigation]}
            loop={true}
            autoplay={{delay:3000, disableOnInteraction:false}} 
            navigation={{prevEl:'.slider-nav-left', nextEl:'.slider-nav-right'}}>
                <SwiperSlide className="slider--bg slider--bg-1">
                    <div className="container">
                        <div className="slider--title--inner">
                            <div className="slider--title">
                                <h1>welcome to </h1>
                                <h3>glasses shop</h3>
                                <div className="cta--btn">
                                    <a href="#">Buy Now</a>
                                 </div>
                            </div>
                        </div>
                     </div>
                </SwiperSlide>
                <SwiperSlide className="slider--bg slider--bg-2">
                    <div className="container">
                        <div className="slider--title--inner">
                            <div className="slider--title">
                                <h1>welcome to </h1>
                                <h3>glasses shop</h3>
                                <div className="cta--btn">
                                    <a href="#">Buy Now</a>
                                 </div>
                            </div>
                        </div>
                     </div>
                </SwiperSlide>
                <div className="slider--navigation">
                    <div className="slider-nav-left"><img src={arrow_left} alt="" /></div>
                    <div className="slider-nav-right"><img src={arrow_right} alt="" /></div>
                </div>
            </Swiper>
            
        </div>
    </div>
  )
}

export default HeroSlider
import React from 'react'
import './HeroSlider.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation, EffectFade} from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css'

const HeroSlider = () => {
  return (
    <div className='heroslider hero--slider'>
        <div className="main--slider">
            <div className="slider--container">
                <Swiper 
                slidesPerView={1} 
                loop={true}
                autoplay={{delay:4000, disableOnInteraction:false}} 
                navigation={{prevEl:'.nav-arrow-left', nextEl:'.nav-arrow-right'}} 
                modules={[Autoplay, Navigation, EffectFade]}
                effect="fade">
                    <SwiperSlide>
                        <div className="slides slider-1">
                            <div className="slides--caption">
                                <h1>Humanity</h1>
                                <p>Please tell your friends about our website</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slides slider-2">
                            <div className="slides--caption">
                                <h1>be a Kind Heart</h1>
                                <p>Professional charity theme based on Bootstrap 5.2.2</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slides slider-3">
                            <div className="slides--caption">
                                <h1>Non-profit</h1>
                                <p>You can support us to grow more</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="slider--navigation">
                        <div className="nav-arrow-left">
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#fff'><path d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/></svg></div>
                        <div className="nav-arrow-right">
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='#fff'><path d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/></svg></div>
                    </div>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default HeroSlider
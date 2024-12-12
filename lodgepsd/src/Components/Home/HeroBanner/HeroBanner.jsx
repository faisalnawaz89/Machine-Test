import React from 'react'
import './HeroBanner.css'
import slider_img_1 from '../../Assets/slider-img-1.png'
import slider_img_2 from '../../Assets/slider-img-2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';
import 'swiper/css/effect-creative';
import 'swiper/css'

const HeroBanner = () => {
  return (
    <div className='herobanner hero--banner'>
        <div className="bg">
          <span className='left--slider--title vertical--title'>
            <h4>Jewellery</h4>
          </span>
          <div className="container">
            <Swiper 
            grabCursor={true}
            loop={true}
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: false,
                translate: [0, 0, -400],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            autoplay={{delay:3000, disableOnInteraction:false}}
            modules={[EffectCreative, Autoplay]}
            >
              <SwiperSlide>
                <div className="grid space--between slider--container">
                    <div className="slider--title">
                        <div className="pagetitle page--title">
                            <h2>New Collection <span></span></h2>
                            <h1>Dimond Ring</h1>
                            <p>Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia aptent taciti sociosqu ad litora torquent per conubia nostra</p>
                            <div className="cta--btn">
                              <a href="#">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="slider--image">
                        <img src={slider_img_1} alt="" />
                    </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="grid space--between slider--container">
                    <div className="slider--title">
                        <div className="pagetitle page--title">
                            <h2>New Arrival <span></span></h2>
                            <h1>Gold Ring</h1>
                            <p>Lorem ipsum dolor sit amet consec tetur adipiscing elit elit at felislacinia aptent taciti sociosqu ad litora torquent per conubia nostra</p>
                            <div className="cta--btn">
                              <a href="#">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="slider--image">
                        <img src={slider_img_2} alt="" />
                    </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <span className='right--slider--title vertical--title'>
            <h4>Jewellery</h4>
          </span>
        </div>
        <div className='round--sphere'></div>
    </div>
  )
}

export default HeroBanner
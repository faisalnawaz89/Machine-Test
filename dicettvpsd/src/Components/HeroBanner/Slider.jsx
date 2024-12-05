import React from 'react'
import slider1 from '../Assets/dishTv.png'
import BannerCard from '../BannerCard/BannerCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import arrow_icon from '../Assets/arrow_icon.png'

const Slider = () => {
  return (
    <>
        <div className='homeslider'>
            <Swiper slidesPerView={1} modules={[Navigation, Autoplay]} autoplay={{delay:3000, disableOnInteraction:false}} navigation={{
                prevEl: '.custom-nav-next',
                nextEl: '.custom-nav-prev',
            }}>
            <SwiperSlide>
                <div className="grid space--between home--slider">
                    <div className="slider--title">
                        <h2>Your Favorite</h2>
                        <h1>Shows And Movies</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                        <div className="flex space--left cta--btn">
                            <a class="primary--btn" href="#">Start More</a>
                            <a class="secondary--btn" href="#">Read More</a>
                        </div>
                    </div>
                    <div className="slider--img">
                        <img src={slider1} alt="" />
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="grid space--between home--slider">
                    <div className="slider--title">
                        <h2>Your Favorite</h2>
                        <h1>Shows And Movies</h1>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or</p>
                        <div className="flex space--left cta--btn">
                            <a class="primary--btn" href="#">Start More</a>
                            <a class="secondary--btn" href="#">Read More</a>
                        </div>
                    </div>
                    <div className="slider--img">
                        <img src={slider1} alt="" />
                    </div>
                </div>
            </SwiperSlide>
            </Swiper>
            <div className="custom--navigations">
                <div className="custom-nav-next"><img src={arrow_icon} alt="" /></div>
                <div className="custom-nav-prev"><img src={arrow_icon} alt="" /></div>
            </div>
        </div>
        <div className="container-fluid">
            <BannerCard/>
        </div>
    </>
  )
}

export default Slider
import React from 'react'
import './PeopleSays.css'
import people_img from '../Assets/people-img-1.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import arrow_icon from '../Assets/arrow_icon.png'

const PeopleSays = () => {
  return (
    <div className='peoplesays people-says bg'>
        <div className="container">
            <div className="peolpe--says--content">
                <div className="pagetitle page--heading">
                    <h2>Donat pepole Says</h2>
                </div>
                <div className="people--says--box">
                    <Swiper slidesPerView={1} autoplay={{delay:3000, disableOnInteraction:false}} modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: '.custom-prev',
                        nextEl: '.custom-next',
                    }}>
                        <SwiperSlide>
                            <div className="grid people--says--inner">
                                <div className="people-img">
                                    <img src={people_img} alt="" />
                                </div>
                                <div className="people--content">
                                    <h5>Mardo Merk</h5>
                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="grid people--says--inner">
                                <div className="people-img">
                                    <img src={people_img} alt="" />
                                </div>
                                <div className="people--content">
                                    <h5>Leo Goltham</h5>
                                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefinedIf you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className="slider--navigation">
                        <div className="people--icon custom-prev">
                            <img src={arrow_icon} alt="" />
                        </div>
                        <div className="people--icon custom-next">
                            <img src={arrow_icon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="overlay"></div>
    </div>
  )
}

export default PeopleSays
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css/pagination'
import 'swiper/css'
import SliderList from './SliderList'


const MainSlider = () => {
  return (
    <Swiper slidesPerView={1} pagination={{ clickable: true }} autoplay={{delay:3000, disableOnInteraction:false}} modules={[Pagination, Autoplay]}>
        {SliderList.map((data, index)=>{
            return(
                <SwiperSlide key={index}>
                    <div className="slider--image" style={{ background: `url(${data.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="slider--title">
                            <h1>{data.title}</h1>
                            <p>{data.caption}</p>
                            <div className="cta--btn">
                                <a className="secondary--btn" href="#">Read More</a>
                            </div>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </SwiperSlide>
            )
        })}
    </Swiper>
  )
}

export default MainSlider
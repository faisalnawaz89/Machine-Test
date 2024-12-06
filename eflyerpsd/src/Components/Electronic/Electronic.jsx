import React from 'react'
import './Electronic.css'
import ProductSlider from '../ProductSlider/ProductSlider'
import productData from '../Electronic/ProductData'
import { Swiper, SwiperSlide } from 'swiper/react' 
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import arrow_left from '../Assets/left_arrow_icon.png'
import arrow_right from '../Assets/right_arrow_icon.png'

const Electronic = () => {
  return (
    <div className='productslider product--slider'>
        <div className="container">
            <div className="men--category">
                <div className="pagetitle page--title">
                    <h2>Electronic</h2>
                </div>
                <Swiper 
                    spaceBetween={30} 
                    slidesPerView={3} 
                    modules={[Navigation, Autoplay]} 
                    autoplay={{delay:3000, disableOnInteraction:false}}
                    navigation={{prevEl:'.product-right-arrow', nextEl:'.product-left-arrow'}}
                    breakpoints={{440:{slidesPerView:1},640:{slidesPerView:1},768:{slidesPerView:2},1024:{slidesPerView:3}}}>
                    {productData.map((item, index)=>{
                    return  <SwiperSlide>
                                <ProductSlider key={index} ProductTitle={item.title} ProductPrice={item.price} ProductImage={item.image}/>
                            </SwiperSlide>
                    })}
                    <div className="slider--navigation">
                        <div className="product-left-arrow"><img src={arrow_left} alt="" /></div>
                        <div className="product-right-arrow"><img src={arrow_right} alt="" /></div>
                    </div>
                </Swiper>
                
            </div>
        </div>
    </div>
  )
}

export default Electronic
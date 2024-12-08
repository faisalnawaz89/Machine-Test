import React from 'react'
import './OurCustomer.css'
import customer_img from '../Assets/customer-img-1.png'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import left_arrow from '../Assets/left-arrow.png';
import right_arrow from '../Assets/right-arrow.png';

const OurCustomer = () => {
  return (
        <div className='ourcustomer our--customer'>
            <div className="conatiner">
                <div className="pagetitle page--title">
                    <h2>what is says our customer</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
                </div>
            <div className="customer--block">
                    <div className="customer--inner">
                        <Swiper
                        slidesPerView={1}
                        modules={[Navigation]}
                        autoplay={{delay:3000, disableOnInteraction:false}}
                        navigation={{prevEl: '.customer-nav-left', nextEl:'.customer-nav-right'}}
                        >
                        <SwiperSlide>
                            <div className="customer--slider">
                                <img src={customer_img} alt="" />
                                <h5>Normal distribution </h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                                <span></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="customer--slider">
                                <img src={customer_img} alt="" />
                                <h5>Normal distribution </h5>
                                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                                <span></span>
                            </div>
                        </SwiperSlide>
                        <div className="customer--arrow--navigation">
                            <div className="customer-nav-left"><img src={left_arrow} alt="" /></div>
                            <div className="customer-nav-right"><img src={right_arrow} alt="" /></div>
                        </div>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default OurCustomer
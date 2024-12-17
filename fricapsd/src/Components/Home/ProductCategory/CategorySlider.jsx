import React from 'react'
import product_img_1 from '../../Assets/product-img-1.png'
import product_img_2 from '../../Assets/product-img-2.png'
import product_img_3 from '../../Assets/product-img-3.png'
import product_img_4 from '../../Assets/product-img-4.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

const CategorySlider = () => {
  return (
    <div className='categoryslider category--slider'>
        <div className="container">
            <div className="category--slider--conatiner">
                <Swiper spaceBetween={30} slidesPerView={3} autoplay={{delay:3000, disableOnInteraction:false}} modules={[Autoplay]}
                breakpoints={{640:{slidesPerView:1}, 768:{slidesPerView:2}, 1024:{slidesPerView:3}}}>
                    <SwiperSlide>
                        <div className="category--slider--inner">
                            <div className="product--name">
                                <h3>Mobile</h3>
                            </div>
                            <div className="product--img">
                                <img src={product_img_1} alt="" />
                            </div>
                            <div className="flex product--info">
                                <div className="cta--btn">
                                    <a className="secondary--btn" href="#">add to cart</a>
                                </div>
                                <div className="flex product--price">
                                    <div className="product--brand">
                                        <h4>samsung</h4>
                                    </div>
                                    <div className="orignal--price">
                                        <h4>$ 50</h4>
                                    </div>
                                    <div className="mrp--price">
                                        <h4>$ 100</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category--slider--inner">
                            <div className="product--name">
                                <h3>Wacth</h3>
                            </div>
                            <div className="product--img">
                                <img src={product_img_2} alt="" />
                            </div>
                            <div className="flex product--info">
                                <div className="cta--btn">
                                    <a className="secondary--btn" href="#">add to cart</a>
                                </div>
                                <div className="flex product--price">
                                    <div className="product--brand">
                                        <h4>Wacth</h4>
                                    </div>
                                    <div className="orignal--price">
                                        <h4>$ 50</h4>
                                    </div>
                                    <div className="mrp--price">
                                        <h4>$ 100</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category--slider--inner">
                            <div className="product--name">
                                <h3>Camera</h3>
                            </div>
                            <div className="product--img">
                                <img src={product_img_3} alt="" />
                            </div>
                            <div className="flex product--info">
                                <div className="cta--btn">
                                    <a className="secondary--btn" href="#">add to cart</a>
                                </div>
                                <div className="flex product--price">
                                    <div className="product--brand">
                                        <h4>Canon</h4>
                                    </div>
                                    <div className="orignal--price">
                                        <h4>$ 500</h4>
                                    </div>
                                    <div className="mrp--price">
                                        <h4>$ 1000</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="category--slider--inner">
                            <div className="product--name">
                                <h3>Airbuds</h3>
                            </div>
                            <div className="product--img">
                                <img src={product_img_4} alt="" />
                            </div>
                            <div className="flex product--info">
                                <div className="cta--btn">
                                    <a className="secondary--btn" href="#">add to cart</a>
                                </div>
                                <div className="flex product--price">
                                    <div className="product--brand">
                                        <h4>Noise</h4>
                                    </div>
                                    <div className="orignal--price">
                                        <h4>$ 10</h4>
                                    </div>
                                    <div className="mrp--price">
                                        <h4>$ 15</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default CategorySlider
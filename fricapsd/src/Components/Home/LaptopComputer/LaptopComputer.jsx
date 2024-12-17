import React from 'react'
import './LaptopComputer.css'
import product_img_5 from '../../Assets/product-img-5.png'
import product_img_6 from '../../Assets/product-img-6.png'
import product_img_7 from '../../Assets/product-img-7.png'
import product_img_8 from '../../Assets/product-img-8.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const LaptopComputer = () => {
  return (
    <div className='lapto--computer--block'>
        <div className="container">
            <div className="pagetitle page--title">
              <h2>Computers & Laptop</h2>
            </div>
            <div className="laptop--computer--container">
                <Swiper spaceBetween={30} slidesPerView={1} autoplay={{delay:3000, disableOnInteraction:false}} modules={[Autoplay]}
                breakpoints={{640:{slidesPerView:1}, 768:{slidesPerView:2}, 1024:{slidesPerView:3}}}>
                  <SwiperSlide>
                    <div className="laptop--computer--slider">
                        <img src={product_img_5} alt="" />
                        <div className="flex product--info">
                          <div className="product--name">
                            <h3>Computer</h3>
                          </div>
                          <div className="flex product--price">
                            <div className="product--brand">
                              <h4>samsung</h4>
                            </div>
                            <div className="orignal--price">
                              <h4>$ 100</h4>
                            </div>
                            <div className="mrp--price">
                              <h4>$ 1000</h4>
                            </div>
                          </div>
                          <div className="cta--btn">
                            <a className="secondary--btn" href="#">add to cart</a>
                          </div>
                        </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="laptop--computer--slider">
                        <img src={product_img_6} alt="" />
                        <div className="flex product--info">
                          <div className="product--name">
                            <h3>laptop</h3>
                          </div>
                          <div className="flex product--price">
                            <div className="product--brand">
                              <h4>Dell</h4>
                            </div>
                            <div className="orignal--price">
                              <h4>$ 100</h4>
                            </div>
                            <div className="mrp--price">
                              <h4>$ 1000</h4>
                            </div>
                          </div>
                          <div className="cta--btn">
                            <a className="secondary--btn" href="#">add to cart</a>
                          </div>
                        </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="laptop--computer--slider">
                        <img src={product_img_7} alt="" />
                        <div className="flex product--info">
                          <div className="product--name">
                            <h3>macOs</h3>
                          </div>
                          <div className="flex product--price">
                            <div className="product--brand">
                              <h4>Dell</h4>
                            </div>
                            <div className="orignal--price">
                              <h4>$ 300</h4>
                            </div>
                            <div className="mrp--price">
                              <h4>$ 800</h4>
                            </div>
                          </div>
                          <div className="cta--btn">
                            <a className="secondary--btn" href="#">add to cart</a>
                          </div>
                        </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="laptop--computer--slider">
                        <img src={product_img_8} alt="" />
                        <div className="flex product--info">
                          <div className="product--name">
                            <h3>AirBuds</h3>
                          </div>
                          <div className="flex product--price">
                            <div className="product--brand">
                              <h4>Boat</h4>
                            </div>
                            <div className="orignal--price">
                              <h4>$ 30</h4>
                            </div>
                            <div className="mrp--price">
                              <h4>$ 100</h4>
                            </div>
                          </div>
                          <div className="cta--btn">
                            <a className="secondary--btn" href="#">add to cart</a>
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

export default LaptopComputer
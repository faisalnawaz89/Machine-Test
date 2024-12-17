import React from 'react'
import './Products.css'
import product_1 from '../Assets/product-1.png'
import product_2 from '../Assets/product-2.png'
import product_3 from '../Assets/product-3.png'
import product_4 from '../Assets/product-4.png'
import { Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/navigation';
import 'swiper/css'

const Products = () => {
  return (
    <div className='product product--block'>
        <div className="pagetitle page--title">
            <h2>Food Products</h2>
            <div className="divider"></div>
        </div>
        <div className="products--container products--boxes">
        <Swiper spaceBetween={25} slidesPerView={1} navigation  autoplay={{
        delay: 3000, disableOnInteraction: false,}} modules={[Navigation, Autoplay]} 
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
        }}>
            <SwiperSlide>
                <div className="products--box">
                    <img src={product_1} alt="" />
                    <div className="flex product--name">
                        <h3>Khajur</h3>
                        <h4>Price $100</h4>
                    </div>
                    <p>suffered alteration in some form, by suffalteration in some form, by injected humour, or randomised </p>
                    <a href="#">See More</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="products--box">
                    <img src={product_2} alt="" />
                    <div className="flex product--name">
                        <h3>Kissmiss</h3>
                        <h4>Price $100</h4>
                    </div>
                    <p>suffered alteration in some form, by suffalteration in some form, by injected humour, or randomised </p>
                    <a href="#">See More</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="products--box">
                    <img src={product_3} alt="" />
                    <div className="flex product--name">
                        <h3>Kaju</h3>
                        <h4>Price $100</h4>
                    </div>
                    <p>suffered alteration in some form, by suffalteration in some form, by injected humour, or randomised </p>
                    <a href="#">See More</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="products--box">
                    <img src={product_4} alt="" />
                    <div className="flex product--name">
                        <h3>Almond</h3>
                        <h4>Price $100</h4>
                    </div>
                    <p>suffered alteration in some form, by suffalteration in some form, by injected humour, or randomised </p>
                    <a href="#">See More</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="products--box">
                    <img src={product_1} alt="" />
                    <div className="flex product--name">
                        <h3>Khajur</h3>
                        <h4>Price $100</h4>
                    </div>
                    <p>suffered alteration in some form, by suffalteration in some form, by injected humour, or randomised </p>
                    <a href="#">See More</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="products--box">
                    <img src={product_2} alt="" />
                    <div className="flex product--name">
                        <h3>Kissmiss</h3>
                        <h4>Price $100</h4>
                    </div>
                    <p>suffered alteration in some form, by suffalteration in some form, by injected humour, or randomised </p>
                    <a href="#">See More</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="products--box">
                    <img src={product_3} alt="" />
                    <div className="flex product--name">
                        <h3>Kaju</h3>
                        <h4>Price $100</h4>
                    </div>
                    <p>suffered alteration in some form, by suffalteration in some form, by injected humour, or randomised </p>
                    <a href="#">See More</a>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="products--box">
                    <img src={product_4} alt="" />
                    <div className="flex product--name">
                        <h3>Almond</h3>
                        <h4>Price $100</h4>
                    </div>
                    <p>suffered alteration in some form, by suffalteration in some form, by injected humour, or randomised </p>
                    <a href="#">See More</a>
                </div>
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Products
import React, { useRef } from 'react';
import './HeroSlider.css';
import slider_img_1 from '../Assets/slider_img_1.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import left_arrow from '../Assets/left-arrow.png';
import right_arrow from '../Assets/right-arrow.png';

const MainSlider = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='mainslider main--slider'>

      <div className="container">

        <div className="navigation--arrow">
          <div className="left--arrow" ref={prevRef}>
            <img src={left_arrow} alt="Left Arrow" />
          </div>
          <div className="right--arrow" ref={nextRef}>
            <img src={right_arrow} alt="Right Arrow" />
          </div>
        </div>

        <Swiper
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          <SwiperSlide>
            <div className="grid space--between slider--block">
              <div className="main--slider--title">
                <h1>50% Discount Online Shop </h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                <div className="cta--btn">
                  <a href="#">Shop Now</a>
                </div>
              </div>
              <div className="main--slider--image">
                <img src={slider_img_1} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid space--between slider--block">
              <div className="main--slider--title">
                <h1>50% Discount Online Shop </h1>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration </p>
                <div className="cta--btn">
                  <a href="#">Shop Now</a>
                </div>
              </div>
              <div className="main--slider--image">
                <img src={slider_img_1} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="search--bar">
        <input type="email" placeholder='Enter your keywords' />
        <button>
            <span>Search</span> 
            <span><svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msfilter: "" }}
                >
                <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z" />
                </svg>
            </span>
        </button>
        <button>All</button>
      </div>
    </div>
  );
};

export default MainSlider;

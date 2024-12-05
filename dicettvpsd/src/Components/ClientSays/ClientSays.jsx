import React from 'react'
import './ClientSays.css'
import quote_icon from '../Assets/quote.png'
import avtaar_icon from '../Assets/avtaar.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const ClientSays = () => {
  return (
    <div className='clientsays client-says'>
        <div className="container">
            <div className="pagetitle page--title">
              <h2>What our clients say</h2>
            </div>
            <div className="client--block">
              <Swiper slidesPerView={1} modules={[Autoplay]} autoplay={{delay:3000, disableOnInteraction:false}}>
                  <SwiperSlide>
                    <div className="grid space--left client--block--inner">
                        <div className="client--image">
                          <img src={avtaar_icon} alt="" />
                        </div>
                        <div className="client--content">
                            <div className="flex space--between client--name">
                              <h4>Miller</h4>
                              <span><img src={quote_icon} alt="" /></span>
                            </div>
                            <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id e</p>
                        </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="grid space--left client--block--inner">
                        <div className="client--image">
                          <img src={avtaar_icon} alt="" />
                        </div>
                        <div className="client--content">
                            <div className="flex space--between client--name">
                              <h4>John</h4>
                              <span><img src={quote_icon} alt="" /></span>
                            </div>
                            <p>ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id e</p>
                        </div>
                    </div>
                  </SwiperSlide>
              </Swiper>
                  
            </div>
        </div>
    </div>
  )
}

export default ClientSays
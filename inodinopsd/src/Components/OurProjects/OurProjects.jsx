import React from 'react'
import './OurProjects.css'
import our_project_img_1 from '../Assets/our--project-img-1.jpg'
import our_project_img_2 from '../Assets/our--project-img-2.jpg'
import our_project_img_3 from '../Assets/our--project-img-3.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css/navigation'
import 'swiper/css'
import arrow_prev from '../Assets/left-arrow.png'
import arrow_next from '../Assets/right-arrow.png'

const OurProjects = () => {
  return (
    <div className='ourprojects our--projects'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>Our projects</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
            <div className="our--projects--block">
                <Swiper slidesPerView={3} spaceBetween={20} modules={[Navigation, Autoplay]} autoplay={{delay:2500, disableOnInteraction:false}} 
                navigation={{prevEl:'.project-nav-prev', nextEl:'.project-nav-next'}} breakpoints={{
                  640: {
                    slidesPerView: 1
                  },
                  768: {
                    slidesPerView: 2
                  },
                  1024:{
                    slidesPerView: 3
                  },
                }}>
                  <SwiperSlide>
                      <div className="our--project">
                        <div className="our--project--inner">
                          <div className="bg">
                            <img src={our_project_img_1} alt="" />
                            <div className="overlay--upper--title">
                              <div className="cta--btn">
                                <a className="boder--btn" href="#">View More</a>
                              </div>
                              <h5>Modern home designe</h5>
                            </div>
                            <div className="overlay"></div>
                          </div>
                        </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="our--project">
                        <div className="our--project--inner">
                          <div className="bg">
                            <img src={our_project_img_2} alt="" />
                            <div className="overlay--upper--title">
                              <h5>Modern home designe</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="our--project">
                        <div className="our--project--inner">
                          <div className="bg">
                            <img src={our_project_img_3} alt="" />
                            <div className="overlay--upper--title">
                              <h5>Modern home designe</h5>
                            </div>
                          </div>
                        </div>
                      </div>
                  </SwiperSlide>
                  <SwiperSlide>
                      <div className="our--project">
                        <div className="our--project--inner">
                          <div className="bg">
                              <img src={our_project_img_1} alt="" />
                              <div className="overlay--upper--title">
                                <h5>Modern home designe</h5>
                              </div>
                            </div>
                        </div>
                      </div>
                  </SwiperSlide>
                  <div className="project--arrow">
                    <div className="project-nav-prev"><img src={arrow_prev} alt="" /></div>
                    <div className="project-nav-next"><img src={arrow_next} alt="" /></div>
                  </div>
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default OurProjects
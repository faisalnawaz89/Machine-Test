import React from 'react'
import './HappyCustomer.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import customer1 from '../../Assets/customer1.jpg'
import customer2 from '../../Assets/customer2.jpg'
import customer3 from '../../Assets/customer3.jpg'
import customer4 from '../../Assets/customer4.jpg'

const HappyCustomer = () => {
  return (
    <div className='happycustomer happy--customer'>
      <div className="bg--props--round primary--color--props"></div>
      <div className="container">
        <div className="pagetitle page--title">
          <h2>Happy Customers</h2>
        </div>

        <div className="customer--slider">
          <Swiper
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              renderBullet: (index, className) => {
                const images = [customer1, customer2, customer3, customer4];
                return `<span class="${className}"><img class="custom-pagination-image" src="${images[index]}" alt="Customer ${index + 1}" /></span>`;
              },
            }}
            modules={[Autoplay, EffectFade, Pagination]}
            effect='fade'
          >
            <SwiperSlide>
              <div className="customer--slider--inner">
                <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme</p>
                <div className="customer--name">
                  <h5>Maria, <span>Boss</span></h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="customer--slider--inner">
                <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci</p>
                <div className="customer--name">
                  <h5>Thomas, <span>Partner</span></h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="customer--slider--inner">
                <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito charity theme</p>
                <div className="customer--name">
                  <h5>Jane, <span>Advisor</span></h5>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="customer--slider--inner">
                <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris quis metus tempor orci</p>
                <div className="customer--name">
                  <h5>Bob, <span>Entrepreneur</span></h5>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="bg--props--round secondary--color--props"></div>
    </div>
  )
}

export default HappyCustomer

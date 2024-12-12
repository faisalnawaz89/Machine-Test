import React from 'react'
import './Jewllery.css'
import jwellery_pro_img_1 from '../../Assets/pro-img-4.jpg'
import jwellery_pro_img_2 from '../../Assets/pro-img-1.jpg'
import jwellery_pro_img_3 from '../../Assets/pro-img-2.jpg'

const Jewllery = () => {
  return (
    <div className='jewllery jewllery--block'>
        <div className="container">
          <div className="pagetitle page--title">
              <h2>Our Jewellery Price </h2>
          </div>
          <div className="flex space--between jweller--product">
              <div className="jweller--product--card">
                  <h3>Diamond Ring</h3>
                  <img src={jwellery_pro_img_1} alt="" />
                  <a href="#">Buy Now</a>
              </div>
              <div className="jweller--product--card">
                  <h3>Diamond Ring</h3>
                  <img src={jwellery_pro_img_3} alt="" />
                  <a href="#">Buy Now</a>
              </div>
              <div className="jweller--product--card">
                  <h3>Diamond Ring</h3>
                  <img src={jwellery_pro_img_2} alt="" />
                  <a href="#">Buy Now</a>
              </div>
          </div>
          <div className="cta--btn">
            <a href="#">See More</a>
          </div>
        </div>
    </div>
  )
}

export default Jewllery
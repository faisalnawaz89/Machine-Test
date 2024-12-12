import React from 'react'
import './ProductCategory.css'
import product_img_1 from '../../Assets/pro-img-1.jpg'
import product_img_2 from '../../Assets/pro-img-2.jpg'
import product_img_3 from '../../Assets/pro-img-3.jpg'

const ProductCategory = () => {
  return (
    <div className='productcategory product--category'>
        <div className="container">
          <div className="flex space--between">
              <div className="product--card">
                  <h3>Best Price</h3>
                  <img src={product_img_1} alt="" />
                  <h4>Bracelet</h4>
              </div>
              <div className="product--card">
                  <h3>Best Price</h3>
                  <img src={product_img_2} alt="" />
                  <h4>Ring</h4>
              </div>
              <div className="product--card">
                  <h3>Best Price</h3>
                  <img src={product_img_3} alt="" />
                  <h4>Earing</h4>
              </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCategory
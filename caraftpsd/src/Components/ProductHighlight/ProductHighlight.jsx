import React from 'react'
import './ProductHighlight.css'
import pro_high_img_1 from '../Assets/pro-high-img-1.jpg'
import pro_high_img_2 from '../Assets/pro-high-img-2.jpg'

const ProductHighlight = () => {
  return (
    <div className='producthighlight product--highlight'>
        <div className="container">
            <div className="grid product--highlight--block">
                <div className="product--highlight--inner">
                    <h3>Beauty products</h3>
                    <img src={pro_high_img_1} alt="" />
                    <a href="">See More</a>
                </div>
                <div className="product--highlight--inner">
                    <h3>Explore trending electronics </h3>
                    <img src={pro_high_img_2} alt="" />
                    <a href="">See More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductHighlight
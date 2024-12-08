import React from 'react'
import './Category.css'
import cat_img_1 from '../Assets/category-img-1.jpg'
import cat_img_2 from '../Assets/category-img-2.jpg'
import cat_img_3 from '../Assets/category-img-3.jpg'

const ProductCategory = () => {
  return (
    <div className='productcategory product--category'>
        <div className="container">
            <div className="product--category--box">
                <div className="grid space--between product--category--card">
                    <div className="product--card">
                        <h3>Up to 50% off | Beds</h3>
                        <img src={cat_img_1} alt="" />
                        <a href="#">See More</a>
                    </div>
                    <div className="product--card">
                        <h3>organized in style</h3>
                        <img src={cat_img_2} alt="" />
                        <a href="#">See More</a>
                    </div>
                    <div className="product--card">
                        <h3>Refurbished mixer</h3>
                        <img src={cat_img_3} alt="" />
                        <a href="#">See More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
  )
}

export default ProductCategory
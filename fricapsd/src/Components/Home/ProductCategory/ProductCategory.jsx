import React from 'react'
import './ProductCategory.css'
import CategorySlider from './CategorySlider'

const ProductCategory = () => {
  return (
  <>
    <div className='productcategory product--category'>
        <div className="container">
            <div className="category--items">
              <h2>Category</h2>
              <ul>
                <li>
                  <a href="#">Man's Fashion</a>
                </li>
                <li>
                  <a href="#">Woman Fashion</a>
                </li>
                <li>
                  <a href="#">Beauty</a>
                </li>
                <li>
                  <a href="#">Mobiles</a>
                </li>
                <li>
                  <a href="#">Computers</a>
                </li>
                <li>
                  <a href="#">Watchs</a>
                </li>
                <li>
                  <a href="#">Kicthen</a>
                </li>
                <li>
                  <a href="#">Sports</a>
                </li>
              </ul>
            </div>
        </div>
    </div>
    <CategorySlider/>
  </>
  )
}

export default ProductCategory
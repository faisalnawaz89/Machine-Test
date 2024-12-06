import React from 'react'
import './ProductSlider.css'


const ProductSlider = ({ProductTitle, ProductPrice, ProductImage}) => {

  return (
    <div className="product--card">
        <div className="product--card--header">
            <h3>{ProductTitle}</h3>
            <h4><span>Price</span> $ {ProductPrice}</h4>
        </div>
        <div className="product--card--body">
            <img src={ProductImage} alt={ProductTitle} />
        </div>
        <div className="product--card--footer">
            <div className="flex space--between">
            <a href="#">Buy Now</a>
            <a href="#">See more</a>
            </div>
        </div>
    </div>
  );
}

export default ProductSlider
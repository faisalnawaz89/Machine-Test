import React from 'react'
import './Category.css'
import cat_icon_1 from '../Assets/cat-icon-1.png'
import cat_icon_2 from '../Assets/cat-icon-2.png'
import cat_icon_3 from '../Assets/cat-icon-3.png'
import cat_icon_4 from '../Assets/cat-icon-4.png'
import cat_icon_5 from '../Assets/cat-icon-5.png'
import ProductCategory from './ProductCategory'

const Category = () => {
  return (
    <>
        <div className='category--box'>
            <div className="container">
                <div className="grid space--between category--bar">
                    <div className="category--title">
                        <h3>Category</h3>
                    </div>
                    <div className="category--icon">
                        <img src={cat_icon_1} alt="" />
                        <h4>New Fashion</h4>
                    </div>
                    <div className="category--icon">
                        <img src={cat_icon_2} alt="" />
                        <h4>Clothing</h4>
                    </div>
                    <div className="category--icon">
                        <img src={cat_icon_3} alt="" />
                        <h4>Accessories</h4>
                    </div>
                    <div className="category--icon">
                        <img src={cat_icon_4} alt="" />
                        <h4>Accessories</h4>
                    </div>
                    <div className="category--icon">
                        <img src={cat_icon_5} alt="" />
                        <h4>Sweaters & Jackets</h4>
                    </div>
                </div>
            </div>
        </div>
        <ProductCategory/>
    </>
  )
}

export default Category
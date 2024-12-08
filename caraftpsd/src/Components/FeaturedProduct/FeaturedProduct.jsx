import React from 'react'
import './FeaturedProduct.css'
import men_shirt from '../Assets/men-shirt.jpg'
import mens_shirts from '../Assets/mens-shirts.jpg'
import women_frock from '../Assets/women-frock.jpg'

const FeaturedProduct = () => {
  return (
    <div className='featured featured--product'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>FEATURED PRODUCTS</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking</p>
            </div>
            <div className="grid space--betwwen featured--block">
                <div className="featured--block--inner">
                    <div className="flex space--between double--block">
                        <div className="featured--block--uppper featured--card">
                            <h3>Readable content of</h3>
                            <img src={men_shirt} alt="" />
                            <a href="#">See More</a>
                        </div>
                        <div className="featured--block--lower featured--card">
                            <h3>Readable content of</h3>
                            <img src={mens_shirts} alt="" />
                            <a href="#">See More</a>
                        </div>
                    </div>
                </div>
                <div className="featured--block--inner featured--card big--frock--img">
                    <h3>Readable content of</h3>
                    <img src={women_frock} alt="" />
                    <a href="#">See More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedProduct
import React from 'react'
import './Product.css'
import product1 from '../assets/product-1.png'
import product_icon1 from '../assets/product-icon-1.png'
import product2 from '../assets/product-2.png'
import product3 from '../assets/product-3.png'
import product4 from '../assets/product-4.png'
import product_icon2 from '../assets/product-icon-2.png'
import product5 from '../assets/product-5.png'
import product8 from '../assets/product-8.png'
import product_icon3 from '../assets/product-icon-3.png'
import product6 from '../assets/product-6.png'
import product7 from '../assets/product-7.png'


const Products = () => {
  return (
    <div className='products products-block'>
        <div className="container">
            <div className="product--title">
                <h4>SMARTER JOINT FOOD</h4>
                <h2>The Only Complete <br /> Joint Nourishment Supplement</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem sem, mollis sed viverra id, cursus at dolor. Maecenas ac semper sem, in lobortis est. Cras pharetra vitae tellus quis commodo. Phasellus semper viverra purus, vel feugiat nunc venenatis et. Suspendisse nisi arcu</p>
            </div>
            <div className="grid products--container">
                <div className="product--box">
                    <img className="product--img" src={product1} alt="" />
                    <div className="flex icon--title--flex">
                        <img className="product--icon" src={product_icon1} alt="" />
                        <h3>OTS:</h3>
                    </div>
                    <p>The main component of cartilage, ligaments, and tendons</p>
                </div>

                <div className="product--box">
                    <img className="product--img" src={product2} alt="" />
                    <div className="flex icon--title--flex">
                        <img className="product--icon" src={product_icon1} alt="" />
                        <h3>MSM:</h3>
                    </div>
                    <p>This natural form of organic sulfur is found throughout the body and key to healthy collagen. It also breakup unhealthy calcium deposits
                    </p>
                </div>

                <div className="product--box">
                    <img className="product--img" src={product3} alt="" />
                    <div className="flex icon--title--flex">
                        <img className="product--icon" src={product_icon1} alt="" />
                        <h3>Vitamin C:</h3>
                    </div>
                    <p>This essential antioxidant is necessary for collagen rejuvenation and helps protect joint tissue against oxidative stress too</p>
                </div>

                <div className="product--box">
                    <img className="product--img" src={product4} alt="" />
                    <div className="flex icon--title--flex">
                        <img className="product--icon" src={product_icon2} alt="" />
                        <h3>Turmeric:</h3>
                    </div>
                    <p>This well studied Indian spice has been used for centuries to help relieve joint discomfort and inflammation</p>
                </div>

                <div className="product--box">
                    <img className="product--img" src={product5} alt="" />
                    <div className="flex icon--title--flex">
                        <img className="product--icon" src={product_icon2} alt="" />
                        <h3>Bromelain:</h3>
                    </div>
                    <p>This enzyme from pineapples helps breakdown the unhealthy proteins caused 
                    by inflammation</p>
                </div>

                <div className="product--box product--big-box">
                    <img className="product--img" src={product8} alt="" />
                    <h5 className='flex product--view'><span><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 24 24"
                    style={{ fill: "#99c523", transform: "", msfilter: "" }}
                    >
                    <path d="M11 6H9v3H6v2h3v3h2v-3h3V9h-3z" />
                    <path d="M10 2c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
                    </svg>
                    </span> watch the label</h5>
                </div>

                <div className="product--box">
                    <img className="product--img" src={product6} alt="" />
                    <div className="flex icon--title--flex">
                        <img className="product--icon" src={product_icon3} alt="" />
                        <h3>CMO:</h3>
                    </div>
                    <p>A unique fatty acid referred to as the WD-40 of joint lubrication to relieve and lubricate the joints</p>
                </div>

                <div className="product--box">
                    <img className="product--img" src={product7} alt="" />
                    <div className="flex icon--title--flex">
                        <img className="product--icon" src={product_icon3} alt="" />
                        <h3>Lipase:</h3>
                    </div>
                    <p>An enzyme that helps the ensure the CMO is more fully absorbed by the joints for improved lubrication</p>
                </div>

            </div>

            <a className="btn buynow--btn" href="#">Buy now</a>

        </div>
    </div>
  )
}

export default Products
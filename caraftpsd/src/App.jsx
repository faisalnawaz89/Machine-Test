import React from 'react'

import Navbar from './Components/Header/Navbar'
import HeroBanner from './Components/HeroSlider/HeroBanner'
import ProductCategory from './Components/Category/ProductCategory'
import FeaturedProduct from './Components/FeaturedProduct/FeaturedProduct'
import OurCustomer from './Components/OurCustomer/OurCustomer'
import OurNewsletter from './Components/OurNewsletter/OurNewsletter'
import Footer from './Components/Footer/Footer'
import Category from './Components/Category/Category'
import ProductHighlight from './Components/ProductHighlight/ProductHighlight'



const App = () => {
  return (
    <div className='wrapper'>
        <Navbar/>
        <HeroBanner/>
        <Category/>
        <ProductHighlight/>
        <FeaturedProduct/>
        <OurCustomer/>
        <OurNewsletter/>
        <Footer/>
    </div>
  )
}
      
export default App
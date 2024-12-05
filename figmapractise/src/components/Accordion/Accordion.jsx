import React, { useState } from 'react'
import './Accordion.css'
import { accordion } from './AccordionData'
import company_bg from '../../assets/abstract_bg.png'
import company_main_img from '../../assets/work_img-1.png'

const Accordion = () => {

//   const [accordionData, setAccordionData] = useState(accordionData[0])

  return (
    <div className="container">
        <div className="grid work--info">
            <div className='accordion accordion-block'>
                {accordion.map((data,index)=>{
                    return(
                        <>
                        <div key={index} className="accordion-panel">
                            <h3>{data.title} <span>+</span></h3>
                            <p>{data.content}</p>
                        </div>
                        </>
                    )
                })}
            </div>
            <div className="accordion-images">
                <div className="company-img">
                    <div className="big--title">
                        <h3>Product</h3>
                        <h3 className='left--space'>development</h3>
                    </div>
                    <div className="company-img-container">
                        <img className="company-img-bg" src={company_bg} alt="" />
                        <img className="company-main-img" src={company_main_img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Accordion
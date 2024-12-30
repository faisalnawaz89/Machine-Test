import React from 'react'
import './OurCauses.css'
import cause_img_1 from '../../Assets/cause-img-1.jpg'
import cause_img_2 from '../../Assets/cause-img-2.jpg'
import cause_img_3 from '../../Assets/cause-img-3.jpg'

const OurCauses = () => {
  return (
    <div className='ourcauses our--causes'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>Our Causes</h2>
            </div>
            <div className="flex space--between cause--cards">
                <div className="cause--inner-card">
                    <img src={cause_img_1} alt="" />
                    <div className="cause--card--title--info">
                        <div className="page--subtitle">
                            <h4>Children Education</h4>
                            <p>Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito</p>
                            <span className='progress progress--bar'><span className='w80'></span></span>
                            <div className="flex space--between cause--data">
                                <h5><strong>Raised: </strong>$18,500</h5>
                                <h5><strong>Goal: </strong>$32,000</h5>
                            </div>
                        </div>
                    </div>
                    <div className="cta--btn"><a className="secondary--btn" href="#">Donate now</a></div>
                </div>
                <div className="cause--inner-card">
                    <img src={cause_img_2} alt="" />
                    <div className="cause--card--title--info">
                        <div className="page--subtitle">
                            <h4>Poverty Development</h4>
                            <p>Sed leo nisl, posuere at molestie ac, suscipit auctor mauris. Etiam quis metus tempor</p>
                            <span className='progress progress--bar'><span className='w50'></span></span>
                            <div className="flex space--between cause--data">
                                <h5><strong>Raised: </strong>$27,600</h5>
                                <h5><strong>Goal: </strong>$60,000</h5>
                            </div>
                        </div>
                    </div>
                    <div className="cta--btn"><a className="secondary--btn" href="#">Donate now</a></div>
                </div>
                <div className="cause--inner-card">
                    <img src={cause_img_3} alt="" />
                    <div className="cause--card--title--info">
                        <div className="page--subtitle">
                            <h4>Supply drinking water</h4>
                            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus</p>
                            <span className='progress progress--bar'><span className='w90'></span></span>
                            <div className="flex space--between cause--data">
                                <h5><strong>Raised: </strong>$84,600</h5>
                                <h5><strong>Goal: </strong>$100,000</h5>
                            </div>
                        </div>
                    </div>
                    <div className="cta--btn"><a className="secondary--btn" href="#">Donate now</a></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurCauses

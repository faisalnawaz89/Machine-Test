import React from 'react'
import './CovidCase.css'
import case1 from '../Assets/case1.jpg'
import case2 from '../Assets/case2.jpg'
import case3 from '../Assets/case3.jpg'

const CovidCase = () => {
  return (
    <div className='covidcase covid-case'>
        <div className="corona--prevent--heading">
            <h3>Coronavirus Cases</h3>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
        </div>
        <div className="grid case--container">
            <div className="case--container-box">
                <div className="img-overlay">
                    <img src={case1} alt="" />
                    <div className="cta--btn">
                        <a className="btn--red" href="#">Read More</a>
                    </div>
                </div>
                <h4>Case 01</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
            </div>
            <div className="case--container-box">
                <div className="img-overlay">
                    <img src={case2} alt="" />
                    <div className="cta--btn">
                        <a className="btn--red" href="#">Read More</a>
                    </div>
                </div>
                <h4>Case 02</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
            </div>
            <div className="case--container-box">
                <div className="img-overlay">
                    <img src={case3} alt="" />
                    <div className="cta--btn">
                        <a className="btn--red" href="#">Read More</a>
                    </div>
                </div>
                <h4>Case 03</h4>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
            </div>
        </div>
    </div>
  )
}

export default CovidCase
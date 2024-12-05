import React from 'react'
import './ClientsSays.css'
import client_img_1 from '../Assets/client-img-1.jpg'
import client_img_2 from '../Assets/client-img-2.jpg'
import client_img_3 from '../Assets/client-img-3.jpg'

const ClientsSays = () => {
  return (
    <div className='clientsays client--says'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>what is says our clients</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing copy</p>
            </div>
            <div className="grid client--says--block">
                <div className="client--says--img">
                    <img src={client_img_1} alt="" />
                </div>
                <div className="client--says--title">
                  <h5>exercitation</h5>
                  <p>ipsum dolor sit amet, consectetur adipiscing elit, sed  veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                </div>
            </div>
            <div className="grid client--says--block">
                <div className="client--says--img">
                    <img src={client_img_2} alt="" />
                </div>
                <div className="client--says--title">
                  <h5>exercitation</h5>
                  <p>ipsum dolor sit amet, consectetur adipiscing elit, sed  veniam, quis nostrud 
                  exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                </div>
            </div>
            <div className="grid client--says--block">
                <div className="client--says--img">
                    <img src={client_img_3} alt="" />
                </div>
                <div className="client--says--title">
                    <h5>exercitation</h5>
                    <p>ipsum dolor sit amet, consectetur adipiscing elit, sed  veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut reprehenderit in voluptate velit</p>
                </div>
            </div>
            <div className="grid client--says--block">
                <div className="cta--btn">
                    <a className="primary--btn" href="#">Read More</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ClientsSays
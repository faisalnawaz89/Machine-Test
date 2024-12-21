import React from 'react'
import './OpeningJobs.css'

const OpeningJobs = () => {
  return (
    <div className='openingjob opening--job'>
        <div className="bg">
            <div className="overlay"></div>
            <div className="container">
                <div className="grid space--between opening--job--title--block">
                    <div className="opening--title">
                        <h3>Over 10k opening jobs</h3>
                        <p>If you are looking for free HTML templates, you may visit Tooplate website. If you need a collection of free templates, you can visit Too CSS website.</p>
                    </div>
                    <div class="flex middle--box--btn">
                        <div class="cta--btn">
                            <a class="border--btn" href="#">Create an account</a>
                            <a class="liner--btn" href="#">Post a job</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OpeningJobs
import React from 'react'
import './FeaturedJobs.css'
import JobInformation from './JobInformation'
import google_img from '../../Assets/google.png'
import apple_img from '../../Assets/apple.png'
import meta_img from '../../Assets/meta.png'
import slack_img from '../../Assets/slack.png'
import uxdev_img from '../../Assets/creative-market.png'
import job_highlight_img from '../../Assets/featured-job-img-1.jpg'


const FeaturedJobs = () => {
  return (
    <div className="featuredjob featured--job">
        <div className="pagetitle page--title">
            <h2>Featured Jobs</h2>
            <p><strong>Over 10k opening jobs</strong> Feel free to download and use our free HTML templates from Tooplate website.</p>
        </div>

        <div className="featured--job--row">
            <div className="container featured--job--row--inner">
                <JobInformation 
                companyImg={google_img} 
                jobTitle={'Technical Lead'} 
                jobLocation={'Kuala, Malaysia'} 
                jobHours={'10 hours ago'} 
                jobSalary={'20k'}
                jobType={'Internship'}
                jobMode={'Freelance'}/>

                <JobInformation 
                companyImg={apple_img} 
                jobTitle={'Business Director'} 
                jobLocation={'California, USA'} 
                jobHours={'1 day ago'} 
                jobSalary={'90k'}
                jobType={'Senior'}
                jobMode={'Full Time'}/>

                <JobInformation 
                companyImg={meta_img} 
                jobTitle={'HR Manager'} 
                jobLocation={'Tower, Paris'} 
                jobHours={'22 hours ago'} 
                jobSalary={'50k'}
                jobType={'Junior'}
                jobMode={'Contract'}/>

                <JobInformation 
                companyImg={slack_img} 
                jobTitle={'Dev Ops'} 
                jobLocation={'Bangkok, Thailand'} 
                jobHours={'40 minutes ago'} 
                jobSalary={'80k'}
                jobType={'Senior'}
                jobMode={'Part Time'}/>

                <JobInformation 
                companyImg={uxdev_img} 
                jobTitle={'UX Designer'} 
                jobLocation={'New Zeland, Auckland'} 
                jobHours={'2 hours ago'} 
                jobSalary={'100k'}
                jobType={'Entry'}
                jobMode={'Remote'}/>
            </div>
        </div>


        <div className="job--highlight">
            <div className="container">
                <div className="grid space--between job--highlight--card">
                    <div className="job--highlight--card--title">
                        <div class="job--highlight--content">
                            <h2>Gotto helps you an easier way to get new job</h2>
                            <p>You are not allowed to redistribute the template ZIP file on any other template collection website. Please contact us for more info. Thank you.</p>
                            <div class="flex counter--number">
                                <div className="counter--no">
                                    <h4>12M</h4>
                                    <span>Daily active users</span>
                                </div>
                                <div className="counter--no">
                                    <h4>450k</h4>
                                    <span>Opening jobs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='job--highlight--card--image'>
                        <img src={job_highlight_img} alt="" />
                        <div className="job--highlight--card--play--btn">
                            <div className="card--play--btn">
                                <span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={48}
                                        height={48}
                                        viewBox="0 0 24 24"
                                        style={{ fill: "rgba(255, 255, 255, 1)", transform: "", msfilter: "" }}
                                        >
                                        <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedJobs
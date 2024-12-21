import React from 'react'
import './RecentJobs.css'
import recent_job_img_1 from '../../Assets/recent-job-img-1.jpg'
import recent_job_img_2 from '../../Assets/recent-job-img-2.jpg'
import recent_job_img_3 from '../../Assets/recent-job-img-3.jpg'
import recent_job_img_4 from '../../Assets/recent-job-img-4.jpg'
import recent_job_img_5 from '../../Assets/recent-job-img-5.jpg'
import recent_job_img_6 from '../../Assets/recent-job-img-6.jpg'
import salesforce_icon from '../../Assets/salesforce.png'
import spotify_icon from '../../Assets/spotify.png'
import twitter_icon from '../../Assets/twitter.png'
import yelp_icon from '../../Assets/yelp.png'
import paypal_icon from '../../Assets/paypal.png'
import envato_icon from '../../Assets/envato.png'
import RecentJobCard from './RecentJobCard'

const RecentJobs = () => {
  return (
    <div className='recentjob recent--job'>
        <div className="container">
            <div className="pagetitle page--title">
                <h2>Recent Jobs</h2>
                <p><strong>Over 10k opening jobs</strong> Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai</p>
            </div>

            <div className="grid space--between recent--job--conatiner">
                <RecentJobCard 
                rjMainImg={recent_job_img_1} 
                rjTitle={'Technical Lead'}
                rjCompanyIcon={salesforce_icon}
                rjCompanyTilte={'Salesforce'}
                rjTag1={'Internship'}
                rjTag2={'Freelance'}
                rjLoaction={'Kuala, Malaysia'}
                rjHours={'10 hours ago'}
                rjSalary={'$50k'}
                />

                <RecentJobCard 
                rjMainImg={recent_job_img_2} 
                rjTitle={'Marketing Assistant'}
                rjCompanyIcon={spotify_icon}
                rjCompanyTilte={'Spotify'}
                rjTag1={'Senior'}
                rjTag2={'Part Time'}
                rjLoaction={'California, USA'}
                rjHours={'8 days ago'}
                rjSalary={'$20k'}
                />

                <RecentJobCard 
                rjMainImg={recent_job_img_3} 
                rjTitle={'Programmer'}
                rjCompanyIcon={twitter_icon}
                rjCompanyTilte={'Twiter'}
                rjTag1={'Junior'}
                rjTag2={'Contract'}
                rjLoaction={'California, USA'}
                rjHours={'23 hours ago'}
                rjSalary={'$68k'}
                />

                <RecentJobCard 
                rjMainImg={recent_job_img_4} 
                rjTitle={'HR Manager'}
                rjCompanyIcon={yelp_icon}
                rjCompanyTilte={'Yelp'}
                rjTag1={'Junior'}
                rjTag2={'Contract'}
                rjLoaction={'California, USA'}
                rjHours={'15 hours ago'}
                rjSalary={'$35k - 45k'}
                />

                <RecentJobCard 
                rjMainImg={recent_job_img_5} 
                rjTitle={'Sales Representative'}
                rjCompanyIcon={paypal_icon}
                rjCompanyTilte={'Paypal'}
                rjTag1={'Junior'}
                rjTag2={'Contract'}
                rjLoaction={'Bangkok, Thailand'}
                rjHours={'30 mins ago'}
                rjSalary={'$20k - 35k'}
                />

                <RecentJobCard 
                rjMainImg={recent_job_img_6} 
                rjTitle={'Graphic Designer'}
                rjCompanyIcon={envato_icon}
                rjCompanyTilte={'Envato'}
                rjTag1={'Mid Level'}
                rjTag2={'Full Time'}
                rjLoaction={'Melbourne, Australia'}
                rjHours={'2 days ago'}
                rjSalary={'$20k'}
                />

            </div>

            <div class="cta--btn main--big--btn"><a class="orange--btn" href="#">Browse Job Listings</a></div>

        </div>
    </div>
  )
}

export default RecentJobs
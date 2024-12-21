import React from 'react'
import HeroBanner from '../Components/Home/HeroBanner/HeroBanner'
import BrowseCategory from '../Components/Home/BrowseCategory/BrowseCategory'
import FeaturedJobs from '../Components/Home/FeaturedJobs/FeaturedJobs'
import RecentJobs from '../Components/Home/RecentJobs/RecentJobs'
import HappyCustomers from '../Components/Home/HappyCustomers/HappyCustomers'
import OpeningJobs from '../Components/Home/OpeningJobs/OpeningJobs'

const HomePage = () => {
  return (
    <>
        <HeroBanner/>
        <BrowseCategory/>
        <FeaturedJobs/>
        <RecentJobs/>
        <HappyCustomers/>
        <OpeningJobs/>
    </>
  )
}

export default HomePage
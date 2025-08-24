import React from 'react'
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobLIstings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobLIstings isHome = {true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePage

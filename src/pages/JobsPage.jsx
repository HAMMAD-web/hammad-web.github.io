import React from 'react'
import JobListings from '../components/JobListings'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'

const JobsPage = () => {
  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/"
            className="text-indigo-500 hover:text-indigo-600 flex items-center">
            <FaArrowLeft className='mr-2' />
            Back to Home Page
          </Link>
        </div>
      </section>
      <section className='bg-blue-50 px-4 py-6'>
        <JobListings />
      </section>
    </>
  )
}

export default JobsPage

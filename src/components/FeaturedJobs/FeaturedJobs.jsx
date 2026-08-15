import React from 'react'
import JobsCard from '../JobsCard/JobsCard'
import jobs from '../../data/JobInfo'

const FeaturedJobs = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-700 flex items-center justify-center mb-10 mt-10">Featured Jobs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
     {jobs.slice(0, 6).map((job) => {
      return  <JobsCard key={job.id} job={job}/>
     })}
      
    </div>
    
    </div>
    
  )
}

export default FeaturedJobs

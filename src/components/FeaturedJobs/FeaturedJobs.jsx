import React from 'react'
import JobsCard from '../JobsCard/JobsCard'

const FeaturedJobs = () => {
  return (
    <div className="bg-gray-100 px-8 py-6">
      <h1 className="text-4xl font-bold text-blue-700 flex items-center justify-center mb-10">Featured Jobs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
      <JobsCard />
      <JobsCard />
      <JobsCard />
      <JobsCard />
    </div>
    
    </div>
    
  )
}

export default FeaturedJobs

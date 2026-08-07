import React from 'react'
import JobCard from './JobCard'


const JobsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
   <JobCard />
   <JobCard />
   <JobCard />
   <JobCard />
      
    </div>
  )
}

export default JobsGrid

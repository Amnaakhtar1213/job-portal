import React from 'react'
import JobCard from './JobCard'
import jobs from '../../data/JobInfo'


const JobsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
  {jobs.map((job) => {
   return <JobCard key={job.id} job={job}/>
  })}
      
    </div>
  )
}

export default JobsGrid

import React from 'react'
import EmptySavedJobs from './EmptySavedJobs'
import JobCard from '../Jobs/JobCard'

const SavedJobsGrid = ({savedJobs, setSavedJobs}) => {

 const removeJob = (jobId) => {
  setSavedJobs(savedJobs.filter((job) => job.id !== jobId))
 }

  return (
    <div>
      {savedJobs.length === 0 ? (
        <EmptySavedJobs />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
       {savedJobs.map((job) => 
      <JobCard job={job} 
      key={job.id} 
      removeJob={removeJob}/>)}
      </div>
      )}
    </div>
  )
}

export default SavedJobsGrid

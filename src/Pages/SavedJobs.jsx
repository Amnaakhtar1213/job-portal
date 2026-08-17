import React, { useState} from 'react'
import SavedJobsHead from '../components/savedJobs/SavedJobsHead'
import SavedJobsGrid from '../components/savedJobs/SavedJobsGrid'
import jobs from '../data/JobInfo'

const SavedJobs = () => {

  const alreadySaved = JSON.parse(localStorage.getItem("savedJobs")) || []

   // we filter all jobs first then chk is it already saved for filter job we use .filter() and for chking we used .include()

  const [savedJobs, setSavedJobs] = useState(jobs.filter((job) => alreadySaved.includes(job.id)))

  return (
    <div className="bg-purple-100 p-20 w-full min-h-screen">
       <SavedJobsHead savedJobs={savedJobs} />
      <SavedJobsGrid savedJobs={savedJobs} setSavedJobs={setSavedJobs}/>
    </div>
  )
}

export default SavedJobs

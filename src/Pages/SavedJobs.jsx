import React, { useState} from 'react'
import SavedJobsHead from '../components/savedJobs/SavedJobsHead'
import SavedJobsGrid from '../components/savedJobs/SavedJobsGrid'
import jobs from '../data/JobInfo'
import companies from '../data/CompanyInfo'
import SavedCompHead from '../components/SavedCompany/savedCompHead'
import SavedCompGrid from '../components/SavedCompany/SavedCompGrid'

const SavedJobs = () => {

  const alreadySaved = JSON.parse(localStorage.getItem("savedJobs")) || []

  const alreadySavedCompanies = JSON.parse(localStorage.getItem("savedCompanies")) || []

   // we filter all jobs first then chk is it already saved for filter job we use .filter() and for chking we used .include()

  const [savedJobs, setSavedJobs] = useState(jobs.filter((job) => alreadySaved.includes(job.id)))

  const [savedCompanies, setSavedCompanies] = useState(
    companies.filter((company) => alreadySavedCompanies.includes(company.id))
  )

  return (
    <div className="bg-purple-100 p-20 w-full min-h-screen">
      <SavedJobsHead savedJobs={savedJobs} />
      <SavedJobsGrid savedJobs={savedJobs} setSavedJobs={setSavedJobs}/>
      <SavedCompHead savedCompanies={savedCompanies}/>
      <SavedCompGrid savedCompanies={savedCompanies} setSavedCompanies={setSavedCompanies}/>
    </div>
  )
}

export default SavedJobs

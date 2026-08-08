import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import jobs from '../data/JobInfo'
import JobHead from '../components/JobDetail/JobHead'
import Jobs from './Jobs'
import JobSummary from '../components/JobDetail/JobSummary'
import JobDesc from '../components/JobDetail/JobDesc'
import Responsibity from '../components/JobDetail/Responsibity'
import Requirment from '../components/JobDetail/Requirment'
import Qualification from '../components/JobDetail/Qualification'
import Skills from '../components/JobDetail/Skills'
import Benefits from '../components/JobDetail/Benefits'
import CompanyInfo from '../components/JobDetail/CompanyInfo'
import SimilarJobs from '../components/JobDetail/SimilarJobs'
import BreadCrumbs from '../components/JobDetail/BreadCrumbs'

const JobsDetails = () => {
  const { id } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  const job = jobs.find((job) => job.id === Number(id))

  if(!job) {
    return <h1>Job not found!</h1>
  }
  return (
    <div>
      <BreadCrumbs job={job}/>
    <JobHead job={job}/>
    <JobSummary job={job}/>
    <JobDesc job={job}/>
    <Responsibity job={job}/>
    <Requirment job={job}/>
    <Qualification job={job}/>
    <Skills job={job}/>
    <Benefits job={job}/>
    <CompanyInfo job={job}/>
    <SimilarJobs job={job}/>
    </div>
  )
}

export default JobsDetails

import React, { useState } from 'react'
import MyApplicHead from '../components/MyApplications/MyApplicHead'
import MyApplicCard from '../components/MyApplications/MyApplicCard'
import MyApplicGrid from '../components/MyApplications/MyApplicGrid'
import jobs from '../data/JobInfo'

const MyApplications = () => {

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("applicationData")) || []
  )

  const handleWithdraw = (jobId) => {
    const updateData = data.filter((application) => application.jobId !== jobId)
    setData(updateData)
    localStorage.setItem("applicationData", JSON.stringify(updateData))
  }
   

  const appliedJobs = data.map((application) => {
   const job = jobs.find((job) => job.id === application.jobId)
   return {
    ...job,
    jobId: application.jobId,
    status: application.status,
    appliedDate: application.appliedDate
   }
  })

  return (
    <div className="p-16">
      <MyApplicHead />
      <MyApplicGrid appliedJobs={appliedJobs} handleWithdraw={handleWithdraw}/>
    </div>
  )
}

export default MyApplications

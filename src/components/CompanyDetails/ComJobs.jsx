import React from 'react'
import JobsCard from '../JobsCard/JobsCard'
import jobs from '../../data/JobInfo'

const ComJobs = ({company}) => {

  const companyJob = jobs.find((job) => job.company === company.name)

  console.log("Current company:", company.name)
console.log("Company job:", companyJob)

  return (
    <div className="mt-8 bg-gray-200 rounded-xl px-8 py-6  w-[90%] mx-auto">
    <h1 className="text-blue-700 text-2xl font-bold text-center border-b-2 pb-2">Company jobs</h1>
    <p className="text-gray-500 text-center mt-4 text-lg">Explore {company.openPositions} open positions at {company.name}
</p>
<div className="grid grid-cols-1 gap-2 md:grid-col-2 md:gap-6 lg:grid-cols-2 lg:gap-8 mt-2 lg:mt-6">
  {companyJob && <JobsCard job={companyJob}/>
}
</div>
</div>
  )
}

export default ComJobs

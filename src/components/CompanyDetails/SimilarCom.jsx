import React from 'react'
import jobs from '../../data/JobInfo'
import JobsCard from '../JobsCard/JobsCard'

const SimilarCom = () => {
  return (
    <div className="bg-gray-200 px-20 py-10 w-[90%] mx-auto rounded-xl mt-6">
      <h1 className="text-blue-700 text-2xl font-bold border-b-2 pb-2 text-center">Similar Jobs</h1>
      <p className="text-gray-500 text-center mt-3 text-lg">Jobs you may also be interested in</p>
      <div className="grid grid-cols-1 gap-2 md:grid-col-2 md:gap-6 lg:grid-cols-2 lg:gap-8 mt-2 lg:mt-6">
  {jobs.map((job) => 
<JobsCard job={job} key={job.id}/>)
}
</div>
    </div>
  )
}

export default SimilarCom

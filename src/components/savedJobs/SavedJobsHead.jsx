import React from 'react'
import { Link } from 'react-router-dom'

const SavedJobsHead = ({savedJobs}) => {
  return (

    <div className="flex flex-col items-center py-6">

  <div className="flex items-center gap-4 text-purple-700">
    <i className="fa-solid fa-heart text-xl"></i>

    <h1 className="text-2xl md:text-4xl font-bold">
      Saved Jobs
    </h1>

    <i className="fa-solid fa-heart text-xl"></i>
  </div>

  <p className="text-gray-500 text-center mt-3">
    Jobs you've saved to apply for later.
  </p>

  <h3 className="text-blue-700 mt-5 font-semibold text-xl">
    {savedJobs.length} {savedJobs.length === 1 ? "job" : "jobs"} saved
  </h3>

  <Link to="/jobs" className="group bg-purple-700 text-white px-4 py-1 rounded-xl mt-8 shadow-lg shadow-purple-400"><i className="fa-solid fa-arrow-left mr-2 group-hover:animate-[rightLeft_2s_ease-in-out_infinite]"></i> Browse jobs</Link>

</div>
  )
}

export default SavedJobsHead

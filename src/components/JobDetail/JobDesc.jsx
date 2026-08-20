import React from 'react'

const JobDesc = ({job}) => {
  return (
    <div>
      <div className="max-w-7xl mx-auto bg-white border border-blue-200 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-blue-300 mt-6">
  <h2 className="text-blue-700 text-4xl font-bold text-center">Job Description</h2>

  <p className="text-gray-500 mt-4 text-left leading-7">{job.description}</p>
</div>
    </div>
  )
}

export default JobDesc

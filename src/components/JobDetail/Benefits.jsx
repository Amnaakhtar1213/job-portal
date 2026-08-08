import React from 'react'

const Benefits = ({job}) => {
  return (
    <div className="max-w-7xl mx-auto bg-white border border-blue-200 rounded-3xl p-8 shadow-sm mt-6">
      <h1 className="text-blue-700 text-4xl font-bold text-center">Why Join Us</h1>
     <p className="text-gray-500 mt-4 text-left leading-7">{job.description}</p>
    </div>
  )
}

export default Benefits

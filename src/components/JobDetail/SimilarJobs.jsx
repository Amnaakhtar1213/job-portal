 import React from 'react'
import jobs from '../../data/JobInfo'
import { Link } from 'react-router-dom'

const SimilarJobs = ({ job }) => {

  const similarJobs = jobs
    .filter((item) => item.id !== job.id)
    .slice(0, 3)
 
  return (
    <div className="max-w-7xl mx-auto bg-white border border-blue-200 rounded-3xl p-8 shadow-sm mt-6">

      <h2 className="text-blue-700 text-4xl font-bold text-center">
        Similar Jobs
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

        {similarJobs.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 shadow-lg shadow-blue-300 rounded-2xl p-5 hover:-translate-y-2 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>

            <p className="text-blue-700 mt-1">
              {item.company}
            </p>

            <p className="text-gray-500 mt-2">
              📍 {item.location}
            </p>

            <p className="text-gray-500 mt-1">
              {item.type} • {item.workType}
            </p>

            <p className="text-gray-700 font-medium mt-3">
              {item.salary}
            </p>
            <Link to={`/jobs/${item.id}`}>
             <button className="bg-blue-700 text-white px-4 py-2 rounded-xl font-bold mt-4 hover:shadow-lg hover:shadow-blue-500 hover:-translate-y-2 transition-all duration-300">View Job</button>
            </Link>
            
          </div>
        ))}
       

      </div>

    </div>
  )
}

export default SimilarJobs
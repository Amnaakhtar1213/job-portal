import React from 'react'

const JobSummary = ({job}) => {
  return (
    <div className="max-w-7xl mx-auto border border-blue-300 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-blue-300 flex flex-col gap-6">
      <h1 className="text-blue-700 font-bold text-3xl text-center ">JOB SUMMARY</h1>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col gap-2 p-2 ">
          <div className="flex flex-row gap-2 items-center ">
            <i className="fa-solid fa-location-dot text-red-600 text-lg"></i>
            <span className="text-blue-600 font-semibold text-xl">Location</span>
          </div>
          <p className="text-gray-500">{job.location}</p>
        </div>

 <div className="flex flex-col gap-2 p-2 ">
          <div className="flex flex-row gap-2 items-center ">
           <i className="fa-solid fa-briefcase text-amber-900 text-lg"></i>
            <span className="text-blue-600 font-semibold text-xl">Job Type</span>
          </div>
          <p className="text-gray-500">{job.type}</p>
        </div>

           <div className="flex flex-col gap-2 p-2 ">
          <div className="flex flex-row gap-2 items-center ">
           <i className="fa-solid fa-globe text-blue-400  text-lg"></i>
            <span className="text-blue-600 font-semibold text-xl">Work Type</span>
          </div>
          <p className="text-gray-500">{job.workType}</p>
        </div>

          <div className="flex flex-col gap-2 p-2 ">
          <div className="flex flex-row gap-2 items-center ">
            <i className="fa-solid fa-sack-dollar text-amber-400 text-lg"></i>
            <span className="text-blue-600 font-semibold text-xl">Salary</span>
          </div>
          <p className="text-gray-500">{job.salary}</p>
        </div>

          <div className="flex flex-col gap-2 p-2 ">
          <div className="flex flex-row gap-2 items-center ">
            <i className="fa-regular fa-calendar-days text-cyan-400 text-lg"></i>
            <span className="text-blue-600 font-semibold text-xl">Posted</span>
          </div>
          <p className="text-gray-500">{job.posted}</p>
        </div>

          <div className="flex flex-col gap-2 p-2 ">
          <div className="flex flex-row gap-2 items-center ">
          <i className="fa-regular fa-clock text-red-600 text-lg"></i>
            <span className="text-blue-600 font-semibold text-xl">Deadline</span>
          </div>
          <p className="text-gray-500">{job.deadline}</p>
        </div>
         
      </div>
    </div>
  )
}

export default JobSummary

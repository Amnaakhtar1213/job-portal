import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const JobCard = ({job, removeJob}) => {

   

  const [saved, setSaved] = useState(() => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || []

    return savedJobs.includes(job.id)
  })

  const handleSaved = () => {

    const latestSaved = 
    JSON.parse(localStorage.getItem("savedJobs")) || []

    if(latestSaved.includes(job.id)){

         const updatedJobs = 
         latestSaved.filter((id) => id !== job.id)

      localStorage.setItem("savedJobs", JSON.stringify(updatedJobs))

      setSaved(false)

      if(removeJob){
             removeJob(job.id)
    }
     } else {

      const updatedSaved = [...latestSaved, job.id]
      localStorage.setItem("savedJobs", JSON.stringify(updatedSaved))

      setSaved(true)
     }

  }
  return (
    <div className="border border-indigo-400 w-full px-4 py-4 rounded-xl bg-white mt-6">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-gray-600 font-semibold text-xl"> <i className="fa-solid fa-g text-xl font-bold 
   bg-linear-to-r from-blue-500 via-red-700 via-yellow-500 to-green-500 bg-clip-text text-transparent">
</i> {job.company}</h1>
       {saved ? (
        <i onClick={handleSaved}className="fa-solid fa-heart text-purple-600"></i>
      ) : (
      <i onClick={handleSaved} className="fa-solid fa-heart text-gray-400"></i>)}
      </div>
      
      <h1 className="text-xl font-bold mt-4 leading-tight">{job.title}</h1>
      <div className="mt-8">
        <h2> <i className="fa-solid fa-location-dot text-red-600"></i> {job.location}</h2>
       <div className="flex items-center gap-3 mt-3 flex-wrap">
        <span className="bg-purple-200 text-purple-700 px-2 py-1 rounded-2xl hover:bg-purple-300 transition-all duration-300 cursor-pointer"><i className="fa-solid fa-briefcase text-orange-800"></i> {" "} {job.type}</span>
        <span className="bg-purple-200 text-purple-700 px-2 py-1 rounded-2xl  hover:bg-purple-300 transition-all duration-300 cursor-pointer"><i className="fa-solid fa-circle text-xs text-purple-500"></i> {" "} {job.workType}</span>
       </div>
       <h2 className="mt-2"><i className="fa-solid fa-sack-dollar text-amber-400"></i> {job.salary} </h2>
      </div>
      <div className="flex flex-row gap-4 mt-2 flex-wrap">
       {job.skills.map((skill) => {
         return <span key={skill}
           className="bg-indigo-200 text-indigo-700 px-2 py-1 rounded-2xl cursor-pointer">{skill}</span>
       })}
      
      </div>
      <div className="flex gap-3 mt-6 ">
        <h2 className="text-xs text-gray-700"> 🕒 <span className="text-indigo-900 font-semibold">Post Date:</span> {job.posted}</h2>
        <h2 className="text-xs text-gray-700">⏰ <span className="text-indigo-900 font-semibold">Deadline:</span> {job.deadline}</h2>
      </div>
      <div className="w-full mt-6 text-center">
        <Link 
        to={`/jobs/${job.id}`} 
        className="bg-indigo-500 hover:shadow-lg hover:shadow-indigo-400 hover:-translate-y-2 transition-all duration-300 text-white px-4 py-2 rounded-xl mt-4 font-bold w-full">View Details
        </Link>
      </div>
    </div>
  )
}

export default JobCard

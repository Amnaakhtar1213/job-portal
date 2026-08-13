import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const JobHead = ({job}) => {
const navigate = useNavigate()

  const applications = JSON.parse(localStorage.getItem("applicationData")) || []

  const isApplied = applications.some(application => application.jobId === job.id )

  
const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || []
   
   const [isSave, setIsSave] = useState(savedJobs.includes(job.id))


  const saveData = () => {
    const savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || []

   const alreadySaved = savedJobs.includes(job.id)

   if(alreadySaved){
     const updatedSavedJobs = savedJobs.filter(
      savedJob => savedJob !== job.id)

   localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs)) 
    setIsSave(false)
       } else { 

 const updatedSavedJobs = [...savedJobs, job.id]
 localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs))
    setIsSave(true)   
      }
       
  }
   const saveJob = () => {
    saveData()
   } 

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="w-full mx-auto flex flex-row items-start justify-between gap-8 p-8 shadow shadow-blue-300">
        <div className="w-3/4 flex flex-row gap-20 items-start p-8 ">
          <div className="bg-blue-200 w-8 h-8 items-center flex justify-center rounded-full text-blue-500 font-bold">NX</div>
          <div className="">
            <h2 className="text-gray-900 font-bold text-3xl">{job.title}</h2>
            <h1 className="text-blue-700 text-xl font-semibold mt-2">NEXORA</h1>
            <div className="flex gap-2">
              <div>
                <i className="fa-solid fa-location-dot text-red-600"></i>
              </div>
                 <h3 className="text-gray-500 text-lg">{job.location}</h3>
            </div>
            <div className="flex flex-row gap-4 mt-4">
              <span className="bg-blue-200 text-blue-700 border border-blue-400 rounded-2xl px-3 py-1 font-semibold hover:shadow hover:shadow-blue-400 cursor-pointer hover:-translate-y-2 transitio-all duration-300">{job.type}</span>
               <span className="bg-blue-200 text-blue-700 border border-blue-400 rounded-2xl px-3 py-1 font-semibold hover:shadow hover:shadow-blue-400 cursor-pointer hover:-translate-y-2 transitio-all duration-300">{job.workType}</span>
                <span className="bg-blue-200 text-blue-700 border border-blue-400 rounded-2xl px-3 py-1 font-semibold hover:shadow hover:shadow-blue-400 cursor-pointer hover:-translate-y-2 transitio-all duration-300">{job.salary}</span>
            </div>
          </div>
        </div>

        <div className="w-1/4 flex flex-row gap-4">
          <button onClick = {() => 
            {if(!isApplied){
              navigate(`/loggin/${job.id}`)
            }}
          } className="text-blue-700 bg-white border border-blue-200 px-3 py-2 rounded-3xl font-semibold hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100">{isApplied ? "✓ Applied" : "Apply Now"}</button>
        
          <button 
          onClick={saveJob}
 className={`px-4 py-2 rounded-2xl font-semibold transition-all duration-300 ${
    isSave
      ? "bg-blue-100 text-blue-700 border border-blue-300"
      : "bg-blue-700 text-white hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-100"
  }`}
>
  {isSave ? "✓ Saved" : "Save Job"}
</button>
        </div>
      </div>
      </div>
    
  )
}

export default JobHead

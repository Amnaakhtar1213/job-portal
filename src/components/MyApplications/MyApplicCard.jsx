import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const MyApplicCard = ({appliedJob, handleWithdraw}) => {
  const navigate = useNavigate()
  return (
    <div>
   <div>
      <div className="bg-gray-200 rounded-xl p-10 flex flex-col items-center shadow-xl shadow-blue-300 mt-10 hover:-translate-y-2 transition-all duration-300">
        <i className="text-blue-400 text-3xl fa-solid fa-building"></i>
        <h1 className="text-blue-700 text-2xl font-semibold mt-4">{appliedJob.company}</h1>
        <h1 className="text-gray-600 text-xl font-semibold mt-4">{appliedJob.title}</h1>
        <h3 className="text-blue-700 font-semibold mt-4 text-lg">Salary: <span className="text-gray-600 ml-4">{appliedJob.salary}</span></h3>
         <h3 className="text-blue-700 font-semibold text-lg">Country: <span className="text-gray-600 ml-4">{appliedJob.location}</span></h3>
        
        <h3 className="text-blue-700 font-semibold text-lg">Status: <span className="text-gray-600 ml-4">{appliedJob.status}</span></h3>

        <h3 className="text-blue-700 font-semibold text-lg">Applied Date: <span className="text-gray-600 ml-4">{appliedJob.appliedDate}</span></h3>
       
        <button onClick={() => navigate(`/company-detail/${appliedJob.id}`)}  
        className="group bg-indigo-700 text-white px-4 py-1 rounded-xl mt-6 hover:shadow-xl hover:shadow-indigo-300 cursor-pointer">View Jobs <i className="fa-solid fa-arrow-right ml-2 group-hover:animate-[leftRight_2s_ease-in-out_infinite]"></i></button>
        <button
  onClick={() => {
     console.log("Withdraw jobId:", appliedJob.jobId)
    handleWithdraw(appliedJob.jobId)}}
  className="bg-red-600 text-white px-4 py-1 rounded-xl mt-3 hover:shadow-xl hover:shadow-red-300 cursor-pointer"
>
  Withdraw Application
</button>
        
      </div>
    </div>
    </div>
  
  )
}

export default MyApplicCard

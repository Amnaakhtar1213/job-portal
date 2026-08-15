import React from 'react'
import companies from '../../data/CompanyInfo'
import { Navigate, useNavigate } from 'react-router-dom'

const CompanyCard = ({company}) => {

  const navigate = useNavigate()
  return (
    <div className="hover:-translate-y-1 transition-all duration-300 flex flex-col items-center py-8 bg-white w-64 h-72 shadow-md hover:shadow-xl rounded-3xl mt-8">
   <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold">
  {company.name.charAt(0)}
</div>
   <h1 className="text-gray-900 text-xl font-semibold mt-2">{company.name}</h1>
   <div className="mt-2 flex items-center flex-row gap-2">
     <i className="fa-solid fa-star text-yellow-500"></i>
     <p className="text-gray-500">{company.rating} Rating</p>
   </div>
<p className="text-gray-700 mt-4">{company.openPositions} + open Position</p>
 <div className="flex items-center justify-center mt-6">
       <button onClick={() => navigate("/jobs")} className="group flex flex-row gap-4 items-center justify-center bg-blue-700 hover:bg-blue-500 text-white px-6 rounded-2xl py-1 mt-2 hover:-translate-y-1 transition transform duration-300 ease-in-out tracking-wide [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)] animate-fadeIn"><span>Explore</span><i className="fa-solid fa-arrow-right group-hover:animate-[leftRight_2s_ease-in-out_infinite]"></i></button>
</div>
   
    
    </div>
  )
}

export default CompanyCard

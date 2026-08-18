import React from 'react'
import { useNavigate } from 'react-router-dom'
import companies from '../../data/CompanyInfo'



const CompCard = ({company}) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="bg-gray-200 rounded-xl p-10 flex flex-col items-center shadow-xl shadow-indigo-300 mt-10 hover:-translate-y-2 transition-all duration-300">
        <i className="text-blue-400 text-3xl fa-solid fa-building"></i>
        <h1 className="text-indigo-700 text-2xl font-semibold mt-4">{company.name}</h1>
        <div className="flex items-center gap-4">
          <i className="text-yellow-400 fa-solid fa-star"></i>
          <h2 className="text-gray-500">{company.rating}</h2>
        </div>
        <h3 className="text-gray-700 mt-2">{company.openPosition}</h3>
        <button onClick={() => navigate('/jobs')} 
        className="group bg-indigo-700 text-white px-4 py-1 rounded-xl mt-6 hover:shadow-xl hover:shadow-indigo-300 cursor-pointer">View Jobs <i className="fa-solid fa-arrow-right ml-2 group-hover:animate-[leftRight_2s_ease-in-out_infinite]"></i></button>
      </div>
    </div>
  )
}

export default CompCard


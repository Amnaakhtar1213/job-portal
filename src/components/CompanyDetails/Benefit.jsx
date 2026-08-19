import React from 'react'

const Benefit = () => {
  return (
    <div className="bg-white px-20 py-6 mt-6  w-[90%] mx-auto">
      <h1 className="text-blue-700 font-bold text-2xl border-b-2 pb-2 text-center">Benefits</h1>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 mt-6">
        <div className="flex items-center  gap-4 bg-gray-200 w-50 px-4 py-1 rounded-2xl hover:-translate-y-2 transition-all duration-200">
          <i className="fa-solid fa-check text-green-600 text-xl"></i>
          <h1 className="text-gray-400">Health & wellness</h1>
        </div>
         <div className="flex items-center  gap-4  bg-amber-100 w-50 px-4 py-1 rounded-2xl hover:-translate-y-2 transition-all duration-200">
          <i className="fa-solid fa-check text-green-600 text-xl"></i>
          <h1 className="text-amber-400">Flexible work options</h1>
        </div>
         <div className="flex items-center  gap-4  bg-indigo-100 w-50 px-4 py-1 rounded-2xl hover:-translate-y-2 transition-all duration-200">
          <i className="fa-solid fa-check text-green-600 text-xl"></i>
          <h1 className="text-indigo-400">Learning & development</h1>
        </div>
         <div className="flex items-center  gap-4  bg-blue-100 w-50 px-4 py-1 rounded-2xl hover:-translate-y-2 transition-all duration-200">
          <i className="fa-solid fa-check text-green-600 text-xl"></i>
          <h1 className="text-blue-400">Parental leave</h1>
        </div>
         <div className="flex items-center  gap-4  bg-cyan-100 w-50 px-4 py-1 rounded-2xl hover:-translate-y-2 transition-all duration-200">
          <i className="fa-solid fa-check text-green-600 text-xl"></i>
          <h1 className="text-cyan-400">Employee wellness</h1>
        </div>
      </div>
    </div>
  )
}

export default Benefit

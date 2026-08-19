import React from 'react'

const ComOverview = () => {
  return (
    <div className="mt-6 bg-white px-8 py-10 rounded-xl shadow-lg shadow-blue-200 w-[90%] mx-auto hover:-translate-y-2 transition-all duration-300">
      <h1 className="text-2xl font-bold text-blue-700 border-b-2 p-2 text-center">Company Overview </h1>
     <div className="grid grid-cols-1 md:grid-cols-4 items-center justify-center px-30 mt-6">
       <div className=" bg-purple-100 w-40 p-4 rounded-xl text-center hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-purple-300 border border-purple-300">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-location-dot text-red-700"></i>
          <h2 className="text-gray-700 text-lg">Location</h2>
        </div>
        <p className="text-gray-600">Mountain View</p>
      </div>
       <div className="mt-4 bg-green-100 w-40 p-4 rounded-xl text-center hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-green-300 border border-green-300">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-location-dot text-red-700"></i>
          <h2 className="text-gray-700 text-lg">Location</h2>
        </div>
        <p className="text-gray-600">Mountain View</p>
      </div>
       <div className="mt-4 bg-indigo-100 w-40 p-4 rounded-xl text-center hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-300 border border-indigo-300">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-location-dot text-red-700"></i>
          <h2 className="text-gray-700 text-lg">Location</h2>
        </div>
        <p className="text-gray-600">Mountain View</p>
      </div>
       <div className="mt-4 bg-pink-100 w-40 p-4 rounded-xl text-center hover:scale-110 transition-all duration-300 hover:shadow-xl hover:shadow-pink-300 border border-pink-300">
        <div className="flex items-center gap-3">
          <i className="fa-solid fa-location-dot text-red-700"></i>
          <h2 className="text-gray-700 text-lg">Location</h2>
        </div>
        <p className="text-gray-600">Mountain View</p>
      </div>
     </div>
    </div>
  )
}

export default ComOverview

import React from 'react'

const JobCard = () => {
  return (
    <div className="border border-indigo-400 w-full px-4 py-2 rounded-xl bg-white mt-6">
      <div className="flex flex-row items-center justify-between">
        <h1 className="text-gray-600 font-semibold text-xl"> <i className="fa-solid fa-g text-xl font-bold 
   bg-linear-to-r from-blue-500 via-red-700 via-yellow-500 to-green-500 bg-clip-text text-transparent">
</i> Google</h1>
       <i className="fa-solid fa-heart text-gray-400"></i>
      </div>
      
      <h1 className="text-xl font-bold mt-4 leading-tight">Senior Frontend Developer</h1>
      <div className="mt-8">
        <h2> <i className="fa-solid fa-location-dot text-red-600"></i> Sans-Fransisco, USA</h2>
       <div className="flex items-center gap-3 mt-3 flex-wrap">
        <span className="bg-purple-200 text-purple-700 px-2 py-1 rounded-2xl hover:bg-purple-300 transition-all duration-300 cursor-pointer"><i className="fa-solid fa-briefcase text-orange-800"></i> Full Time</span>
        <span className="bg-purple-200 text-purple-700 px-2 py-1 rounded-2xl  hover:bg-purple-300 transition-all duration-300 cursor-pointer"><i className="fa-solid fa-circle text-xs text-purple-500"></i> Remote</span>
       </div>
       <h2 className="mt-2"><i className="fa-solid fa-sack-dollar text-amber-400"></i> $90k–$120k </h2>
      </div>
      <div className="flex flex-row gap-4 mt-2">
        <span className="bg-indigo-200 text-indigo-700 px-2 py-1 rounded-2xl cursor-pointer">React</span>
        <span className="bg-indigo-200 text-indigo-700 px-2 py-1 rounded-2xl cursor-pointer">Tailwind</span>
        <span className="bg-indigo-200 text-indigo-700 px-2 py-1 rounded-2xl cursor-pointer">TypeScript</span>
      </div>
      <div className="flex gap-2 mt-8 ">
        <h2 className="text-xs text-gray-700"> 🕒 Post 3 Days ago</h2>
        <h2 className="text-xs text-gray-700">⏰ Apply before: Aug 30</h2>
      </div>
      <div className="w-full">
        <button className="bg-indigo-500 hover:shadow-lg hover:shadow-indigo-400 hover:-translate-y-2 transition-all duration-300 text-white px-4 py-2 rounded-xl mt-4 font-bold w-full">View Details</button>
      </div>
    </div>
  )
}

export default JobCard

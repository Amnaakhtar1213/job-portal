import React from 'react'

const JobsCard = () => {
  return (
    <div>
      <div className="bg-white mt-4 p-10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer">
  <div className="flex flex-row justify-between items-center">
   <div className="flex flex-row items-center gap-4">
     <i class="fa-brands fa-google text-blue-500 text-2xl"></i>
    <h1 className="text-gray-700 font-semibold">Google</h1>
    </div>
    <i className="fa-solid fa-heart text-gray-400 hover:text-red-600 transition-all duration-300"></i>
  </div>
  <p className="mt-4 text-2xl font-bold">Senior Frontend Developer</p>
  <p className="text-gray-500 flex items-center gap-2 mt-2">
  <i className="fa-solid fa-location-dot text-red-600"></i>
  San Francisco, USA
</p>
  <div className="flex gap-2 flex-wrap mt-4">
  <span className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded-full">
    Full-time
  </span>

  <span className="px-3 py-1 text-sm bg-green-100 text-green-700 rounded-full">
    Remote
  </span>

  <span className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-full">
    $90k–$120k
  </span>

  <span className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full">
    React
  </span>
</div>
<button className="flex flex-row gap-4 items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 rounded-2xl py-1 mt-10 hover:-translate-y-1 transition transform duration-300 ease-in-out tracking-wide [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)] animate-fadeIn"><span>Apply</span><i className="fa-solid fa-arrow-right hover:animate-[leftRight_2s_ease-in-out_infinite]"></i></button>
</div>
    </div>
  )
}

export default JobsCard

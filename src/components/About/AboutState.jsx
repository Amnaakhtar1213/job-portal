import React from 'react'

const AboutState = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-purple-700 text-2xl font-semibold"> NEXORA BY THE NUMBERS</h1>
      <div className="flex flex-row items-center gap-10 mt-16">
        <div className="bg-purple-200 p-6 flex flex-col items-center rounded-xl hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-gray-300 w-36">
          <h1 className="text-purple-700 font-bold text-xl ">10K +</h1>
          <p className="text-gray-500 mt-2">Users</p>
        </div>
        <div className="bg-indigo-200 p-6 flex flex-col items-center rounded-xl hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-gray-300 w-36">
          <h1 className="text-indigo-700 font-bold text-xl">500K +</h1>
          <p className="text-gray-500 mt-2">Companies</p>
        </div>
        <div className="bg-blue-200 p-6 flex flex-col items-center rounded-xl hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-gray-300 w-36">
          <h1 className="text-blue-700 font-bold text-xl">1K +</h1>
          <p className="text-gray-500 mt-2">Jobs</p>
        </div>
         <div className="bg-gray-300 p-6 flex flex-col items-center rounded-xl hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-gray-300 w-36">
          <h1 className="text-gray-700 font-bold text-xl">95%</h1>
          <p className="text-gray-500 mt-2">Satisfaction</p>
        </div>
      </div>
    </div>
  )
}

export default AboutState

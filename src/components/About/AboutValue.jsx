import React from 'react'

const AboutValue = () => {
  return (
    <div className="flex flex-col items-center mt-6 px-4">
      <h1 className="text-purple-700 mt-24 font-bold text-2xl "> WHAT WE VALUE</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-18">
        <div className="flex flex-col items-center border border-green-300 rounded-xl w-full h-60 px-6 py-8 shadow-xl shadow-green-200 hover:scale-110 transition-all duration-300">
          <h1 className="text-4xl">🤝</h1>
          <h2 className="text-green-700 font-semibold text-xl mt-2">TRUST</h2>
          <p className="text-center mt-2 text-gray-400">Build reliable connections between candidates and companies.</p>
        </div>
        <div className="flex flex-col items-center border border-indigo-300 rounded-xl w-full h-60 px-6 py-8 shadow-xl shadow-indigo-300 hover:scale-110 transition-all duration-300">
          <h1 className="text-4xl">🚀 </h1>
          <h2 className="text-indigo-700 font-semibold text-xl mt-2">Growth</h2>
          <p className="text-center mt-2 text-gray-400">Help people discover opportunities to develop their careers.</p>
        </div>
        <div className="flex flex-col items-center border border-purple-300 rounded-xl w-full h-60 px-6 py-8 shadow-xl shadow-purple-300 hover:scale-110 transition-all duration-300">
          <h1 className="text-4xl">🌍</h1>
          <h2 className="text-purple-700 font-semibold text-xl mt-2">Impact </h2>
          <p className="text-center mt-2 text-gray-400">Create meaningful connections that benefit both talent and businesses.</p>
        </div>
         <div className="flex flex-col items-center border border-blue-300 rounded-xl w-full h-60 px-6 py-8 shadow-xl shadow-blue-300 hover:scale-110 transition-all duration-300">
          <h1 className="text-4xl">💡</h1>
          <h2 className="text-blue-700 font-semibold text-xl mt-2">Innovation</h2>
          <p className="text-center mt-2 text-gray-400">Make the job-search experience smarter and easier</p>
        </div>
      </div>
    </div>
  )
}

export default AboutValue

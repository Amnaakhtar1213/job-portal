import React from 'react'

const AboutMission = () => {
  return (
    <div className="mt-10 px-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="bg-white flex flex-col items-center px-6 py-8 md:px-10 md:py-10 rounded-xl shadow-xl shadow-purple-300">
          <i className="fa-solid fa-briefcase text-amber-900 text-3xl"></i>
          <h1 className="text-blue-700 text-2xl font-bold mt-4 text-center">NEXORA</h1>
          <p className="text-gray-500 text-center mt-4">Your Road to the Future </p>
           <p className="text-purple-700 mt-8"> ✦   ✦   ✦</p>
        </div>

        <div className="bg-white flex flex-col items-center w-full md:w-100 py-10 px-10 shadow-xl shadow-purple-300">
          <h1 className="text-purple-700 font-bold text-2xl">OUR MISSION</h1>
          <h3 className="text-gray-500 text-center mt-4">Making career opportunities easier to discover and connect with. </h3>
          <p className="text-gray-400 mt-6 text-center">We connect talented people with companies where they can grow.              </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMission

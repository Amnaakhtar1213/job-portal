import React from 'react'

const WhyCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-14 mt-20">
      <div className="border border-gray-100 bg-gray-200 w-60 h-90 rounded-lg shadow-lg  px-6 py-12 hover:scale-105 transition-transform duration-300 items-center flex flex-col gap-4 cursor-pointer">
        <i className="fa-solid fa-briefcase text-amber-900 text-3xl"></i>
        <h1 className="text-gray-700 text-xl font-bold">Best Company Jobs</h1>
        <p className="text-gray-500 text-center">Explore verified job opportunities from top companies across multiple industries and find the role that matches your career goals.</p>
      </div>

      <div className="border border-gray-100 bg-gray-200 w-60 h-90 rounded-lg shadow-lg px-6 py-12 hover:scale-105 transition-transform duration-300 items-center flex flex-col gap-4 cursor-pointer">
       <i className="fa-solid fa-file-circle-check 900 text-4xl text-amber-600"></i>
        <h1 className="text-gray-700 text-xl font-bold">Easy Application</h1>
        <p className="text-gray-500 text-center">Apply for jobs in just a few clicks with a simple, fast, and user-friendly application process.</p>
      </div>

      <div className="border border-gray-100 bg-gray-200 w-60 h-90 rounded-lg shadow-lg px-6 py-12 hover:scale-105 transition-transform duration-300 items-center flex flex-col gap-4 cursor-pointer">
      <i className="fa-solid fa-chart-column 900 text-4xl text-blue-500"></i>
        <h1 className="text-gray-700 text-xl tracking-tight font-bold">Application Tracking</h1>
        <p className="text-gray-500 text-center">Track every application in one place and stay updated with your application status from submission to hiring..</p>
      </div>

      <div className="border border-gray-100 bg-gray-200 w-60 h-90 rounded-lg shadow-lg px-6 py-12 hover:scale-105 transition-transform duration-300 items-center flex flex-col gap-4 cursor-pointer">
       <i className="fa-solid fa-shield 900 text-4xl text-green-800"></i>
        <h1 className="text-gray-700 text-xl font-bold">Trusted Platform</h1>
        <p className="text-gray-500 text-center">Discover verified companies and genuine job listings on a secure platform built to support your career journey.</p>
      </div>
    </div>
  )
}

export default WhyCard

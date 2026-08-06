import React from 'react'

const StepCard = () => {
  return (
    <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="group border border-blue-200 hover:border-blue-500 hover:-translate-y-2 transition-all duration-300 rounded-2xl shadow-xl w-70 h-80 flex items-center justify-center flex-col gap-4 p-4">
        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">1</div>
        <i className="group-hover:-translate-y-1 transition-all duration-300 fa-solid fa-magnifying-glass text-gray-700 text-4xl group-hover:scale-120 group-hover:text-gray-700"></i>
        <h1 className="font-bold text-2xl shadow-xl shadow-blue-200">Search Jobs</h1>
        <p className="text-gray-500 text-center">Browse thousands of verified job opportunities using smart filters for location, category, salary, and experience.</p>
      </div>

       <div className="group border border-blue-200 hover:border-blue-500 hover:-translate-y-2 hover:shadow transition-all duration-300 rounded-2xl shadow-xl w-70 h-80 flex items-center justify-center flex-col gap-4 p-4">
        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">2</div>
        <i className="fa-solid fa-file-arrow-up text-green-700 text-4xl group-hover:scale-120 transition-all duration-300"></i>
        <h1 className="font-bold text-2xl shadow-xl shadow-blue-200">Apply Easily</h1>
        <p className="text-gray-500 text-center">Upload your resume and submit applications with just one click—fast, simple, and hassle-free.</p>
      </div>

       <div className="group border border-blue-200 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)] transition-all duration-300 rounded-2xl shadow-xl w-70 h-80 flex items-center justify-center flex-col gap-4 p-4">
        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">3</div>
        <i className="fa-solid fa-chart-simple text-red-700 text-4xl group-hover:scale-120  group-hover:-translate-y-1 transition-all duration-300"></i>
        <h1 className="font-bold text-2xl shadow-xl shadow-blue-200">Track Applications</h1>
        <p className="text-gray-500 text-center">Monitor every application in one dashboard and stay updated throughout the hiring process.</p>
      </div>

       <div className="group border border-blue-200 hover:border-blue-500 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(37,99,235,0.25)] transition-all duration-300 rounded-2xl shadow-xl w-70 h-80 flex items-center justify-center flex-col gap-4 p-4">
        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold">4</div>
        <i className="fa-solid fa-briefcase text-amber-950 text-4xl group-hover:scale-120 group-hover:-translate-y-1 transition-all duration-300"></i>
        <h1 className="font-bold text-2xl shadow-xl shadow-blue-200">Get Hired</h1>
        <p className="text-gray-500 text-center">Browse thousands of verified job opportunities using smart filters for location, category, salary, and experience.</p>
      </div>
    </div>
  )
}

export default StepCard

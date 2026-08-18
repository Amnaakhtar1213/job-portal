import React from 'react'
import { useNavigate } from 'react-router-dom'

const CTA = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen relative px-24 overflow-hidden mt-20 py-8 md:p-24">
      <div className=" flex flex-col items-center justify-center gap-4">
      <div className="absolute top-40 left-52 w-72 h-72 rounded-full bg-blue-500 opacity-20 blur-3xl float-blob"></div>
      <h1 className="text-2xl md:text-4xl hover:scale-110 transition-transform duration-300 mt-2 md:mt-10">🚀</h1>
      <h3 className="text-2xl md:text-4xl text-center text-indigo-900 font-bold mt-2 md:mt-10">Ready to Find Your Dream Job?</h3>
      <p className="text-gray-600 text-center mt-6 text-lg md:text-xl">Join thousands of professionals who have already started their careers with NEXORA.
      </p>

      <div className="flex flex-row items-center justify-between gap-10 mt-8 md:mt-16">
        <button onClick={() => navigate("/jobs")} className="bg-indigo-600 text-white py-2 px-6 rounded-2xl hover:bg-indigo-700 font-bold hover:scale-105 transition transform duration-300 ease-in-out">Explore Jobs</button>
         <button className="bg-white text-indigo-600 py-2 px-6 rounded-2xl hover:bg-gray-100 font-bold border border-indigo-600 hover:scale-105 transition transform duration-300 ease-in-out">Post A Job</button>
      </div>

      <div  className="flex flex-row items-center justify-between gap-6 md:gap-20 mt-8 md:mt-20">
        <span className="bg-rose-200 text-rose-600 py-2 px-6 rounded-2xl font-bold hover:-translate-y-2 transition-all duration-300">10K+ Jobs</span>
         <span className="bg-green-200 text-green-600 py-2 px-6 rounded-2xl font-bold hover:-translate-y-2 transition-all duration-300"> 2K+ Companies </span>
          <span className="bg-amber-100 text-amber-600 py-2 px-6 rounded-2xl font-bold hover:-translate-y-2 transition-all duration-300">50K+ Users</span>
      </div>
      <div className="absolute bottom-0 right-72 w-72 h-72 rounded-full bg-indigo-600 opacity-30 blur-3xl float-blob-reverse"></div>
    </div>
    </div>
  )
}

export default CTA

import React from 'react'

const JobHero = () => {
  return (
    <div className="pt-14 flex flex-col items-center">
      <h1 className="text-indigo-500 font-bold text-4xl text-center">Find Your Dream Job</h1>
      <p className="text-gray-500 text-center mt-6 text-lg">Discover thousands of opportunities from top companies around the world.</p>
      <div className="flex items-center justify-between gap-10 mt-8">
        <input type="text" placeholder="Search jobs..." className="relative w-4xl border border-indigo-200 rounded px-8 py-1 hover:border-indigo-300 hover:shadow-indigo-400 hover:shadow focus:outline-none"/> <i className="absolute fa-solid fa-magnifying-glass px-2 text-indigo-500"></i>
        <button className="bg-white text-indigo-500 font-bold text-xl px-4 py-1 rounded hover:-translate-y-1 transition-all duration-300 hover:shadow hover:shadow-indigo-400">Search</button>
      </div>
    </div>
  )
}

export default JobHero

import React from 'react'

const CompSearch = () => {
  return (
    <div>
      <div className="flex justify-center gap-4 mt-8">
        <input 
        type="text" placeholder="Search companies..." 
        className="relative w-4xl border border-indigo-200 rounded px-8 py-1 hover:border-indigo-300 hover:shadow-indigo-400 hover:shadow focus:outline-none"/> 
        <i className="absolute left-66 top-58 fa-solid fa-magnifying-glass px-2 text-indigo-500"></i>
        <button
        className="bg-white text-indigo-500 font-bold text-xl px-4 py-1 rounded hover:-translate-y-1 transition-all duration-300 hover:shadow hover:shadow-indigo-400 border border-indigo-300">Search</button>
      </div>
    </div>
  )
}

export default CompSearch

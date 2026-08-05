import React from 'react'

const SearchSection = () => {
  return (
    <div className="bg-slate-50 flex flex-col items-center justify-center h-screen">
      <div className="flex flex-row items-center justify-between gap-6">
        <i className="fa-solid fa-magnifying-glass text-gray-700 hover:text-blue-700 cursor-pointer"></i>
        <h1 className="text-blue-700 text-3xl font-bold">SEARCH OPPORTUNITIES</h1>
      </div>
      
      <h2 className="mt-20 text-2xl text-gray-800 font-bold">Find Your Dream Job</h2>
      <p className="text-gray-700 mt-8">Discover thousands of opportunities from companies around the world.</p>

    

  </div>

  )
}

export default SearchSection

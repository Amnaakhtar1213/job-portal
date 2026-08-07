import React from 'react'

const SearchSection = () => {
  return (
    <div className="relative bg-slate-50 flex flex-col items-center justify-center p-24">
       <div className="absolute top-0 left-122 w-72 h-72 rounded-full bg-blue-500 opacity-20 blur-3xl float-blob"></div>
      <div className="flex flex-row items-center justify-between gap-6">
        <i className="fa-solid fa-magnifying-glass text-gray-700 hover:text-blue-700 cursor-pointer"></i>
        <h1 className="text-blue-700 text-3xl font-bold">SEARCH OPPORTUNITIES</h1>
      </div>
      
      <h2 className="mt-20 text-2xl text-gray-800 font-bold">Find Your Dream Job</h2>
      <p className="text-gray-700 mt-8">Discover thousands of opportunities from companies around the world.</p>

     <div className="absolute bottom-0 right-52 w-52 h-52 rounded-full bg-violet-600 opacity-30 blur-3xl float-blob-reverse"></div>
      <div className="absolute bottom-10 left-0 w-52 h-52 rounded-full bg-indigo-500 opacity-30 blur-3xl float-blob-reverse"></div>

  </div>

  )
}

export default SearchSection

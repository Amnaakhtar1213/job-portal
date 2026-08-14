import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const SearchSection = () => {
  const navigate = useNavigate()

  const [search, setSearch] = useState("")

  const handleSearch = () => {
   navigate(`/jobs?search=${search}`)

  }

  return (
    <div className="min-h-screen relative bg-slate-50 flex flex-col items-center justify-center gap-8">
       <div className="absolute top-0 left-122 w-72 h-72 rounded-full bg-blue-500 opacity-20 blur-3xl float-blob"></div>
      <div className="flex flex-row items-center justify-between gap-6">
        <i className="fa-solid fa-magnifying-glass text-gray-700 hover:text-blue-700 cursor-pointer"></i>
        <h1 className="text-blue-700 text-3xl font-bold">SEARCH OPPORTUNITIES</h1>
      </div>
     <div className="flex gap-6">
       <input value={search}
       onChange={(e) => setSearch(e.target.value)} 
       className="outline-none border border-blue-200 px-4 placeholder:text-gray-300 rounded-lg py-1 shadow shadow-blue-300 w-2xl" type="text" placeholder="Search for jobs..."/>
       <button onClick={handleSearch} className="bg-blue-700 text-white px-4 py-1 rounded hover:shadow-lg hover:-translate-y-2 transition-all duration-200 hover:shadow-blue-300">Search</button>
     </div>
      <h2 className="mt text-2xl text-gray-800 font-bold">Find Your Dream Job</h2>
      <p className="text-gray-700">Discover thousands of opportunities from companies around the world.</p>

     <div className="absolute bottom-0 right-52 w-52 h-52 rounded-full bg-violet-600 opacity-30 blur-3xl float-blob-reverse"></div>
      <div className="absolute bottom-10 left-0 w-52 h-52 rounded-full bg-indigo-500 opacity-30 blur-3xl float-blob-reverse"></div>

  </div>

  )
}

export default SearchSection

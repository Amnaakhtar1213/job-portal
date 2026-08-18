import React, { useState } from 'react'


const CompSearch = ({setSearch}) => {
   const [inputSearch, setInputSearch] = useState("")


   const handleSearch = (e) => {
    e.preventDefault()
      setSearch(inputSearch)
   }
  return (
    <div>
      <div className="flex justify-center gap-4 mt-8 px-4">
         <div className="relative">
           <input 
           value={inputSearch}
           onChange={(e) => setInputSearch(e.target.value)}
        type="text"
         placeholder="Search companies..." 
        className=" w-full md:w-4xl border border-indigo-200 rounded px-8 py-1 hover:border-indigo-300 hover:shadow-indigo-400 hover:shadow focus:outline-none"/> 
        <i className="absolute left-0 top-5 md:top-4  -translate-y-1/2 fa-solid fa-magnifying-glass px-2 text-indigo-500"></i>
         </div>
        <button
        onClick={handleSearch}
        className="bg-white text-indigo-500 font-bold text-xl px-4 py-1 rounded hover:-translate-y-1 transition-all duration-300 hover:shadow hover:shadow-indigo-400 border border-indigo-300">Search</button>
      </div>
    </div>
  )
}

export default CompSearch

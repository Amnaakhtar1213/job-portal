import React from 'react'

const FilterSidebar = () => {
  return (
    <div className="ml-10 p-6 mt-8 border border-indigo-200 shadow-xl shadow-indigo-600 rounded-2xl hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl max-w-7xl mx-auto">
      <aside className="flex flex-col gap-4">
       <div className="mb-2">
         <h2 className="text-center text-gray-500 text-3xl font-bold "><i className="fa-solid fa-magnifying-glass text-indigo-400"></i>  Filter Jobs</h2>
        <p className="text-gray-500 text-center">Find your perfect opportunity</p>
       </div>

        <div className="flex gap-6 items-center">
           <label className="text-gray-700 font-bold">Search</label>
        <input type="text" placeholder="Search" className=" border border-indigo-200 rounded px-4 py-1 hover:border-indigo-300 hover:shadow-indigo-400 hover:shadow focus:outline-none"/>
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-gray-700 font-bold">Location</label>
          <select className="border border-indigo-300 hover:shadow hover:shadow-indigo-300 rounded-lg px-2 py-2 text-left outline-none w-3xs">
            <option className=" text-indigo-500 ">All Location</option>
             <option className=" text-indigo-500 "> Remote</option>
              <option className=" text-indigo-500 ">South Korea</option>
               <option className=" text-indigo-500 ">Ukraine</option>
                <option className=" text-indigo-500 ">Russia</option>
          </select>
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-gray-700 font-bold">Category</label>
          <select  className="border border-indigo-300 hover:shadow hover:shadow-indigo-300 rounded-lg px-2 py-2 text-left outline-none w-3xs">
             <option>All Categories</option>
             <option>Frontend</option>
             <option>Backend</option>
             <option>UI/UX</option>
              <option>Backend</option>
               <option>Full Stack</option>
                <option>Software Engineer</option>
                 <option>Cyber Security</option>
          </select>
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-gray-700 font-bold">Job Type</label>
          <select className="border border-indigo-300 hover:shadow hover:shadow-indigo-300 rounded-lg px-2 py-2 text-left outline-none w-3xs">
             <option>All Types</option>
            <option>On Site</option>
            <option>Remote</option>
            <option>Full-Time</option>
            <option>Pat-Time</option>
          </select>
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-gray-700 font-bold">Experience</label>
          <select  className="border border-indigo-300 hover:shadow hover:shadow-indigo-300 rounded-lg px-2 py-2 text-left outline-none w-3xs">
             <option>All</option>
            <option>Fresh</option>
             <option>1+ Year</option>
              <option>3+ Year</option>
               <option>7+ Year</option>
          </select>
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-gray-700 font-bold">Salary Range</label>
          <select className="border border-indigo-300 hover:shadow hover:shadow-indigo-300 rounded-lg px-2 py-2 text-left outline-none w-3xs">
            <option>$40–$160/ hour</option>
              <option>$100–$160/ hour</option>
              <option>$240–$310/ hour</option>
          </select>
        </div>

        <button className="bg-indigo-500 text-white rounded-xl hover:shadow hover:shadow-indigo-300 hover:-translate-y-2 transiton-all duration-300 py-2 font-bold">Reset Filters</button>
      </aside>
    </div>
  )
}

export default FilterSidebar

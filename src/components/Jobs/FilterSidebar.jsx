import React from 'react'

const FilterSidebar = ({location, setLocation, category, setCategory, jobType, setJobType, experience, setExperience, salaryRange, setSalaryRange, resetFilter}) => {
  
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
          <select value={location} 
          onChange={(e) => setLocation(e.target.value)} className="border border-indigo-300 hover:shadow hover:shadow-indigo-300 rounded-lg px-2 py-2 text-left outline-none w-3xs">
            <option value="" className="text-indigo-500">All Location</option>
              <option className=" text-indigo-500" value="South Korea">South Korea</option>
               <option className=" text-indigo-500 " value="San Francisco, USA">San Francisco, USA</option>
                <option className=" text-indigo-500 " value="Seattle, USA">Seattle, USA</option>
                 <option className=" text-indigo-500 " value="New York, USA">New York, USA</option>
                  <option className=" text-indigo-500 " value="Seongnam, South Korea">Seongnam, South Korea</option>
                   <option className=" text-indigo-500 " value="Seoul, South Korea">Seoul, South Korea</option>
          </select>
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-gray-700 font-bold">Category</label>
          <select value={category}
           onChange={(e) => setCategory(e.target.value)} className="border border-indigo-300 hover:shadow hover:shadow-indigo-300 rounded-lg px-2 py-2 text-left outline-none w-3xs">
             <option value="">All Categories</option>
             <option value="Frontend Development">Frontend Development</option>
             <option value="UI/UX Design">UI/UX Design</option>
               <option value="Full Stack Development">Full Stack Development</option>
                <option value="Software Engineering">Software Engineering</option>
          </select>
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-gray-700 font-bold">Job Type</label>
          <select value={jobType} onChange={(e) => setJobType(e.target.value)} className="border border-indigo-300 hover:shadow hover:shadow-indigo-300 rounded-lg px-2 py-2 text-left outline-none w-3xs">
             <option value="">All Types</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-gray-700 font-bold">Experience</label>
          <select value={experience} onChange={(e) => setExperience(e.target.value)} className="border border-indigo-300 hover:shadow hover:shadow-indigo-300 rounded-lg px-2 py-2 text-left outline-none w-3xs">
            <option value="">All</option>
<option value="Fresh">Fresh</option>
<option value="1 Years">1 Year</option>
<option value="2 Years">2 Years</option>
<option value="3 Years">3 Years</option>
<option value="3+ Years">3+ Years</option>
<option value="7 Years">7 Years</option>
          </select>
        </div>

        <div className="flex gap-6 items-center">
          <label className="text-gray-700 font-bold">Salary Range</label>
          <select value={salaryRange} onChange={(e) => setSalaryRange(e.target.value)} className="border border-indigo-300 hover:shadow hover:shadow-indigo-300 rounded-lg px-2 py-2 text-left outline-none w-3xs">
            <option value="">All Salaries</option>
            <option value="90–$120">$90k–$120k</option>
              <option value="85–110">$85k–$110k</option>
              <option value="95–125">$95k–$125k</option>
          </select>
        </div>

        <button onClick={resetFilter} className="bg-indigo-500 text-white rounded-xl hover:shadow hover:shadow-indigo-300 hover:-translate-y-2 transiton-all duration-300 py-2 font-bold">Reset Filters</button>
      </aside>
    </div>
  )
}

export default FilterSidebar

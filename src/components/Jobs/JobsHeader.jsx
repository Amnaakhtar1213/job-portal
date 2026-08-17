import React from 'react'

const JobsHeader = ({sortBy, setSortBy}) => {
 
  return (
    <div className="flex items-center justify-between mt-8">
      <div className="text-indigo-600 text-2xl font-bold">120 Jobs Found
    </div>
      <div>
        <label className="text-gray-900">Sort By</label>
        <select value={sortBy} 
        onChange={(e) => setSortBy(e.target.value)} className="text-gray-600 border border-indigo-300 hover:shadow-indigo-400 hover:shadow ml-2 outline-none">
           <option value="">All</option>
          <option value="Newest">Newest</option>
          <option value="Oldest">Oldest</option>
          <option value="Salary: High to Low">Salary: High to Low</option>
          <option value="Salary: Low to High">Salary: Low to High</option>
          <option value="Most Relevant">Most Relevant</option>
        </select>
      </div>
    </div>
  )
}

export default JobsHeader

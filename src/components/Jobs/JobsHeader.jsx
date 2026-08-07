import React from 'react'

const JobsHeader = () => {
  return (
    <div className="flex items-center justify-between mt-8">
      <div className="text-indigo-600 text-2xl font-bold">120 Jobs Found
    </div>
      <div>
        <label className="text-gray-900">Sort By</label>
        <select className="text-gray-600 border border-indigo-300 hover:shadow-indigo-400 hover:shadow ml-2 outline-none">
          <option>Newest</option>
          <option>Oldest</option>
          <option>Salary: High to Low</option>
          <option>Salary: Low to High</option>
          <option>Most Relevant</option>
        </select>
      </div>
    </div>
  )
}

export default JobsHeader

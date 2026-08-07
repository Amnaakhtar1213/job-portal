import React from 'react'

const JobsHeader = () => {
  return (
    <div className="flex flex-row gap-10 mt-10">
      <div className="text-indigo-600 text-xl">120 Jobs Found</div>
      <div>
        <label className="text-gray-900">Sort By</label>
        <select className="text-gray-600 border border-indigo-300 hover:shadow-indigo-400 hover:shadow ml-2">
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

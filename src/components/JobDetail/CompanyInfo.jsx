
import React from 'react'

const CompanyInfo = ({ job }) => {
  return (
    <div className="max-w-7xl mx-auto bg-white border border-blue-200 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-blue-300 mt-6">

      <h2 className="text-blue-700 text-4xl font-bold text-center">
        About {job.company}
      </h2>

      <div className="flex items-center gap-5 mt-6">

        <div className="w-16 h-16 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl font-bold">
          {job.company.slice(0, 1).toUpperCase()}
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-900">
            {job.company}
          </h3>

          <p className="text-gray-500">
            Hiring company
          </p>
        </div>

      </div>

    </div>
  )
}

export default CompanyInfo
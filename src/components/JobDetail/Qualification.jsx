import React from 'react'

const Qualification = ({job}) => {
  return (
    <div className="max-w-7xl mx-auto bg-white border border-blue-200 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-lg shadow-blue-300 mt-6">
      <h2 className="text-blue-700 text-4xl font-bold text-center">Qualification</h2>
      <div className="space-y-3 mt-4">
        {job.qualifications.map(( item, idx) => {
          return <div key={idx} className="flex items-center gap-3">
             <i className="fa-solid fa-check text-green-600"></i>
             <p className="text-gray-600">{item}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default Qualification

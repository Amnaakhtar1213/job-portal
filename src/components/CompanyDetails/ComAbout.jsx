import React from 'react'
import jobs from '../../data/JobInfo'


const ComAbout = ({company}) => {
  return (
    <div className="bg-white rounded-xl border border-purple-200 px-8 py-10 mt-8 shadow-lg shadow-blue-200 w-[90%] mx-auto hover:-translate-y-2 transition-all duration-300">
      <h1 className="text-blue-700 text-2xl border-b-2 pb-2 font-bold text-center">About  {company.name} </h1>
      <p className="mt-6 text-gray-600 text-center">Google is a global technology company known for  its search engine, cloud services, artificial intelligence, and digital products.  </p>
      <p className="mt-2 text-gray-600 text-center">Google builds products and services that help billions of people access information, communicate, work, and solve everyday problems.
      </p>
      <p className="mt-2 text-gray-600 text-center"> The company continues to invest heavily in AI, cloud computing, and emerging technologies.  </p>
    </div>
  )
}

export default ComAbout

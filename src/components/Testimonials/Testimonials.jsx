import React from 'react'
import TestCard from '../TestCard/TestCard'

const Testimonials = () => {
  return (
    <div className="relative p-24 overflow-hidden">
      {/* <div className="absolute bottom-0 right-42 w-72 h-72 rounded-full bg-violet-600 opacity-30 blur-3xl float-blob-reverse"></div> */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-blue-700 font-bold text-4xl shadow-2xl shadow-blue-300">TESTIMONIALS</h1>
      <h2 className="text-2xl text-gray-600 mt-8">Loved by Job Seekers Worldwide</h2>
      <p className="text-gray-500 text-center mt-6">"See how professionals found their dream jobs through <span>NEXORA</span>."
</p>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        <TestCard />
      <TestCard />
      <TestCard />
      </div>
     </div>

  )
}

export default Testimonials

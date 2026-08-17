import React from 'react'

const CompCTA = () => {
  return (
    <div className="px-8 py-12 bg-indigo-700 rounded-2xl max-w-6xl mx-auto flex flex-col items-center mt-10 mb-10">
      <h2 className="text-white text-xl font-semibold">Ready for Your Next Career Move?</h2>
      <p className="text-gray-200 text-center mt-4">Explore top companies and find opportunities that match your career goals. </p>
      <button className="group bg-white text-indigo-700 px-4 py-1 rounded-xl mt-6 hover:shadow-xl hover:shadow-indigo-300 cursor-pointer">Explore Jobs <i className="fa-solid fa-arrow-right ml-2 group-hover:animate-[leftRight_2s_ease-in-out_infinite]"></i></button>
    </div>
  )
}

export default CompCTA

import React from 'react'

const CategoryCard = () => {
  return (
    
      <div className="shadow-xl hover:-translate-y-1 transition-all duration-300  bg-blue-100 w-72 rounded-3xl p-8">
        
          <span className="flex items-center justify-center text-5xl">💻</span>
        <h1 className="text-xl font-bold mt-3 text-gray-800">Frontend Development</h1>
        <h3 className="text-gray-500 mt-2">100+ Jobs</h3>
        <div className="flex flex-row items-center justify-center gap-6 mt-6">
        <span className="hover:-translate-y-1 transition-all duration-300 px-3 py-1 text-sm bg-red-100 text-red-700 rounded-full">
    HTML
  </span>
  <span className="hover:-translate-y-1 transition-all duration-300 px-3 py-1 text-sm bg-green-200 text-green-700 rounded-full">
    CSS
  </span>
  <span className="hover:-translate-y-1 transition-all duration-300 px-3 py-1 text-sm bg-teal-200 text-teal-700 rounded-full">
    React
  </span>
        </div>
        <div className="flex items-center justify-center mt-2">
       <button className="group w-full flex flex-row gap-4 items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 rounded-2xl py-1 mt-10 hover:-translate-y-1 transition transform duration-300 ease-in-out tracking-wide [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)] animate-fadeIn"><span>Apply Jobs</span><i className="fa-solid fa-arrow-right group-hover:animate-[leftRight_2s_ease-in-out_infinite]"></i></button>
</div>


      </div>
  )
}

export default CategoryCard

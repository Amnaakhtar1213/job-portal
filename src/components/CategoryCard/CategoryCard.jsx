import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({category}) => {

  const navigate = useNavigate()
  return (
    
      <div className="shadow-xl hover:-translate-y-1 transition-all duration-300  bg-blue-100 w-72 rounded-3xl p-8">
        
          <span className="flex items-center justify-center text-4xl">{category.icon}</span>
        <h1 className="text-xl font-bold mt-3 text-gray-800">{category.name}</h1>
        <h3 className="text-gray-500 mt-2">{category.jobs} + Jobs</h3>
       <div className="flex flex-row gap-4 mt-2 flex-wrap">
       {category.skills.map((skill) => {
         return <span key={skill}
           className="bg-blue-200 text-indigo-700 px-2 py-1 rounded-2xl cursor-pointer shadow-lg shadow-blue-300">{skill}</span>
       })}
      
      </div>
        <div className="flex items-center justify-center mt-2">
       <button onClick={() => navigate("/jobs")} className="group w-full flex flex-row gap-4 items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-6 rounded-2xl py-1 mt-10 hover:-translate-y-1 transition transform duration-300 ease-in-out tracking-wide [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)] animate-fadeIn"><span>Apply Jobs</span><i className="fa-solid fa-arrow-right group-hover:animate-[leftRight_2s_ease-in-out_infinite]"></i></button>
</div>


      </div>
  )
}

export default CategoryCard

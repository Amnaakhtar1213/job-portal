import React from 'react'

const TestCard = () => {
  return (
    <div className="mt-16">
      <div className="border border-blue-200 hover:border-blue-500 hover:-translate-y-2 hover:shadow-blue-200 transition-all duration-300 rounded-2xl shadow-xl w-66 h-80 flex items-center justify-between flex-col gap-4 px-2 py-4">
        <div className="flex flex-row items-center justify-between gap-30">
        <h1>⭐⭐⭐⭐⭐</h1>
        <h1 className="text-2xl text-blue-700 opacity-40 "> ❝</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500 text-center">
            NEXORA helped me land my first 
 frontend developer role within two weeks. The application process was smooth.
          </p>
        </div>

        
         <div className="flex flex-col">
           <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold"><i className="fa-solid fa-user"></i>
          </div> 
          <div>
            <h1 className="text-lg">John Doe</h1>
          <h3 className="text-lg font-bold text-blue-700">Frontend Developer</h3>
          <p><span className="font-bold text-red-800 text-xl" >N</span> Netflix </p>
         </div>
         </div>
      </div>   
      </div>
  )
}

export default TestCard

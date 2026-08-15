import React from 'react'
import testimonials from '../../data/Testimonials'

const TestCard = ({testimonial}) => {
  return (
    <div className="mt-16">
      <div className="border border-blue-200 hover:border-blue-500 hover:-translate-y-2 hover:shadow-blue-200 transition-all duration-300 rounded-2xl shadow-xl w-66 h-90 flex items-center justify-between flex-col gap-4 px-2 py-4">
        <div className="flex flex-row items-center justify-between gap-30">
        <h1>⭐⭐⭐⭐⭐</h1>
        <h1 className="text-2xl text-blue-700 opacity-40 "> ❝</h1>
      </div>

      <div className="flex flex-col items-center justify-center">
          <p className="text-gray-500 text-center">
            {testimonial.text}
          </p>
        </div>

        
         <div className="flex flex-col">
           <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-bold"><i className="fa-solid fa-user"></i>
          </div> 
          <div>
            <h1 className="text-lg">{testimonial.name}</h1>
          <h3 className="text-lg font-bold text-blue-700">{testimonial.role}</h3>

          <p>
            <span className="font-bold text-gray-500 text-xl mr-4" >{testimonial.company.charAt(0)}</span>
             {testimonial.company} </p>

         </div>
         </div>
      </div>   
      </div>
  )
}

export default TestCard

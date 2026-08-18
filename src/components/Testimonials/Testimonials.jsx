import React from 'react'
import TestCard from '../TestCard/TestCard'
import testimonials from '../../data/Testimonials'

const Testimonials = ({testimonial}) => {
  return (
    <div className="relative p-6 md:p-24 overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-blue-700 font-bold text-2xl md:text-4xl text-center shadow-2xl shadow-blue-300">TESTIMONIALS</h1>
      <h2 className="text-xl md:text-2xl text-center text-gray-600 mt-4 md:mt-8">Loved by Job Seekers Worldwide</h2>
      <p className="text-gray-500 text-center mt-4 md:mt-6">"See how professionals found their dream jobs through <span>NEXORA</span>."
</p>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:gap-8">
       {testimonials.map((testimonial) => {
        return <TestCard testimonial={testimonial} key={testimonial.id}/>
       })}
      </div>
     </div>

  )
}

export default Testimonials

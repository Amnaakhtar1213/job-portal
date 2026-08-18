import React from 'react'
import WhyCard from '../WhyCards/WhyCard'

const WhyUs = () => {
  return (
    <div className=" bg-blue-100 p-6 md:p-20">
      <div className="flex flex-col items-center">
        <h1 className="text-gray-700 text-2xl md:text-4xl">Why Choose <span className="text-blue-700 text-3xl md:text-5xl font-bold">NEXORA</span> ?</h1>
        <p className="text-gray-500 text-center mt-4 md:mt-6 text-lg md:text-xl"> Everything you need to find your dream job in one modern and trusted platform.</p>
      </div>
      <WhyCard />
     
    </div>
  )
}

export default WhyUs

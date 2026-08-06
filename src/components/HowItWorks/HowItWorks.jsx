import React from 'react'
import StepCard from '../StepCard/StepCard'

const HowItWorks = () => {
  return (
    <div className="bg-blue-50 p-24">
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl text-gray-500"> HOW IT WORKS</h1>
        <p className="text-gray-800 text-2xl mt-10">From searching to getting hired — everything starts here.</p>
      </div>
      <StepCard />
    </div>
  )
}

export default HowItWorks

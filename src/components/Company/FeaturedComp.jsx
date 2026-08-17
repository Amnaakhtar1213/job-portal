import React from 'react'
import CompCard from './CompCard'
import CompGrid from './CompGrid'

const FeaturedComp = () => {
  return (
    <div className="flex flex-col items-center mt-8 px-4">
      <h1 className="text-indigo-600 text-xl md:text-2xl font-semibold">Featured Companies </h1>
      <p className="text-gray-500 text-center px-4">Discover companies with exciting opportunities  </p>
   <CompGrid />
    </div>
  )
}

export default FeaturedComp

import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'

const PopularCategories = () => {
  return (
    <div className="p-10 bg-gray-100">
       <div className="flex flex-col items-center justify-center">
       <h1 className="text-blue-700 text-4xl font-bold">POPULAR CATEGORIES</h1>
      <h2 className="text-gray-600 font-bold text-2xl mt-4">Explore jobs by your favorite field.</h2>
     </div>
    <div className="max-w-7xl mx-auto mt-12">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
    <CategoryCard />
      <CategoryCard />
        <CategoryCard />
          <CategoryCard />
            <CategoryCard />
              <CategoryCard />
    </div>
    </div>
    </div>
  )
}

export default PopularCategories

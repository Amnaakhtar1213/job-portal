import React from 'react'
import CompanyCard from '../CompanyCard/CompanyCard'
import companies from '../../data/CompanyInfo'

const TopCompanies = () => {
  return (
    <div className="bg-gray-200 p-10">
     <div className="flex flex-col items-center justify-center">
       <h1 className="text-blue-700 text-4xl font-bold">TOP COMPANIES</h1>
      <h2 className="text-gray-800 font-bold text-2xl mt-4">Meet the companies building the future</h2>
      <p className="text-gray-400 mt-2">Discover organizations trusted by millions
and hiring talented people worldwide.</p>
     </div>
    
     <div className="max-w-7xl mx-auto mt-12">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
   {companies.map((company) => {
    return <CompanyCard company={company} key={company.id}/>
   })}
    </div>
    </div>
    </div>
  )
}

export default TopCompanies

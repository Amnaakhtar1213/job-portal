import React from 'react'
import CompCard from './CompCard'
import companies from '../../data/CompanyInfo'

const CompGrid = () => {
  return (
    <div className="">
        <div className="flex flex-row justify-center flex-wrap gap-6 md:gap-10 px-2">
    {
      companies.map((company) => {
        return <CompCard company={company} key={company.id}/>
      })
    }
       
           </div>
    </div>
  )
}

export default CompGrid

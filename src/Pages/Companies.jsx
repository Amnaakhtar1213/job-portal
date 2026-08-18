import React from 'react'
import CompGrid from '../components/Company/CompGrid'

const Companies = () => {
  return (
    <div className="mt-20 md:mt-24 mb-20">
      <h1 className="text-indigo-700 text-xl md:text-4xl text-center font-bold">TOP COMPANIES</h1>
      <CompGrid search="" showAll={true}/>
    </div>
  )
}

export default Companies

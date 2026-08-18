import React from 'react'
import CompCard from './CompCard'
import companies from '../../data/CompanyInfo'
import { useNavigate } from 'react-router-dom'

const CompGrid = ({search, showAll}) => {
 const navigate = useNavigate()

  const filterCompanies = companies.filter((company) => {
    return company.name.toLowerCase().includes(search.toLowerCase())
  })

  const displayCompanies = showAll ? filterCompanies : search ? filterCompanies : filterCompanies.slice(0, 4)


  return (
    <div className="">
        <div className="flex flex-row justify-center flex-wrap gap-6 md:gap-10 px-2">
    {
      displayCompanies.map((company) => 
      {
        return <CompCard company={company} key={company.id}/>
      })
    }
       
           </div>

  {!search && !showAll && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate('/companies')}
            className="group bg-indigo-600 text-white px-6 py-2 rounded-xl hover:bg-indigo-800 transition"
          >
            View More Companies
            <i className="fa-solid fa-arrow-right ml-2 group-hover:animate-[leftRight_2s_ease-in-out_infinite]"></i>
          </button>
        </div>
      )}

    </div>
  )
}

export default CompGrid

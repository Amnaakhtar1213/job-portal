import React from 'react'
import EmptyMsg from './EmptyMsg'
import companies from '../../data/CompanyInfo'


const SavedCompGrid = ({savedCompanies, setSavedCompanies}) => {
 
  const handleUnsave = (id) => {
    const saved = JSON.parse(localStorage.getItem("savedCompanies")) || []

    const update = saved.filter((companyId) => companyId !== id)

    localStorage.setItem("savedCompanies", JSON.stringify(update))

    setSavedCompanies(
      savedCompanies.filter((company) => company.id !== id)
    )
  }
   return (
   <div>
    {savedCompanies.length === 0 ? (
      <EmptyMsg />
    ) : (
       <div
    className=" p-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {savedCompanies.map((company) => (
        <div key={company.id} 
        className="hover:-translate-y-1 transition-all duration-300 flex flex-col items-center py-8 bg-white w-64 h-72 shadow-md hover:shadow-xl rounded-3xl mt-8">
   <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-2xl font-bold">
  {company.name.charAt(0)}
</div>
   <h1 className="text-gray-900 text-xl font-semibold mt-2">{company.name}</h1>
   <div className="mt-2 flex items-center flex-row gap-2">
     <i className="fa-solid fa-star text-yellow-500"></i>
     <p className="text-gray-500">{company.rating} Rating</p>
   </div>
<p className="text-gray-700 mt-4">{company.openPositions} + open Position</p>
 <div className="flex items-center justify-center mt-6">
       <button onClick={() => handleUnsave(company.id)} className=" flex flex-row gap-4 items-center justify-center bg-blue-700 hover:bg-blue-500 text-white px-6 rounded-2xl py-1 mt-2 hover:-translate-y-1 transition transform duration-300 ease-in-out tracking-wide [text-shadow:1px_1px_3px_rgba(0,0,0,0.3)] animate-fadeIn"><span>Remove</span></button>
</div>
   
    
    </div>
      ))}
    </div>
    ) }
   </div>
  )
}

export default SavedCompGrid

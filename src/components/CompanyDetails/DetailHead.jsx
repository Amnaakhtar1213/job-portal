import React from 'react'
import { useNavigate } from 'react-router-dom'

const DetailHead = ({company}) => {
 const navigate = useNavigate()

 const handleSavedCompany = () => {
  const alreadySaved = JSON.parse(localStorage.getItem("savedCompanies"))  || []

  if(!alreadySaved.includes(company.id)){
    alreadySaved.push(company.id)
    localStorage.setItem("savedCompanies", JSON.stringify(alreadySaved))
  }
  navigate("/saved-jobs")
 }
  return (
    <div className="">

      <div className="fixed top-16 left-1/2 -translate-x-1/2 w-[50%] z-50 bg-blue-300 shadow-md rounded-xl px-8 py-3 mb-6 flex items-center justify-between">
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold">
      {company.name.charAt(0)}
    </div>

    <h2 className="text-xl font-bold text-white">
      {company.name}
    </h2>
  </div>

  <button
    onClick={handleSavedCompany}
    className="bg-blue-700 text-white px-4 py-1 rounded-xl ml-4"
  >
    <i className="fa-solid fa-heart mr-2"></i>
    Save
  </button>
</div>

      <h1 className="text-blue-700 text-4xl font-bold text-center mt-20">COMPANY DETAILS</h1>

<div className=" bg-white mt-14 px-6 md:px-20 py-4 md:py-6 border border-blue-700 rounded-2xl shadow-lg shadow-blue-300 w-[80%] mx-auto hover:-translate-y-2 transition-all duration-300">

  <div className="flex justify-end">
    <button onClick={handleSavedCompany} className="bg-blue-700 text-white px-4 py-1 rounded-xl text-lg"><i className="fa-solid fa-heart"></i> Save Company</button>
   </div>

   <div className="flex flex-row gap-10">

        <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-3xl p-8 bg-gray-200">
           {company.name.charAt(0)}
        </div>

  <div>
      <h1 className="text-4xl text-black font-bold">{company.name}</h1>

      <div className="flex flex-row items-center justify-center gap-4 md:gap-10 mt-2 ">
        <h2 className="text-lg">
        <i className="fa-solid fa-star text-yellow-400 mr-2"></i> {company.rating}</h2>
      <span className="text-blue-700 rounded-2xl px-4 py-1 bg-gray-200 text-lg">{company.industry}</span>
      </div>
      <p className="text-gray-700 mt-2"><i className="fa-solid fa-location-dot"></i> {company.location}</p>
    </div>

   </div>

  <div className="flex flex-row mt-8 gap-2 md:gap-18">
    <div className="flex flex-row gap-1 md:gap-3 items-center">
      <i className="fa-solid fa-briefcase text-purple-500"></i>
      <p className="text-gray-700 text-sm md:text-base"> {company.openPositions} open positions</p>
    </div>
     <div className="flex flex-row gap-4 items-center">
     <i className="fa-solid fa-users text-purple-500"></i>
      <p className="text-gray-700 text-sm md:text-base"><span className="text-purple-700">{company.companySize}</span> Employees</p>
    </div>
     <div className="flex flex-row gap-4 items-center">
     <i className="fa-regular fa-calendar-days text-purple-500"></i>
      <p className="text-gray-700 text-sm md:text-base"> {company.founded} </p>
    </div>
  </div>
   
    </div>
      </div>

  )
}

export default DetailHead

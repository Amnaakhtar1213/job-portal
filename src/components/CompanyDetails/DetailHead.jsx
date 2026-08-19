import React from 'react'

const DetailHead = ({company}) => {


  return (
    <div className="">
      <h1 className="text-blue-700 text-4xl font-bold text-center ">COMPANY DETAILS</h1>

<div className="bg-white mt-14 px-6 md:px-20 py-4 md:py-6 border border-blue-700 rounded-2xl shadow-lg shadow-blue-300 w-[80%] mx-auto hover:-translate-y-2 transition-all duration-300">

  <div className="flex justify-end">
    <button className="bg-blue-700 text-white px-4 py-1 rounded-xl text-lg"><i className="fa-solid fa-heart"></i> Save Company</button>
   </div>

   <div className="flex flex-row gap-10">

        <div className="w-16 h-16 border border-blue-700 rounded-full flex items-center justify-center">
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
    <div className="flex flex-row gap-3 items-center">
      <i className="fa-solid fa-briefcase text-purple-500"></i>
      <p className="text-gray-700 text-sm md:text-base"> {company.openPositions} </p>
    </div>
     <div className="flex flex-row gap-4 items-center">
     <i className="fa-solid fa-users text-purple-500"></i>
      <p className="text-gray-700"><span className="text-purple-700 text-sm md:text-base">{company.companySize}</span> Employees</p>
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

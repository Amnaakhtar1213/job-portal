import React from 'react'

const Footer = () => {
  return (
   <div className="bg-blue-100 p-8 md:p-12">
     <div className=" flex flex-col md:flex-row justify-center gap-10 md:gap-30">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-blue-700 text-xl md:text-2xl text-center font-bold">NEXORA</h1>
        <p className="text-gray-500 mt-2 md:mt-4 text-center">Your Road to the Future. </p>
        <p className="text-gray-700 mt-4 md:mt-8 text-center">Find the right opportunity and take your next step</p>
      </div>
      <div className="flex flex-row items-center justify-center gap-6 md:gap-10">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-blue-700 mb-4 md:mb-6 text-lg md:text-xl ">For Job Seakers</h1>
          <p className="text-gray-500">Brows Jobs</p>
          <p className="text-gray-500">Saved Jobs</p>
          <p className="text-gray-500">Applications</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-blue-700 text-lg md:text-xl mb-4 md:mb-6">For Companies</h1>
          <p className="text-gray-500">Post a Job</p>
          <p className="text-gray-500">Find Candidates</p>
          <p className="text-gray-500">Company Portal</p>
        </div>
      </div>
    </div>
    <div className="flex flex-row gap-8 mt-8 border-t-2 border-t-blue-300 items-center justify-center">
       <p className="text-gray-500 mt-6">© 2026 NEXORA. All rights reserved.  </p>
        <h3 className="text-gray-500 mt-6">Privacy</h3>
        <h3  className="text-gray-500 mt-6">Terms</h3>
       </div>
   </div>
  )
}

export default Footer

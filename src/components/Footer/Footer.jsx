import React from 'react'

const Footer = () => {
  return (
   <div className="bg-blue-100 p-10 mt-14">
     <div className=" flex flex-row justify-center gap-30">
      <div className="">
        <h1 className="text-blue-700 text-2xl font-bold">NEXORA</h1>
        <p className="text-gray-500 mt-4">Your Road to the Future. </p>
        <p className="text-gray-700 mt-8">Find the right opportunity and take your next step</p>
      </div>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-blue-700 mb-6 text-xl ">For Job Seakers</h1>
          <p className="text-gray-500">Brows Jobs</p>
          <p className="text-gray-500">Saved Jobs</p>
          <p className="text-gray-500">Applications</p>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-semibold text-blue-700 text-xl mb-6">For Companies</h1>
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

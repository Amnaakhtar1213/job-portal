import React from 'react'

const Application = () => {
  return (
    <div className="bg-blue-100 px-24 py-10">
      <h1 className="text-blue-700 font-bold text-5xl text-center">NEXORA</h1>
      <p className="text-gray-400 text-center text-lg mt-2">  Job Application</p>
      <h3 className="text-gray-700 text-xl mt-4">Apply for this position</h3>

      <div className="">
        <h1 className="text-800 font-bold text-2xl mt-6">Frontend Developer</h1>
        <p className="text-gray-500">Microsoft Seattle, USA</p>
         <h1 className="text-blue-700 font-semibold text-2xl mt-6">Personal Information</h1>
        <div className="flex flex-col gap-2 bg-white p-4 rounded-2xl mt-2">
          <label className="text-gray-600">Full Name</label>
          <input type="text" placeholder="Enter your name"
          className="outline-none border border-blue-200 rounded placeholder:text-gray-300 hover:shadow hover:shadow-blue-400 px-2"/>
          <label className="text-gray-600">Email</label>
          <input type="email" placeholder="Enter Email" className="outline-none border border-blue-200 rounded placeholder:text-gray-300 hover:shadow hover:shadow-blue-400 px-2"/>
         <label className="text-gray-600">Phone Number</label>
         <input type="tel" placeholder="Enter phone number" className="outline-none border border-blue-200 rounded placeholder:text-gray-300 hover:shadow hover:shadow-blue-400 px-2"/>
        </div>
        <h1 className="text-blue-700 font-semibold text-2xl mt-6">Professional Information</h1>
        <div className="flex flex-col gap-2 bg-white rounded-2xl p-4 mt-2">
          <label className="text-gray-600">Education</label>
          <input type="text" placeholder="e.g. Bachelor's in Computer Science" className="outline-none border border-blue-200 rounded placeholder:text-gray-300 hover:shadow hover:shadow-blue-400 px-2"/>
          <label className="text-gray-600">Experience</label>
          <input type="email" placeholder="e.g. 2 years" className="outline-none border border-blue-200 rounded placeholder:text-gray-300 hover:shadow hover:shadow-blue-400 px-2"/>
         <label className="text-gray-600">Skills</label>
         <input type="tel" placeholder="e.g. React, JavaScript, Tailwind CSS" className="outline-none border border-blue-200 rounded placeholder:text-gray-300 hover:shadow hover:shadow-blue-400 px-2"/>
          <h1 className="text-gray-600">Resume / CV</h1>
          <input type="file" className="outline-none border border-blue-200 rounded text-gray-300 hover:shadow hover:shadow-blue-400 px-2"/>
        </div>
        <div className="text-center">
           <button className="bg-blue-700 text-white  px-4 py-1 rounded-xl hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-2 transition-all duration-300 mt-6 mb-4 font-semibold text-lg ">Submit Application</button>
        </div>
      
      </div>
    </div>
  )
}

export default Application

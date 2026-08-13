import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Application = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [num, setNum] = useState("")
  const [edu, setEdu] = useState("")
  const [experience, setExperience] = useState("")
  const [skills, setSkills] = useState("")
  const [cv, setCv] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const param = useParams()
  const navigate = useNavigate()

  const handleSubmit = () => {
    const applicationData = {
      jobId: Number(param.jobId),
      name: name,
      email: email,
      num: num,
      edu: edu,
      experience: experience,
      skills: skills,
      cv: cv
    }
    const existingApplications = JSON.parse(localStorage.getItem("applicationData")) || []

    const updatedApplications = existingApplications.concat(applicationData)

localStorage.setItem("applicationData", JSON.stringify(updatedApplications))
setIsSubmitted(true)

  }

  return (
  <>
  {isSubmitted ? (
   
    <div className="relative p-30 flex items-center justify-center w-full h-full">
       <div className="absolute top-10 left-60 w-72 h-72 rounded-full bg-blue-400 opacity-20 blur-3xl float-blob"></div>
       <div className=" bg-gray-100 rounded-xl shadow shadow-blue-300 p-10 flex flex-col items-center justify-center mt-10">
       <div className="text-green-600 text-5xl font-bold mt-6">✓</div>
  <h2 className="text-blue-700 font-bold text-3xl mt-8">Application Submitted!</h2>
  <p className="text-gray-400 mt-4">Your application has been successfully submitted.</p>
  <button className="bg-blue-700 text-white px-4 py-2 font-bold rounded-xl shadow-xl shadow-blue-300 hover:-translate-y-2 transition-all duration-300 mt-16" onClick={() => {navigate("/jobs")}}>Back to Jobs</button>
    </div>
     <div className="absolute bottom-0 right-60 w-72 h-72 rounded-full bg-indigo-500 opacity-20 blur-3xl float-blob"></div>
    </div>
  
  ) : (
     <div className="bg-blue-100 px-24 py-10">
      <h1 className="text-blue-700 font-bold text-5xl text-center">NEXORA</h1>
       <p className="text-gray-400 text-center text-lg mt-2">  Job Application</p>
       <h3 className="text-gray-700 text-xl mt-4">Apply for this position</h3>

       <div className="bg-white px-20 py-8  mt-6 rounded-2xl">
         <h1 className="text-800 font-bold text-2xl mt-6">Frontend Developer</h1>
         <p className="text-gray-500">Microsoft Seattle, USA</p>
         <h1 className="text-blue-700 font-semibold text-2xl mt-6">Personal Information</h1>
        <div className="flex flex-col gap-2 bg-blue-100 p-4 rounded-2xl mt-2">
           <label className="text-gray-600">Full Name</label>
           <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"
          className="outline-none border border-blue-200 rounded placeholder:text-gray-300 hover:shadow hover:shadow-blue-400 px-2 py-1"/>
          <label className="text-gray-700">Email</label>
           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" className="outline-none border border-blue-200 rounded placeholder:text-gray-300 hover:shadow hover:shadow-blue-400 px-2 py-1"/>
          <label className="text-gray-700">Phone Number</label>
          <input type="tel" value={num} onChange={(e) => setNum(e.target.value)} placeholder="Enter phone number" className="outline-none border border-blue-200 rounded placeholder:text-gray-300 hover:shadow hover:shadow-blue-400 px-2 py-1"/>
        </div>
        <h1 className="text-blue-700 font-semibold text-2xl mt-6">Professional Information</h1>
        <div className="flex flex-col gap-2 bg-blue-100 rounded-2xl p-4 mt-2">
          <label className="text-gray-700">Education</label>
           <input type="text" value={edu} onChange={(e) => setEdu(e.target.value)} placeholder="e.g. Bachelor's in Computer Science" className="outline-none border border-blue-200 rounded placeholder:text-gray-300 hover:shadow hover:shadow-blue-400 px-2 py-1"/>
         <label className="text-gray-700">Experience</label>
           <input type="text" value={experience} onChange={(e) => setExperience(e.target.value)} placeholder="e.g. 2 years" className="outline-none border border-blue-200 rounded placeholder:text-gray-300 hover:shadow hover:shadow-blue-400 px-2 py-1"/>
        <label className="text-gray-700">Skills</label>
         <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} placeholder="e.g. React, JavaScript, Tailwind CSS" className="outline-none border border-blue-200 rounded placeholder:text-gray-300 hover:shadow hover:shadow-blue-400 px-2 py-1"/>
         <h1 className="text-gray-700">Resume / CV</h1>
          <input type="file" onChange={(e) => setCv(e.target.files[0])} className="outline-none border border-blue-200 rounded text-gray-300 hover:shadow hover:shadow-blue-400 px-2"/>
       </div>
           <button className="bg-blue-700 text-white  px-4 py-1 rounded-xl hover:shadow-xl hover:shadow-blue-300 hover:-translate-y-2 transition-all duration-300 mt-6 mb-4 font-semibold text-lg" onClick={handleSubmit}>Submit Application</button>
         </div>
      
     </div>
  )}
  </>
   

  )
}

export default Application

import React, { useState } from 'react'
import users from '../data/UserData'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Loggin = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const navigate = useNavigate()
  const {jobId} = useParams();

  const handleLogin = () => {
    if(!email || !password){
      setError("Please enter your email and password")
      return 
    }

    const users = JSON.parse(localStorage.getItem("users")) || []

   const user = users.find((user) => user.password === password && user.email === email)

   if(!user){
     setError("User not found")
   } else {
      localStorage.setItem("currentUser", JSON.stringify(user))
    if(jobId){
       navigate(`/application/${jobId}`)
     } else {
       navigate("/jobs")
     }
    }
  }
  return (
    <div className=" bg-blue-200 flex flex-col items-center justify-center p-34">
      <div className="">
          <h1 className="text-blue-700 text-6xl font-bold">NEXORA</h1>
          <p className="text-gray-500 text-lg text-center mt-2"> Your Road to the Future.  </p>
      </div>
      <div className="flex flex-col items-center justify-between gap-6 mt-8 border border-blue-200 bg-white rounded-2xl shadow-2xl p-8  shadow-blue-300 hover:shadow-xl hover:shadow-blue-400">
        <div className="flex flex-col gap-2">
           <label className="text-xl text-gray-600">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} 
          placeholder="Write your email here"
          className="outline-none rounded-2xl border border-blue-300 cursor-pointer shadow shadow-blue-300 placeholder:text-sm placeholder:text-gray-300 px-2 py-1 "/>
        </div>

          <div className="flex flex-col gap-2">
           <label className="text-xl text-gray-600">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"
          className="outline-none rounded-2xl  border border-blue-300 shadow shadow-blue-300 cursor-pointer placeholder:text-sm placeholder:text-gray-300 px-2 py-1"/>
          {error && (
  <p className="text-red-500 text-sm">
    {error}
  </p>)}
        </div>
        <button className="bg-blue-700  text-white font-bold cursor-pointer px-4 py-1 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:shadow-blue-300" onClick={handleLogin}>Login</button>

        <div className="flex flex-col gap-2">
          <p className="text-gray-400">
              Don't have an account?
          </p>
          <Link to="/signup" className="bg-white text-blue-600 border border-blue-300 font-bold px-4 py-1 rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 hover:shadow-blue-300 text-center">Sign Up</Link>
        </div>
      </div>
     
    </div>
  )
}

export default Loggin

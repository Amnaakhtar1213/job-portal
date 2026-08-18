import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const navigate = useNavigate()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [isRegistered, setIsRegistered] = useState(false)

  const handleSubmit = (e) => {
  // browser doesn't reload
    e.preventDefault()

 // if password not match  then stop...
    if(password !== confirmPassword){
      alert("Passwords do not match")
      return;
    }
// here we creat data which help to match data if user already have account or not.
  const data = {
    name: name,
    email: email,
    password: password
  }  

  //first chk if user is already have account or it is empty array

  const users = JSON.parse(localStorage.getItem("users")) || []

  // now chk if the user have account then match it already exits or not for account chk we usually match only emails

  const alreadyExist = users.some((user) => user.email === email)

  //if not then push new user into data ...
  if(!alreadyExist){
      users.push(data)
// then save new user in localStorage.
  localStorage.setItem("users", JSON.stringify(users))  
  
  setIsRegistered(true)
//if already have account stop and tell user to login 
  } else {
   alert("This email is already registered. Please login.")
  }
 
  }

  return (
   <>
   <Nav />
    {isRegistered ? (
  <div className="bg-purple-100 h-screen flex flex-col items-center justify-center">
     <h1 className="text-4xl font-bold text-purple-700">🎉 CONGRATULATIONS ! </h1>
       <p className="text-gray-500 mt-2 text-center text-lg">Your Account has been created </p>
      <p className="text-gray-700">Now please Login</p>
      <button onClick={() => navigate("/loggin")} 
      className="bg-purple-700 text-white px-4 py-1 rounded-xl font-bold text-lg mt-8 hover:shadow-lg hover:shadow-purple-300 hover:-translate-y-2 transition-all duration-300">Login</button>
  </div>
) : (
   <div className="">
    <div className="bg-purple-100 flex flex-col items-center justify-center min-h-screen pt-10 md:pt-20">
        <h1 className="text-purple-700 font-bold text-2xl md:text-4xl">Create Your Account</h1> 
        <p className="text-gray-600 tracking-wide text-base md:text-lg mt-2 md:mt-4">Join NEXORA and find your future</p>

  <form onSubmit={handleSubmit} 
     className="bg-white mt-8 p-6 rounded-2xl shadow-xl shadow-purple-300">
      <div className="flex flex-col">
        <label className="text-purple-700 text-lg">Full Name</label>
        <input type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
         placeholder="Enter Your full name" 
        className="outline-none border border-purple-200 px-2 py-1 rounded-xl hover:shadow-lg hover:shadow-purple-200 mt-2 placeholder:text-gray-300 cursor-pointer"/> 
      </div> 
       <div className="flex flex-col">
        <label className="text-purple-700 text-lg mt-2">E-mail</label>
        <input type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your email"
        className="outline-none border border-purple-200 px-2 py-1 rounded-xl hover:shadow-lg hover:shadow-purple-200 mt-2 placeholder:text-gray-300 cursor-pointer w-lg"/> 
      </div> 
       <div className="flex flex-col">
        <label  className="text-purple-700 text-lg mt-2">Password</label>
        <input type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
        placeholder="Enter Your password"
        className="outline-none border border-purple-200 px-2 py-1 rounded-xl hover:shadow-lg hover:shadow-purple-200 mt-2 placeholder:text-gray-300 cursor-pointer  w-lg"/> 
      </div> 
       <div className="flex flex-col">
        <label className="text-purple-700 text-lg mt-2">Confirm Password</label>
        <input type="password" 
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Enter Your confirm password"
        className="outline-none border border-purple-200 px-2 py-1 rounded-xl hover:shadow-lg hover:shadow-purple-200 mt-2 placeholder:text-gray-300 cursor-pointer  w-lg"/> 
      </div>  

      <div className="flex flex-col items-center mt-6">
        <button type="submit" className="bg-purple-700 text-white font-bold px-4 py-2 text-lg rounded-xl hover:-translate-y-2 transition-all duration-200 hover:shadow-lg hover:shadow-purple-400">Sign Up</button> 
      <p className="text-gray-500 text-center mt-4">Already have an account?</p>  
       <button type="button"
       onClick={() => navigate("/loggin")}className="bg-white text-indigo-700 text-xl border border-indigo-700 px-4 py-1 rounded-xl font-semibold mt-6 hover:scale-120 transition-all hover:shadow-lg hover:shadow-indigo-400 ">Login</button> 
      </div>
      </form>

        
    </div> 
  </div>  
)
}   
   </>
  )
}

export default Signup

import React from 'react'
import Nav from '../components/Nav/Nav'

const Signup = () => {
  return (
    <div className="">
      <Nav />

     <div className="bg-purple-100 flex flex-col items-center justify-center h-screen">
        <h1 className="text-purple-700 font-bold text-4xl">Create Your Account</h1> 
        <p className="text-gray-600 tracking-wide text-lg mt-4">Join NEXORA and find your future</p>

     <form className="bg-white p-6 mt-8 rounded-2xl shadow-xl shadow-purple-300">
      <div className="flex flex-col">
        <label className="text-purple-700 text-lg">Full Name</label>
        <input type="text" placeholder="Enter Your full name" 
        className="outline-none border border-purple-200 px-2 py-1 rounded-xl hover:shadow-lg hover:shadow-purple-200 mt-2 placeholder:text-gray-300 cursor-pointer  w-lg"/> 
      </div> 
       <div className="flex flex-col">
        <label className="text-purple-700 text-lg mt-2">E-mail</label>
        <input type="email" placeholder="Enter Your email"
        className="outline-none border border-purple-200 px-2 py-1 rounded-xl hover:shadow-lg hover:shadow-purple-200 mt-2 placeholder:text-gray-300 cursor-pointer w-lg"/> 
      </div> 
       <div className="flex flex-col">
        <label  className="text-purple-700 text-lg mt-2">Password</label>
        <input type="password" placeholder="Enter Your password"
        className="outline-none border border-purple-200 px-2 py-1 rounded-xl hover:shadow-lg hover:shadow-purple-200 mt-2 placeholder:text-gray-300 cursor-pointer  w-lg"/> 
      </div> 
       <div className="flex flex-col">
        <label  className="text-purple-700 text-lg mt-2">Confirm Password</label>
        <input type="password" placeholder="Enter Your confirm password"
        className="outline-none border border-purple-200 px-2 py-1 rounded-xl hover:shadow-lg hover:shadow-purple-200 mt-2 placeholder:text-gray-300 cursor-pointer  w-lg"/> 
      </div>  

      <div className="flex flex-col items-center mt-6">
        <button className="bg-purple-700 text-white font-bold px-4 py-2 text-lg rounded-xl">Sign Up</button> 
      <p className="text-gray-400 text-center mt-4">Already have an account?</p>  
       <button className="bg-indigo-700 text-white text-xl px-4 py-1 rounded-xl font-semibold mt-6">Login</button> 
      </div>
      </form>   
    </div> 
    </div>
  )
}

export default Signup

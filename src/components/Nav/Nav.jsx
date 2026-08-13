import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'

const Nav = () => {

  const [ currentUser, setCurrentUser ] = useState(JSON.parse(localStorage.getItem("currentUser"))
)

const handleLogout = () => {
  localStorage.removeItem("currentUser")
  setCurrentUser(null)
}

  return (
    <div>
       <nav className="h-14 flex flex-row justify-between items-center px-10 shadow">
        <div className="text-blue-700 text-3xl italic font-bold transition duration-300 ease-in-out hover:[text-shadow:0_0_24px_rgba(29,78,216,0.6)]">NEXORA</div>
        

        <div className="flex flex-row justify-between items-center gap-24 text-gray-700">
          <Link to="/" className="hover:text-blue-700 transition-all duration-300 hover:underline" href="#" target="_blank">Home</Link>
          <Link to="/jobs" className="hover:text-blue-700 transition-all duration-300 hover:underline" href="#" target="_blank">Jobs</Link>
          <Link to="/company" className="hover:text-blue-700 transition-all duration-300 hover:underline" href="#" target="_blank">Companies</Link>
          <Link to="/about" className="hover:text-blue-700 transition-all duration-300 hover:underline">About</Link>
        </div>

        <div className="flex flex-row justify-between gap-6 items-center">

 {currentUser ? (
   <div className="flex items-center gap-10">

 <span className="text-gray-500 font-semibold">
  Welcome,{" "}
  <span className="text-purple-700 font-bold text-xl ml-2">
    {currentUser.name}
  </span>
</span>  

     <button className="bg-blue-700 text-white px-4 py-1 rounded-xl" onClick={handleLogout}>Logout</button>
       </div>
       ) : (
        <div className="flex items-center gap-4">
    <Link
      to="/loggin"
      className="text-blue-700 border px-6 rounded-xl py-1 hover:bg-blue-700 hover:text-white"
    >
      Login
    </Link>

    <button className="bg-blue-700 text-white px-4 py-1 rounded">
      Sign Up
    </button>
  </div>
          ) 
         }
        </div>
      </nav>
    </div>
  )
}

export default Nav

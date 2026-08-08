import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
       <nav className="h-14 flex flex-row justify-between items-center px-10 shadow">
        <div className="text-blue-700 text-3xl italic font-bold transition duration-300 ease-in-out hover:[text-shadow:0_0_24px_rgba(29,78,216,0.6)]">NEXORA</div>
        

        <div className="flex flex-row justify-between items-center gap-24 text-gray-700">
          <Link to="/" className="hover:text-blue-700 transition-all duration-300 hover:underline" href="#" target="_blank">Home</Link>
          <Link to="/jobs" className="hover:text-blue-700 transition-all duration-300 hover:underline" href="#" target="_blank">Jobs</Link>
          <Link to="/company" className="hover:text-blue-700 transition-all duration-300 hover:underline" href="#" target="_blank">Companies</Link>
          <Link to="/about" className="hover:text-blue-700 transition-all duration-300 hover:underline" href="#" target="_blank">About</Link>
        </div>

        <div className="flex flex-row justify-between gap-6 items-center">
          <button className="text-blue-700 border px-6 rounded-xl py-1 hover:bg-blue-700 hover:text-white">Login</button>
           <button className="bg-blue-700 text-white px-4 py-1 rounded 
                   shadow-md hover:bg-blue-800 hover:-translate-y-1 
                   transition transform duration-300 ease-in-out">
  Sign Up
</button>
        </div>
      </nav>
    </div>
  )
}

export default Nav

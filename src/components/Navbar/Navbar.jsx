import React from 'react'
import SearchSection from '../SearchSection/SearchSection'

const Navbar = () => {
  return (
    <div className="h-screen">
      <nav className="h-14 flex flex-row justify-between items-center px-10 shadow">
        <div className="text-blue-700 text-3xl italic font-bold transition duration-300 ease-in-out hover:[text-shadow:0_0_24px_rgba(29,78,216,0.6)]">NEXORA</div>
        {/* <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-500 font-bold italic text-3xl"> */}

        <div className="flex flex-row justify-between items-center gap-24 text-gray-700">
          <a className="hover:text-blue-700 transition-all duration-300 hover:underline" href="#" target="_blank">Home</a>
          <a className="hover:text-blue-700 transition-all duration-300 hover:underline" href="#" target="_blank">Jobs</a>
          <a className="hover:text-blue-700 transition-all duration-300 hover:underline" href="#" target="_blank">Companies</a>
          <a className="hover:text-blue-700 transition-all duration-300 hover:underline" href="#" target="_blank">About</a>
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
      <SearchSection />
    </div>
  )
}

export default Navbar

import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false)

  const [ currentUser, setCurrentUser ] = useState(JSON.parse(localStorage.getItem("currentUser"))
)

const handleLogout = () => {
  localStorage.removeItem("currentUser")
  setCurrentUser(null)
}

  return (
    <div>
       <nav className="fixed top-0 left-0 right-0 h-16 md:h-14 flex flex-row justify-between items-center px-4 md:px-10 shadow bg-white z-50">
        <div className="text-blue-700 text-2xl md:text-3xl italic font-bold">NEXORA</div>

<button
        className="md:hidden text-blue-700 text-2xl w-10 h-10 flex items-center justify-center rounded-lg hover:bg-blue-50"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <i
          className={`fa-solid ${
            isMenuOpen ? "fa-xmark" : "fa-bars"
          }`}
        ></i>
      </button>
        

        <div className="hidden md:flex flex-row justify-between items-center gap-4 md:gap-24 text-gray-700">
          <Link to="/" className="hover:text-blue-700 transition-all duration-300 hover:underline">Home</Link>
          <Link to="/jobs" className="hover:text-blue-700 transition-all duration-300 hover:underline">Jobs</Link>
          <Link to="/company" className="hover:text-blue-700 transition-all duration-300 hover:underline">Companies</Link>
          <Link to="/about" className="hover:text-blue-700 transition-all duration-300 hover:underline">About</Link>
        </div>

        <div className="flex flex-row justify-between gap-6 items-center">

 {currentUser ? (
   <div className=" md:flex items-center justify-center gap-4 md:gap-4">

<span className="md:hidden text-purple-700 font-bold text-xl mr-4">{currentUser.name}</span>

 <span className="hidden md:flex text-gray-500 font-semibold items-center">
  Welcome,{" "}
  <span className=" text-purple-700 font-bold text-xl ml-4">
    {currentUser.name}
  </span>
</span>  
<Link to="/my-applications" className="hidden md:flex bg-white text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white px-4 py-1 rounded-xl">My Applications</Link>

     <button className="hidden md:flex bg-blue-700 text-white px-4 py-1 rounded-xl " onClick={handleLogout}>Logout</button>

     <Link to="/saved-jobs">
        <i className="hidden md:flex fa-solid fa-heart text-purple-600 hover:scale-120 hover:text-purple-500 transition-all text-xl"></i>
    </Link>
       </div>
       ) : (
        <div className="md:flex items-center gap-4">
    <Link
      to="/loggin"
      className="text-blue-700 border px-6 rounded-xl py-1 hover:bg-blue-700 hover:text-white mr-4"
    >
      Login
    </Link>

    <Link to="/signup" className="bg-blue-700 text-white px-4 py-1 rounded">
      Sign Up
    </Link>
  </div>
          ) 
         }
        </div>
      </nav>
      {isMenuOpen && (
       <div className="md:hidden flex flex-col justify-between pl-6 pt-10 gap-4 md:gap-24 text-gray-700 bg-gray-100 pb-4">
          <Link to="/" className="hover:text-blue-700 transition-all duration-300 hover:underline">Home</Link>
          <Link to="/jobs" className="hover:text-blue-700 transition-all duration-300 hover:underline">Jobs</Link>
          <Link to="/company" className="hover:text-blue-700 transition-all duration-300 hover:underline">Companies</Link>
          <Link to="/about" className="hover:text-blue-700 transition-all duration-300 hover:underline">About</Link>
          <Link to="/saved-jobs" className="hover:text-blue-700 transition-all duration-300 hover:underline">
       Saved Jobs
    </Link>
    <Link to="/my-applications" className="hover:text-blue-700 transition-all duration-300 hover:underline">
       My Applications
    </Link>
          <Link className="hover:text-blue-700 transition-all duration-300 hover:underline" onClick={handleLogout}>Logout</Link>
        </div>
    )}
    </div>
  )
}

export default Nav

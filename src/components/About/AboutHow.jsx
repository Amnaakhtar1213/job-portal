import React from 'react'

const AboutHow = () => {
  return (
    <div className="flex flex-col items-center mt-26 px-4">
       <h1 className="text-purple-700 text-2xl md:text-3xl font-bold text-center"> HOW NEXORA WORKS</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16 px-4">
       <div className="group bg-indigo-300 text-white flex flex-col items-center justify-center w-full py-4 px-6 rounded-xl border border-gray-300 shadow-xl shadow-gray-400">
        <div className="w-5 h-5 border border-white items-center justify-center flex rounded-full p-4">01</div>
        <i className="fa-solid fa-magnifying-glass text-gray-500 mt-4 text-2xl group-hover:scale-120 transition-all duration-300"></i>
        <h1 className="text-indigo-700 font-semibold text-xl mt-2">Discover </h1>
        <p className="text-center mt-3">Find companies and opportunities that match your interests.</p>
       </div>
        <div className="group bg-indigo-300 text-white flex flex-col items-center justify-center w-70 py-4 px-6  rounded-xl border border-gray-300 shadow-xl shadow-gray-400">
        <div className="w-5 h-5 border border-gray-400 items-center justify-center flex rounded-full p-4">02</div>
       <h1 className="text-2xl group-hover:scale-120 transition-all duration-300 mt-4">📋</h1>
        <h1 className="text-indigo-700 font-semibold text-xl mt-2"> Explore </h1>
        <p className="text-center mt-3">Browse jobs, explore requirements, and learn about companies.</p>
       </div>
        <div className="group bg-indigo-300 text-white flex flex-col items-center justify-center w-full px-6 py-4 rounded-xl border border-gray-300 shadow-xl shadow-gray-400">
        <div className="w-5 h-5 border border-gray-400 items-center justify-center flex rounded-full p-4">03</div>
        <h1 className="text-2xl group-hover:scale-120 transition-all duration-300 mt-4"> 🚀 </h1>
        <h1  className="text-indigo-700 font-semibold text-xl mt-2">Apply </h1>
        <p className="text-center mt-3">Submit your application and take the next step toward your career.</p>
       </div>
        <div className="group bg-indigo-300 text-white flex flex-col items-center justify-center w-fullpy-4 px-6 rounded-xl border border-gray-300 shadow-xl shadow-gray-400">
        <div className="w-5 h-5 border border-gray-400 items-center justify-center flex rounded-full p-4">04</div>
        <h1 className="text-2xl group-hover:scale-120 transition-all duration-300 mt-4"> 📈</h1>
        <h1 className="text-indigo-700 font-semibold text-xl mt-2"> Grow </h1>
        <p className="text-center mt-3">Connect with the right opportunity and continue building your career.</p>
       </div>
      </div>
    </div>
  )
}

export default AboutHow

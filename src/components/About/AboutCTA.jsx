import React from 'react'

const AboutCTA = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-indigo-700 text-3xl font-bold">Your Future Starts Here </h1>
      <p className="text-gray-500 text-center mt-3">Discover opportunities that match your skills and career goals.</p>
      <button className="group bg-white text-indigo-700 border border-indigo-700 rounded-2xl px-4 py-1 mt-8 shadow-xl shadow-gray-400 hover:bg-indigo-700 hover:text-white hover:shadow-xl hover:shadow-indigo-300">Explore Jobs <i className="fa-solid fa-arrow-right ml-2 group-hover:animate-[leftRight_2s_ease-in-out_infinite]"></i></button>
    </div>
  )
}

export default AboutCTA

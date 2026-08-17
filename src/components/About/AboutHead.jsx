import React from 'react'

const AboutHead = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-purple-700 text-4xl font-bold text-center"> ABOUT NEXORA   </h1>
      <p className="text-gray-600 text-lg mt-2">Empowering Careers,    Connecting Futures  </p>
      <p className="text-gray-500 mt-2 text-center"> NEXORA connects talented people with  opportunities that move their careers
   forward. </p>
<button className="group bg-purple-700 text-white px-4 py-1 rounded-xl mt-8">Explore Jobs <i className="fa-solid fa-arrow-right ml-2 group-hover:animate-[leftRight_2s_ease-in-out_infinite]"></i></button>
    </div>
  )
}

export default AboutHead

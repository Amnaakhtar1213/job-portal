import React from 'react'
import { Link } from 'react-router-dom'

const EmptySavedJobs = () => {
  return (

    <div className="relative min-h-[70vh] w-full overflow-hidden rounded-3xl flex items-center justify-center px-6 py-16">

  {/* Background blobs */}
  <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-blue-300/30 blur-3xl"></div>

  <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-purple-400/30 blur-3xl"></div>

  {/* Empty state card */}
  <div className="relative z-10 max-w-lg w-full bg-white rounded-3xl shadow-xl px-8 py-12 text-center border border-indigo-100">

    {/* Heart icon */}
    <div className="mx-auto w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mb-6">
      <i className="fa-solid fa-heart-crack text-purple-600 text-4xl"></i>
    </div>

    {/* Heading */}
    <h2 className="text-2xl font-bold text-indigo-700">
      No Saved Jobs Yet
    </h2>

    {/* Description */}
    <p className="text-gray-500 mt-3 leading-relaxed">
      You haven't saved any jobs yet.
      <br />
      Start exploring opportunities and save the ones
      <br />
      you're interested in.
    </p>

    {/* Button */}
    <Link
      to="/jobs"
      className="inline-block mt-8 bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold
      hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-indigo-200
      transition-all duration-300"
    >
      <i className="fa-solid fa-magnifying-glass mr-2"></i>
      Browse Jobs
    </Link>

  </div>

</div>


//     <div className="relative bg-indigo-100 mt-20 p-20">
//       <div className="absolute bottom-0 right-20 w-72 h-72 rounded-full bg-violet-500 opacity-30 blur-3xl float-blob-reverse"></div>
//       <div className="flex flex-col items-center justify-center gap-4">
//         <i className="fa-solid fa-heart-crack text-purple-700 text-4xl"></i>
//       <h2 className="text-indigo-600 text-xl font-semibold">No Saved Jobs Yet</h2>
//       <p className="text-gray-400 text-center">You haven't saved any jobs yet.
// Start exploring jobs and save the
// ones you're interested in.</p>
// <Link to="/jobs" className="bg-indigo-700 text-white px-4 py-1 rounded-xl mt-12 font-semibold hover:shadow-lg hover:shadow-indigo-300 hover:bg-indigo-600 hover:-translate-y-2 transition-all duration-300">
//       Browse Jobs 
// </Link>
//       </div>
//         <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-blue-300 opacity-30 blur-3xl float-blob-reverse"></div>
//     </div>
  )
}

export default EmptySavedJobs

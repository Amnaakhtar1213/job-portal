import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumbs = ({job}) => {
  return (
    <div className="flex gap-4 px-10 items-center py-2 text-blue-700 sticky top-0 left-0 bg-white">
      <Link to="/">Home</Link>
      <p className="text-2xl"> › </p>
      <Link to="/jobs">Jobs</Link>
        <p className="text-2xl"> › </p>
        <h3>{job.title}</h3>
    </div>
  )
}

export default BreadCrumbs

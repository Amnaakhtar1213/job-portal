import React from 'react'
import JobsHeader from '../Jobs/JobsHeader'
import JobsGrid from '../Jobs/JobsGrid'



const RightSide = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <JobsHeader />
      <JobsGrid />
    
    </div>
  )
}

export default RightSide

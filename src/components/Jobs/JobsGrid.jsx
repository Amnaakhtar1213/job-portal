import React from 'react'
import JobsCard from '../JobsCard/JobsCard'

const JobsGrid = () => {
  return (
    <div className="flex flex-wrap gap-4 mt-10">
     <JobsCard />
       <JobsCard />
         <JobsCard />
           <JobsCard />
    </div>
  )
}

export default JobsGrid

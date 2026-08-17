import React, { useState } from 'react'
 import JobsHeader from '../Jobs/JobsHeader'
 import JobsGrid from '../Jobs/JobsGrid'



const RightSide = ({jobs, location, category, jobType, experience, salaryRange}) => {

   const [sortBy, setSortBy] = useState("All")
  
  return (
    <div>
      <JobsHeader 
         sortBy={sortBy} 
         setSortBy={setSortBy}/>

      <JobsGrid 
      sortBy={sortBy}
         location={location} 
         category={category} 
         jobType={jobType} 
         experience={experience} 
         salaryRange={salaryRange}/>
    
    </div>
  )
}

export default RightSide

import React from 'react'
 import JobsHeader from '../Jobs/JobsHeader'
 import JobsGrid from '../Jobs/JobsGrid'



const RightSide = ({location, category, jobType, experience, salaryRange}) => {
  return (
    <div className="">
      <JobsHeader />
      <JobsGrid location={location} category={category} jobType={jobType} experience={experience} salaryRange={salaryRange}/>
    
    </div>
  )
}

export default RightSide

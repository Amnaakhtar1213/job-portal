import React from 'react'
import JobCard from './JobCard'
import jobs from '../../data/JobInfo'
import { useSearchParams } from 'react-router-dom'


const JobsGrid = () => {

  const [searchParam] = useSearchParams()

  const search = searchParam.get("search")

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      { jobs.filter((job) => {

        if(!search){
          return true
        } 
        
        if (
          job.title.toLowerCase().includes(search.toLowerCase())
         ||
           job.skills.some((skill) => {
          return skill.toLowerCase().includes(search.toLowerCase())
        })
      ) {
        return true
      }
          return false
      })
        .map((job) => {
          return <JobCard key={job.id} job={job}/>
     })}
  
      
    </div>
  )
}

export default JobsGrid

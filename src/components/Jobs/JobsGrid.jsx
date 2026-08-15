import React from 'react'
import JobCard from './JobCard'
import jobs from '../../data/JobInfo'
import { useSearchParams } from 'react-router-dom'


const JobsGrid = ({location, category, jobType, experience, salaryRange}) => {

  const [searchParam] = useSearchParams()

  const search = searchParam.get("search")

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {jobs.filter((job) => {

        const matchesSearch = !search || job.title.toLowerCase().includes(search.toLowerCase()) ||  job.skills.some((skill) => 
           skill.toLowerCase().includes(search.toLowerCase())
        )
        const matchesCategory = !category || job.category === category

        const matchesJobType = !jobType || job.type === jobType

        const matchesExperience = !experience || job.Experience === experience

        const matchesLocation = !location || job.location.includes(location)

       let matchesSalary = true
        
      if (salaryRange === "0-80") {
  matchesSalary = job.salaryMin < 80
}

if (salaryRange === "80-100") {
  matchesSalary = job.salaryMax >= 80 && job.salaryMin <= 100
}

if (salaryRange === "100-120") {
  matchesSalary = job.salaryMax >= 100 && job.salaryMin <= 120
}

if (salaryRange === "120+") {
  matchesSalary = job.salaryMax >= 120
}

        return matchesSearch && matchesLocation && matchesCategory && matchesJobType && matchesExperience && matchesSalary
      })
        .map((job) => {
          return <JobCard key={job.id} job={job}/>
     })}
  
      
    </div>
  )
}

export default JobsGrid

import React from 'react'
import JobCard from './JobCard'
import jobs from '../../data/JobInfo'
import { useSearchParams } from 'react-router-dom'


const JobsGrid = ({location, category, jobType, experience, salaryRange, sortBy}) => {

  const [searchParam] = useSearchParams()
  const search = searchParam.get("search")
  const company = searchParam.get("company")

    const filteredJobs = jobs.filter((job) => {

      const matchesSearch = !search || job.company.toLowerCase().includes(search.toLowerCase()) || job.title.toLowerCase().includes(search.toLowerCase()) ||  job.skills.some((skill) => 
           skill.toLowerCase().includes(search.toLowerCase())
        )
        const matchesCategory = !category || job.category === category

        const matchesJobType = !jobType || job.type === jobType

        const matchesExperience = !experience || job.Experience === experience

        const matchesLocation = !location || job.location.includes(location)

        const matchesCompany = 
        !company || job.company === company

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


        return matchesSearch && matchesLocation && matchesCategory && matchesJobType && 
        matchesCompany &&
        matchesExperience && matchesSalary
      })

  const sortedJobs = [...filteredJobs]
     if(sortBy === "Salary: High to Low"){
      sortedJobs.sort((a,b)  => b.salaryMax - a.salaryMax)
     } if(sortBy === "Salary: Low to High"){
      sortedJobs.sort((a, b) => a.salaryMin - b.salaryMin)
     } if(sortBy === "Newest"){
      sortedJobs.sort((a, b) => parseInt(a.posted) - parseInt(b.posted))
     } if(sortBy === "Oldest"){
      sortedJobs.sort((a, b) => parseInt(b.posted) - parseInt(a.posted))
     }
      
      const getRelevanceScore = (job) => {
        if(!search) return 0

        let score = 0;

           if(job.title.toLowerCase().includes(search.toLowerCase())){
               score +=2
         } if
           (job.skills.some((skill) => 
               skill.toLowerCase().includes(search.toLowerCase()))){
                 score +=1
         }
         return score
             }

     
     if(sortBy === "Most Relevant"){
        sortedJobs.sort(
          (a, b) => getRelevanceScore(b) - getRelevanceScore(a))
     }

    

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

    {sortedJobs.length === 0 ? (
      
      <div className="mt-30 ml-70 w-full">
        <h2 className=" text-indigo-700 text-2xl font-bold text-center">No jobs found !!!</h2>
         <p className="text-gray-400 text-lg text-center ">Try changing or removing some filters or <span className="text-gray-500">Refresh</span> it .</p>
      </div>

    ) : (
      sortedJobs.map((job) => 
      <JobCard job={job} key={job.id}/>)
    )}
      
    </div>
  )
}

export default JobsGrid

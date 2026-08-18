import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import JobHero from '../components/Jobs/JobHero'
import FilterSidebar from '../components/Jobs/FilterSidebar'
import RightSide from '../components/rightSide/RightSide'
import { useSearchParams } from 'react-router-dom'
import jobs from '../data/JobInfo'


const Jobs = () => {
  const [location, setLocation] = useState("")
  const [category, setCategory] = useState("")
  const [jobType, setJobType] = useState("")
  const [experience, setExperience] = useState("")
  const [salaryRange, setSalaryRange ] = useState("")
  const [searchParam, setSearchParam] = useSearchParams()

  const resetFilter = () => {
    setLocation("")
  setCategory("")
  setJobType("")
  setExperience("")
  setSalaryRange("")
  setSearchParam({})
  }

  return (
    <div className="flex flex-col">

      <JobHero />
      <section className="flex flex-col md:flex-row gap-6 md:gap-20 px-4 pb-8 md:pb-14">
        <div className=" shrink-0 md:sticky top-24 self-start">
          <FilterSidebar 
          location={location} 
          setLocation={setLocation} 
          category={category} 
          setCategory={setCategory} 
          jobType={jobType} 
          setJobType={setJobType} 
          experience={experience} setExperience={setExperience} salaryRange={salaryRange} setSalaryRange={setSalaryRange} resetFilter={resetFilter}
          searchParam={searchParam}
           setSearchParam={setSearchParam}/>
         
        </div>
         
      <RightSide jobs={jobs} location={location} category={category} jobType={jobType} experience={experience} salaryRange={salaryRange}/>
      </section>
     
    </div>
  )
}

export default Jobs

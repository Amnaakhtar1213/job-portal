import React, { useState } from 'react'
import Nav from '../components/Nav/Nav'
import JobHero from '../components/Jobs/JobHero'
import FilterSidebar from '../components/Jobs/FilterSidebar'
import RightSide from '../components/rightSide/RightSide'
import { useSearchParams } from 'react-router-dom'


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
      <Nav />
      <JobHero />
      <section className="flex items-start gap-18">
        <div className=" shrink-0 sticky top-24 self-start">
          <FilterSidebar location={location} setLocation={setLocation} category={category} setCategory={setCategory} jobType={jobType} setJobType={setJobType} experience={experience} setExperience={setExperience} salaryRange={salaryRange} setSalaryRange={setSalaryRange} resetFilter={resetFilter}/>
        </div>
         
      <RightSide location={location} category={category} jobType={jobType} experience={experience} salaryRange={salaryRange}/>
      </section>
     
    </div>
  )
}

export default Jobs

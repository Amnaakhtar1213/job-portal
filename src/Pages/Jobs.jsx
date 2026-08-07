import React from 'react'
import Nav from '../components/Nav/Nav'
import JobHero from '../components/Jobs/JobHero'
import FilterSidebar from '../components/Jobs/FilterSidebar'
import RightSide from '../components/rightSide/RightSide'


const Jobs = () => {
  return (
    <div className="bg-indigo-100">
      <Nav />
      <JobHero />
      <section className="flex flex-row items-center gap-10">
         <FilterSidebar />
      <RightSide />
      </section>
     
    </div>
  )
}

export default Jobs

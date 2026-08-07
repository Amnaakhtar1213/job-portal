import React from 'react'
import Nav from '../components/Nav/Nav'
import JobHero from '../components/Jobs/JobHero'
import FilterSidebar from '../components/Jobs/FilterSidebar'
import RightSide from '../components/rightSide/RightSide'


const Jobs = () => {
  return (
    <div className="flex flex-col">
      <Nav />
      <JobHero />
      <section className="flex items-start gap-18">
        <div className=" shrink-0 sticky top-24 self-start">
          <FilterSidebar />
        </div>
         
      <RightSide />
      </section>
     
    </div>
  )
}

export default Jobs

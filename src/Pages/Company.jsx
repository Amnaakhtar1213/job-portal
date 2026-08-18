import React, { useState } from 'react'
import CompHero from '../components/Company/CompHero'
import FeaturedComp from '../components/Company/FeaturedComp'
import CompCTA from '../components/Company/CompCTA'
import CompSearch from '../components/Company/CompSearch'
import CompGrid from '../components/Company/CompGrid'
import CompCard from '../components/Company/CompCard'
import Nav from '../components/Nav/Nav'

const Company = () => {
  const [search, setSearch] = useState("")

  return (
   <div>   
     <div className="p-10">
      <CompHero />
      <CompSearch setSearch={setSearch}/>
      <FeaturedComp search={search}/>
      <CompCTA />
      
    </div>
   </div>
  )
}

export default Company

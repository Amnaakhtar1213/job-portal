import React from 'react'
import CompCard from './CompCard'

const CompGrid = () => {
  return (
    <div className="">
        <div className="flex flex-row justify-center flex-wrap gap-6 md:gap-10 px-2">
             <CompCard />
              <CompCard />
               <CompCard />
                <CompCard />
           </div>
    </div>
  )
}

export default CompGrid

import React from 'react'
import CompCard from './CompCard'

const CompGrid = () => {
  return (
    <div className="">
        <div className="flex flex-row justify-center flex-wrap gap-10">
             <CompCard />
              <CompCard />
               <CompCard />
                <CompCard />
           </div>
    </div>
  )
}

export default CompGrid

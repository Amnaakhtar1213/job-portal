import React from 'react'
import MyApplicCard from './MyApplicCard'
import EmptyAppMsg from './EmptyAppMsg'

const MyApplicGrid = ({appliedJobs, handleWithdraw}) => {
  return (
    <div>
      {appliedJobs.length === 0 ? (
        <EmptyAppMsg />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-2">
{appliedJobs.map((appliedJob) => 
         <MyApplicCard key={appliedJob.id} appliedJob={appliedJob} handleWithdraw={handleWithdraw}/>)}
    </div>
      )}
    </div>
    
  )
}

export default MyApplicGrid

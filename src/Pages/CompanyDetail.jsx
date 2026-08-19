import React from 'react'
import DetailHead from '../components/CompanyDetails/DetailHead'
import ComAbout from '../components/CompanyDetails/ComAbout'
import ComOverview from '../components/CompanyDetails/ComOverview'
import ComJobs from '../components/CompanyDetails/ComJobs'
import Benefit from '../components/CompanyDetails/Benefit'
import WorkCulture from '../components/CompanyDetails/WorkCulture'
import SimilarCom from '../components/CompanyDetails/SimilarCom'
import companies from '../data/CompanyInfo'
import { useParams } from 'react-router-dom'

const CompanyDetail = () => {

  const {id} = useParams()
  const company = companies.find((company) => company.id === Number(id))



  return (
    <div className="bg-purple-100 p-24">
      <DetailHead company={company}/>
      <ComAbout company={company}/>
      <ComOverview company={company}/>
      <ComJobs company={company}/>
      <Benefit company={company}/>
      <WorkCulture company={company} />
      <SimilarCom company={company}/>
    </div>
  )
}

export default CompanyDetail

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

  console.log("helloo")
  console.log("URL ID:", id)

  return (
    <div className="bg-purple-100 p-24">
      <DetailHead company={company}/>
      <ComAbout />
      <ComOverview />
      <ComJobs />
      <Benefit />
      <WorkCulture />
      <SimilarCom />
    </div>
  )
}

export default CompanyDetail

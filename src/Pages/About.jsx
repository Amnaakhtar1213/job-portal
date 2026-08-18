import React from 'react'
import AboutHead from '../components/About/AboutHead'
import AboutMission from '../components/About/AboutMission'
import AboutState from '../components/About/AboutState'
import AboutValue from '../components/About/AboutValue'
import AboutHow from '../components/About/AboutHow'
import AboutCTA from '../components/About/AboutCTA'
import Nav from '../components/Nav/Nav'

const About = () => {
  return (
    <div className=" bg-purple-100">
     <div className="p-6 md:p-16">
       <AboutHead />
      <AboutMission />
      <AboutState />
      <AboutValue />
      <AboutHow />
      <AboutCTA />
     </div>
    </div>
  )
}

export default About

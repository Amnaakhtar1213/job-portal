import React from 'react'
import AboutHead from '../components/About/AboutHead'
import AboutMission from '../components/About/AboutMission'
import AboutState from '../components/About/AboutState'
import AboutValue from '../components/About/AboutValue'
import AboutHow from '../components/About/AboutHow'
import AboutCTA from '../components/About/AboutCTA'

const About = () => {
  return (
    <div className="p-16 bg-purple-100">
      <AboutHead />
      <AboutMission />
      <AboutState />
      <AboutValue />
      <AboutHow />
      <AboutCTA />
    </div>
  )
}

export default About

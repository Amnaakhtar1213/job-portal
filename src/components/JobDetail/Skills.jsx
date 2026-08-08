import React from 'react'

const Skills = ({job}) => {
  return (
    <div className="max-w-7xl mx-auto bg-white border border-blue-200 rounded-3xl p-8 shadow-sm mt-6">
      <h2 className="text-blue-700 text-4xl font-bold text-center">Skills</h2>
      <div className="flex flex-wrap gap-6 mt-6">
        {job.skills.map((skill, idx) => {
          return <span  key={idx}
            className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full font-medium hover:shadow hover:shadow-blue-400">
            {skill}
          </span>
        })}
      </div>
    </div>
  )
}

export default Skills

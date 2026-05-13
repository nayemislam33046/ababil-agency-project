import React from 'react'
import TeamHeaders from './sections/teamHeader/TeamHeader'
import TeamSection from './sections/teamSection/TeamSection'
import TeamMemberBlog from './sections/teamMemberBlog/teamMemberBlog'

const page = () => {
  return (
    <div className="bg-white">
        <TeamHeaders/>
        <TeamSection/>
        <TeamMemberBlog/>
    </div>
  )
}

export default page
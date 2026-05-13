import TeamHeaders from './sections/teamHeader/TeamHeader'
import TeamSection from './sections/teamSection/TeamSection'
import TeamMemberBlog from './sections/teamMemberBlog/teamMemberBlog'
import CareerSection from '../sections/aboutCareerSection/CareerSection'
import ContactSection from '@/components/sections/ContactSection/ContuctSection'

const page = () => {
  return (
    <div className="bg-white">
        <TeamHeaders/>
        <TeamSection/>
        <TeamMemberBlog/>
        <CareerSection/>
        <ContactSection/>
    </div>
  )
}

export default page
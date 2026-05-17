import FAQSection from "@/components/sections/FAQSection/faqs"
import CareerSection from "../about/sections/aboutCareerSection/CareerSection"
import TeamMemberBlog from "../about/teampage/sections/teamMemberBlog/teamMemberBlog"
import CareerHeader from "./section/careerHeader/CareerHeader"
import ContactSection from "@/components/sections/ContactSection/ContuctSection"
import ActivitiesSlider from "../about/teampage/sections/activitiesSlider/ActivitiesSlider"
import CareerHeroSection from "./section/careerHeroSection/CareerHeroSection"
import OurStory from "./section/OurCareerStory/OurStory"
import GameNightSection from "./section/GameNightSection/GameNightSection"

const page = () => {
  return (
    <div className="bg-white">
      <CareerHeader />
      <CareerHeroSection />
      <OurStory />
      <GameNightSection />
      <ActivitiesSlider />
      <TeamMemberBlog />
      <CareerSection />
      <FAQSection />
      <ContactSection />
    </div>
  )
}

export default page
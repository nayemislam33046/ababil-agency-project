import FAQSection from "@/components/sections/FAQSection/faqs"
import AboutHeader from "./sections/aboutHeader/aboutHeader"
import ContactSection from "@/components/sections/ContactSection/ContuctSection"
import AboutSlider from "./sections/aboutSlider/aboutSlider"
import AboutShowcase from "./sections/aboutShowcase/aboutShowcase"
import VisionaryPartnerships from "./sections/visionaryPartnerships/VisionaryPartnerships"
import AboutSection from "./sections/AboutSection/AboutSection"
import TeamMembersSlider from "./sections/teamMembers/teamMembersSlider"
const page = () => {
  return (
    <div className="bg-white">
      <AboutHeader />
      <AboutSlider />
      <AboutShowcase />
      <VisionaryPartnerships/>
      <AboutSection/>
      <TeamMembersSlider/>
      <FAQSection />
      <ContactSection />
    </div>
  )
}
export default page
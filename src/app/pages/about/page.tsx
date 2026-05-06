import FAQSection from "@/components/sections/FAQSection/faqs"
import AboutHeader from "./sections/aboutHeader/aboutHeader"
import ContactSection from "@/components/sections/ContactSection/ContuctSection"
import AboutSlider from "./sections/aboutSlider/aboutSlider"

const page = () => {
  return (
    <div className="bg-white">
      <AboutHeader/>
      <AboutSlider/>
      <FAQSection/>
      <ContactSection/>
    </div>
  )
}

export default page
import FAQSection from "@/components/sections/FAQSection/faqs"
import AboutHeader from "./sections/aboutHeader/aboutHeader"
import ContactSection from "@/components/sections/ContactSection/ContuctSection"

const page = () => {
  return (
    <>
      <AboutHeader/>
      <FAQSection/>
      <ContactSection/>
    </>
  )
}

export default page
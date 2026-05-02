import ContactSection from "@/components/sections/ContactSection/ContuctSection"
import Industry from "./sections/IndustrySlider/IndustrySlider"
import Services from "./sections/Services"
import ServicesHeader from "./sections/ServicesHeader"
import ServicesSection from "./sections/ServicesSection/ServicesSection"
import TestimonialSection from "./sections/TestimonialServiceSection/TestimonialSection"
import WhyUsSection from "./sections/whyUsSection/WhyUsSection"

const page = () => {
  return (
    <div className="bg-white">
      <ServicesHeader />
      <Services/>
      <WhyUsSection/>
      <Industry/>
      <ServicesSection/>
      <TestimonialSection/>
      <ContactSection/>
    </div>
  )
}

export default page
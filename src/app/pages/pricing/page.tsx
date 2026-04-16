import CallToAction from '@/components/sections/calltoaction'
import PricingHeader from './sections/header'
import AddressGrid from '@/components/sections/AddressGrid'
import ComparisonSection from '@/components/sections/ComparisonSection'
import ContactSection from '@/components/sections/ContuctSection'
import Footer from '@/components/sections/Footer'
import SuccessStoriesSlider from '@/components/sections/SuccessStoriesSlider'
import BonusSection from './sections/BonusSection'
import ServicesMarks from './sections/ServicesSection'
import ComparisonTable from './sections/ComparisonTables/ComparisonTable'
import WorksSection from './sections/WorksSection'
import FAQSection from '@/components/sections/faqs'

const Pricing = () => {
  return (
    <>
        <PricingHeader/>
        <BonusSection/>
        <ServicesMarks/>
        <SuccessStoriesSlider/>
        <ComparisonSection/>
        <ComparisonTable/>
        <WorksSection/>
        <FAQSection/>
        <ContactSection />
        <CallToAction />
        <AddressGrid/>
        <Footer/>
    </>
  )
}

export default Pricing
import CallToAction from '@/components/sections/CallToAction/calltoaction'
import PricingHeader from './sections/header'
import AddressGrid from '@/components/sections/AddressGrid/AddressGrid'
import ComparisonSection from '@/components/sections/ComparisonSection/ComparisonSection'
import ContactSection from '@/components/sections/ContactSection/ContuctSection'
import Footer from '@/components/sections/Footer/Footer'
import SuccessStoriesSlider from '@/components/sections/SuccessStoriesSlider/SuccessStoriesSlider'
import BonusSection from './sections/BonusSection'
import ServicesMarks from './sections/ServicesSection'
import ComparisonTable from './sections/ComparisonTables/ComparisonTable'
import WorksSection from './sections/WorksSection'
import FAQSection from '@/components/sections/FAQSection/faqs'

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
        
    </>
  )
}

export default Pricing
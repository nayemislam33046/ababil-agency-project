import PricingHeader from './sections/PricingHeaders/header'
import ComparisonSection from '@/components/sections/ComparisonSection/ComparisonSection'
import ContactSection from '@/components/sections/ContactSection/ContuctSection'
import SuccessStoriesSlider from '@/components/sections/SuccessStoriesSlider/SuccessStoriesSlider'
import BonusSection from './sections/PricingBonusSection/BonusSection'
import ServicesMarks from './sections/ServicesMarksSection/ServicesSection'
import ComparisonTable from './sections/ComparisonTables/ComparisonTable'
import WorksSection from './sections/PricingWorksSection/WorksSection'
import FAQSection from '@/components/sections/FAQSection/faqs'

const Pricing = () => {
  return (
    <>
      <PricingHeader />
      <BonusSection />
      <ServicesMarks />
      <SuccessStoriesSlider />
      <ComparisonSection />
      <ComparisonTable />
      <WorksSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}

export default Pricing
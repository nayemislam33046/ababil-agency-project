import CallToAction from '@/components/sections/calltoaction'
import PricingHeader from './sections/header'
import AddressGrid from '@/components/sections/AddressGrid'
import ComparisonSection from '@/components/sections/ComparisonSection'
import ContactSection from '@/components/sections/ContuctSection'
import Footer from '@/components/sections/Footer'
import SuccessStoriesSlider from '@/components/sections/SuccessStoriesSlider'
import BonusSection from './sections/BonusSection'

const Pricing = () => {
  return (
    <>
        <PricingHeader/>
        <BonusSection/>
        <SuccessStoriesSlider/>
        <ComparisonSection/>
        <ContactSection />
        <CallToAction />
        <AddressGrid/>
        <Footer/>
    </>
  )
}

export default Pricing
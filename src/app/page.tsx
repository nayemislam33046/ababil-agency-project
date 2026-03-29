import About from '@/components/sections/about'
import ComparisonSection from '@/components/sections/ComparisonSection'
import Headers from '@/components/sections/headers'
import Headline from '@/components/sections/Headline'
import LogoMarquee from '@/components/sections/logoMarquee'
import ServiceCard from '@/components/sections/portfolio/portfolio'
import PricingSection from '@/components/sections/pricing'
import ServicesSection from '@/components/sections/services'
import SuccessStoriesSlider from '@/components/sections/SuccessStoriesSlider'
import Support from '@/components/sections/support'
import Testimonials from '@/components/sections/testimonials'
const page = () => {
  return (
    <div className='max-w-400 mx-auto'>
      <Headers />
      <LogoMarquee/>
      <About/>
      <ServiceCard/>
      <SuccessStoriesSlider/>
      <ServicesSection/>
      <Support/>
      <Testimonials/>
      <PricingSection/>
      <ComparisonSection/>
      {/* <Headline/>       */}
    </div>
  )
}

export default page
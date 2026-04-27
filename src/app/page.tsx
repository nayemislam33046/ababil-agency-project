import About from '@/components/sections/About/about'
import BlogSection from '@/components/sections/BlogSection/BlogSection'
import CallToAction from '@/components/sections/CallToAction/calltoaction'
import ComparisonSection from '@/components/sections/ComparisonSection/ComparisonSection'
import ContactSection from '@/components/sections/ContactSection/ContuctSection'
import FAQSection from '@/components/sections/FAQSection/faqs'
import Headers from '@/components/sections/Headers/headers'
import LogoMarquee from '@/components/sections/Logos/logoMarquee'
import ServiceCard from '@/components/sections/portfolio/portfolio'
import PricingContent from '@/components/sections/PricingSection/pricingContent'
import SuccessStoriesSlider from '@/components/sections/SuccessStoriesSlider/SuccessStoriesSlider'
import Support from '@/components/sections/Support/support'
import Testimonials from '@/components/sections/Testimonials/testimonials'
const page = () => {
  return (
    <div className='max-w-400 mx-auto'>
      <Headers />
      <LogoMarquee />
      <About />
      <ServiceCard />
      <SuccessStoriesSlider />
      <BlogSection />
      <Support />
      <Testimonials />
      <PricingContent/>
      <ComparisonSection />
      <FAQSection />
      <ContactSection isContact={false} />
      <CallToAction />
    </div>
  )
}
export default page
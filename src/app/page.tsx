import About from '@/components/sections/about'
import Headers from '@/components/sections/headers'
import Headline from '@/components/sections/Headline'
import LogoMarquee from '@/components/sections/logoMarquee'
import ServiceCard from '@/components/sections/portfolio/portfolio'
import ServicesSection from '@/components/sections/services'
import SuccessStoriesSlider from '@/components/sections/SuccessStoriesSlider'
import Support from '@/components/sections/support'
const page = () => {
  return (
    <>
      <Headers />
      <LogoMarquee/>
      <About/>
      <ServiceCard/>
      <SuccessStoriesSlider/>
      <ServicesSection/>
      <Support/>
      <Headline/>
    </>
  )
}

export default page
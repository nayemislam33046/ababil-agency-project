import About from '@/components/sections/about'
import Headers from '@/components/sections/headers'
import Headline from '@/components/sections/Headline'
import LogoMarquee from '@/components/sections/logoMarquee'
import ServiceCard from '@/components/sections/portfolio/portfolio'
import SuccessStoriesSlider from '@/components/sections/SuccessStoriesSlider'
const page = () => {
  return (
    <>
      <Headers />
      <LogoMarquee/>
      <About/>
      <ServiceCard/>
      <SuccessStoriesSlider/>
      <Headline/>
    </>
  )
}

export default page
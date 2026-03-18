import About from '@/components/sections/about'
import Headers from '@/components/sections/headers'
import Headline from '@/components/sections/headline'
import LogoMarquee from '@/components/sections/logoMarquee'
import ServiceCard from '@/components/sections/portfolio'
const page = () => {
  return (
    <>
      <Headers />
      <LogoMarquee/>
      <About/>
      {/* <ServiceCard/> */}
      {/* <Headline/> */}

    </>
  )
}

export default page
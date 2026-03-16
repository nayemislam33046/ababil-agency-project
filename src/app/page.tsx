import About from '@/components/sections/about'
import Headers from '@/components/sections/headers'
import Headline from '@/components/sections/headline'
import LogoMarquee from '@/components/sections/logoMarquee'
const page = () => {
  return (
    <>
      <Headers />
      <LogoMarquee/>
      <About/>
      <Headline/>

    </>
  )
}

export default page
import React from 'react'
import ContactHeader from './sections/ContactHeader'
import ContactSection from '@/components/sections/ContuctSection'
import ContactContent from './sections/ContactContent'
import SuccessStories from './sections/SuccessStories'
import FAQSection from '@/components/sections/faqs'
import CallToAction from '@/components/sections/calltoaction'
import Headline from '@/components/sections/Headline'
import BrandSection from './sections/BrandSection'

const Contact = () => {
  return (
    <div className="bg-white">

    <div className='relative'>
      <ContactHeader />
      <div className="absolute left-0 right-0 bottom-[28%] md:bottom-[35%] z-40">
        <ContactSection isContact={true} />
      </div>
      <ContactContent />
    </div>
    
      <SuccessStories/>
      <FAQSection/>
      <BrandSection/>      
      <CallToAction/>
    </div>
  )
}

export default Contact
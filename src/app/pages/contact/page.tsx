import React from 'react'
import ContactHeader from './sections/ContactHeader'
import ContactSection from '@/components/sections/ContuctSection'
import ContactContent from './sections/ContactContent'

const Contact = () => {
  return (
    <div className="bg-white w-full">

    <div className='relative'>
      <ContactHeader />
      <div className="absolute left-0 right-0 bottom-[28%] md:bottom-[35%] z-40">
        <ContactSection isContact={true} />
      </div>
      <ContactContent />
    </div>
    
    </div>
  )
}

export default Contact
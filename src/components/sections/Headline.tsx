import Image from 'next/image'
import React from 'react'

const Headline = () => {
  return (
    <div className="w-full flex justify-center py-6">
        <div className="relative w-full bg-linear-to-r from-[#D9F99D] via-[#BBF7D0] to-[#BEF264] rounded-full h-14 flex items-center shadow-lg overflow-hidden">

          {/* image section */}
          <div className="absolute left-0 z-30 flex items-center pl-2 pr-10 h-full bg-linear-to-r from-[#D9F99D] via-[#D9F99D] to-transparent rounded-l-full pointer-events-none">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md">
                  <Image
                    src="/assets/CEO_Fahad.png"
                    alt="avatar"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* text section */}
          <div className="flex-1 overflow-hidden h-full flex items-center mask-fade-effect">

            <div className="animate-marquee-custom">

              <div className="flex items-center">
                <span className="text-sm md:text-lg text-gray-800 font-medium px-10 whitespace-nowrap">
                  The <span className="italic font-bold">brand's future?</span> Get 100% Value And Guarantee. Don’t Miss Out - <span className="text-green-800 font-extrabold cursor-pointer underline decoration-2 underline-offset-4">Secure Your brand's future</span>
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-sm md:text-lg text-gray-800 font-medium px-10 whitespace-nowrap">
                  The <span className="italic font-bold">brand's future?</span> Get 100% Value And Guarantee. Don’t Miss Out - <span className="text-green-800 font-extrabold cursor-pointer underline decoration-2 underline-offset-4">Secure Your brand's future</span>
                </span>
              </div>

              <div className="flex items-center">
                <span className="text-sm md:text-lg text-gray-800 font-medium px-10 whitespace-nowrap">
                  The <span className="italic font-bold">brand's future?</span> Get 100% Value And Guarantee. Don’t Miss Out - <span className="text-green-800 font-extrabold cursor-pointer underline decoration-2 underline-offset-4">Secure Your brand's future</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    
  )
}

export default Headline
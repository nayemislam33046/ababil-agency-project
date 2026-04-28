import { Check, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react'
interface Feature {
  label: string;
  competitorValue: boolean;
  ababilValue: boolean;
};

interface TablesProps {
  subtitle: string;
  title: string;
  competitorName: string;
  features: Feature[];
};
const Tables = ({ subtitle, title, competitorName, features }:TablesProps) => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 py-8 lm:p-7 sm:p-10 font-sans bg-primary relative overflow-hidden">
  
  {/* Background Gradient Layer */}

  <div className="relative z-10">
    
    {/* Header Section */}
    <div className="mb-16 ">
      <p className="text-white text-xs tracking-[0.2em] font-body uppercase mb-4">
        {subtitle}
      </p>

      <h2 className="mt-4 text-xl lm:text-3xl sm:text-5xl md:text-7xl leading-tight text-white max-w-2xl">
        {title}
      </h2>
    </div>

    {/* Table Container */}
    <div
      className="w-full grid grid-cols-12 items-stretch rounded-[2.5rem] backdrop-blur-xl border border-white/10 overflow-visible"
      style={{
        background:
          "linear-gradient(127.84deg, rgba(252, 215, 24, 0.25) 0%, rgba(82, 189, 148, 0.1) 55%, rgba(82, 189, 148, 0.1) 100%)",
      }}
    >
      
      {/* Features Area */}
      <div className="col-span-8 sm:col-span-9 py-10">
        
        {/* Header Row */}
        <div className="grid grid-cols-2 mb-8 gap-4 px-4 md:px-12 items-center">
          <div className="flex items-center gap-2 text-xs lm:text-sm md:text-base font-semibold text-white tracking-wider">
            <Image
              src="/energy-icon.svg"
              alt="Features Icon"
              width={10}
              height={10}
            />
            Features
          </div>

          <div className="text-center text-xs lm:text-sm md:text-base font-bold text-white tracking-wider">
            {competitorName}
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-0">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="grid grid-cols-2 items-center h-18 px-3 md:px-12 border-b border-white/5 last:border-0"
            >
              <span className="text-xs md:text-base text-white">
                {feature.label}
              </span>

              <div className="flex justify-center">
                {feature.competitorValue ? (
                  <Check className="h-4 w-4 md:w-6 md:h-6 text-white" />
                ) : (
                  <X className="h-4 w-4 md:w-6 md:h-6 text-red-500" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ababil Highlight Card */}
      <div className="col-span-4 sm:col-span-3 relative">
        <div className="absolute -inset-y-6.25 -right-px left-0 bg-linear-to-b from-[#01523F] to-[#10A380] rounded-[2.5rem] flex flex-col pt-12 pb-8">
          
          {/* Logo */}
          <div className="mb-14 flex justify-center px-3">
            <Image
              src="/ababil-white.svg"
              alt="Ababil Logo"
              width={120}
              height={120}
              className='hidden sm:block'
            />
            <Image
              src="/white_logo.svg"
              alt="Ababil Logo"
              width={30}
              height={30}
              className='sm:hidden'
            />
          </div>

          {/* Right Side Checks */}
          <div className="flex flex-col flex-1">
            {features.map((_, idx) => (
              <div
                key={idx}
                className="h-18 flex items-center justify-center border-b border-white/10 last:border-0"
              >
                <Check className="w-4 h-4 md:w-6 md:h-6 text-white stroke-3 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
              </div>
            ))}
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
  )
}

export default Tables
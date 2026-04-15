import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function ComparisonTable() {
  const subtitle = "WHY CHOOSE US";
  const competitorName = "Other Agencies";
  
  const features = [
    { label: "Custom UI/UX Design", competitorValue: true, ababilValue: true },
    { label: "Personalized Solution", competitorValue: false, ababilValue: true },
    { label: "Team Collaboration", competitorValue: true, ababilValue: true },
    { label: "Risk-free Trial", competitorValue: false, ababilValue: true },
    { label: "Lifetime Support", competitorValue: false, ababilValue: true },
    { label: "Flexible Pricing", competitorValue: true, ababilValue: true },
  ];

  return (
    // Main Section Background with your Custom Gradient
    <section className="min-h-screen flex flex-col justify-center p-12 md:p-10 font-sans bg-primary relative overflow-hidden">
      
      {/* Background Gradient Layer */}
      <div 
        className="absolute inset-0 pointer-events-none"        
      />

      <div className="relative z-10">
        {/* Header Section */}
        <div className="mb-16">
          <p className="text-white text-xs tracking-[0.2em] font-body uppercase mb-4">
            {subtitle}
          </p>
          <h2 className="mt-4 text-xl lm:text-3xl sm:text-5xl md:text-7xl font-black text-white max-w-2xl">
            Other Agencies We Deliver Solutions Offer Services
          </h2>
        </div>

        {/* Table Container */}
        <div className="w-full grid grid-cols-12 items-stretch rounded-[2.5rem] backdrop-blur-xl border border-white/10 overflow-visible" style={{
          background: 'linear-gradient(127.84deg, rgba(252, 215, 24, 0.25) 0%, rgba(82, 189, 148, 0.1) 55%, rgba(82, 189, 148, 0.1) 100%)'
        }}>
          
          {/* Features Area */}
          <div className="col-span-7 md:col-span-9 py-10">
            <div className="grid grid-cols-2 mb-8 px-4 md:px-12 items-center">
              <div className="flex items-center gap-2 text-sm md:text-base font-bold text-white tracking-wider">
                <Image src="/energy-icon.svg" alt="Features Icon" width={16} height={16} /> Features
              </div>
              <div className="text-center font-bold text-white tracking-wider">
                {competitorName}
              </div>
            </div>

            <div className="space-y-0">
              {features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="grid grid-cols-2 items-center h-[72px] px-4 md:px-12 border-b border-white/5 last:border-0"
                >
                  <span className="text-base text-white font-medium">
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
          <div className="col-span-5 md:col-span-3 relative">
            <div className="absolute inset-y-[-25px] -right-4 -left-0 bg-gradient-to-b from-[#01523F] to-[#10A380] rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] flex flex-col pt-12 pb-8">
              
              <div className="mb-14 flex justify-center">
                <Image src="/ababil-white.svg" alt="Ababil Logo" width={120} height={120}/>
              </div>

              <div className="flex flex-col flex-1">
                {features.map((_, idx) => (
                  <div key={idx} className="h-[72px] flex items-center justify-center border-b border-white/10 last:border-0">
                    <Check className="w-6 h-6 text-white stroke-[3] drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

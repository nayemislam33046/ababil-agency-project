'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "UI/UX DESIGN",
    description: "UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.",
    images: [
      { src: "/assets/servicesImg_1.png", color: "bg-blue-400" },
      { src: "/assets/servicesImg_2.png", color: "bg-lime-400" },
    ],
  },
  {
    title: "Web & APP Development",
    description: "UI/UX Design, App Design, Website Design, Dashboard Design, Wireframing & Prototyping, Interaction Design, and Product Design.",
    images: [
      { src: "/assets/servicesImg_1.png", color: "bg-blue-400" },
      { src: "/assets/servicesImg_2.png", color: "bg-lime-400" },
    ],
  },
  {
    title: "Logo & Branding",
    description: "Logo Design, Full Branding, Business Branding, 3d logo, Custom Logo, Visual Identity, Brand Strategy, Social Media Branding, and Brand Guidelines.",
    images: [
      { src: "/assets/servicesImg_1.png", color: "bg-blue-400" },
      { src: "/assets/servicesImg_2.png", color: "bg-lime-400" },
    ],
  },
  {
    title: "Webflow & Framer",
    description: "Custom Webflow Websites, Webflow Plugin, Framer Prototypes, Framer Material, Framer App, CMS Integration, Rapid Development.",
    images: [
      { src: "/assets/servicesImg_1.png", color: "bg-blue-400" },
      { src: "/assets/servicesImg_2.png", color: "bg-lime-400" },
    ],
  },
];

export default function ServicesSection() {
  return (
    <section className="mx-auto px-6 lg:px-16 py-16 font-sans bg-white">
      {/* Subheader */}
      <span className="text-xs font-bold tracking-widest text-primary uppercase">
        What We Do
      </span>

      {/* Main Headline */}
      <h2 className="mt-4 text-2xl lm:text-4xl md:text-6xl font-black text-primary leading-tight max-w-2xl">
        WE DESIGN & BUILD BRANDS <br className='sm:hidden'/> THAT SPEAK TO AUDIENCES
      </h2>

      <div className="mt-20 flex flex-col gap-20 sm:gap-32">
        {services.map((service, index) => (
          <div key={index} className="flex gap-3 sm:gap-10 items-start justify-between flex-col sm:flex-row">

            {/* Left Content */}
            <div className="top-10 xl:max-w-96">
              <h3 className="text-xl sm:text-3xl lg:text-4xl lg:font-extrabold text-primary mb-4 sm:mb-6">
                {service.title}
              </h3>
              <div className="w-full h-px bg-gray-300 mb-4 sm:mb-8" />
              <p className="text-gray leading-relaxed mb-6 font-body text-sm sm:text-base">
                {service.description}
              </p>
              <button className="flex items-center gap-2 font-bold text-sm hover:underline transition-all">
                See More <ArrowUpRight size={18} />
              </button>
            </div>

            {/* Right Images */}
            <div className="flex justify-center items-center gap-5 lp:gap-10 relative">

              <div className={`${service.images[0].color} rounded-2xl sm:w-40 sm:h-64 md:w-52 md:h-80 lg:w-64 lg:h-96 flex items-center justify-center overflow-hidden relative`}>
                <div className="relative w-full h-full object-fit">
                  {/* Replace with your actual Image component */}
                  <Image src={service.images[0].src} alt="Laptop Mockup" width={300} height={600} className="w-full h-full object-fit" />
                </div>
              </div>

              <div className={`${service.images[1].color} rounded-2xl sm:w-40 sm:h-64 md:w-52 md:h-80 lg:w-64 lg:h-96 mt-20 overflow-hidden relative`}>
                <Image src={service.images[1].src} alt="Mobile Mockup" width={300} height={600} className="w-full h-full object-fit" />
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}


"use client"
import React, { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    category: "UI UX Design",
    title: "ESDIAC App",
    testimonial: "Working with Ababil on our ESDIAC app and group websites was an excellent experience. They were patient, attentive to feedback, and delivered clean, consistent, high-quality work. We're proud of the results.",
    author: "Sofia Gouveia",
    role: "Design Director @ Esdiac",
    image: "/assets/successImg.jpg", 
    brandLogo: "/assets/successBrand.png",
    brandName: "Esdiac",
    avatar: "/assets/successProfile.png"
  },
  {
    id: 2,
    category: "Branding",
    title: "Nova Fintech",
    testimonial: "The visual identity Ababil created for Nova captured our vision perfectly. The minimalist approach to our branding has significantly increased our brand recall among premium users.",
    author: "Marcus Chen",
    role: "Founder @ Nova",
    image: "/images/nova-branding.png",
    brandLogo: "/logos/nova.svg",
    brandName: "Nova",
    avatar: "/avatars/marcus.jpg"
  },
  {
    id: 3,
    category: "Web Dev",
    title: "Lumina Marketplace",
    testimonial: "Our site speed improved by 60% after the migration. The team's expertise in Next.js and high-performance code transformed our e-commerce conversion rates overnight.",
    author: "Elena Rodriguez",
    role: "CTO @ Lumina",
    image: "/images/lumina-web.png",
    brandLogo: "/logos/lumina.svg",
    brandName: "Lumina",
    avatar: "/avatars/elena.jpg"
  },
  {
    id: 4,
    category: "Mobile App Dev",
    title: "Zenith Fitness",
    testimonial: "Ababil built a seamless cross-platform experience that our users love. The intuitive navigation and smooth animations make it stand out in a crowded fitness app market.",
    author: "David Miller",
    role: "Product Manager @ Zenith",
    image: "/images/zenith-app.png",
    brandLogo: "/logos/zenith.svg",
    brandName: "Zenith",
    avatar: "/avatars/david.jpg"
  },
  {
    id: 5,
    category: "SaaS Design & Dev",
    title: "CloudFlow CRM",
    testimonial: "Complexity turned into simplicity. They took our massive data-heavy CRM and turned it into a clean, manageable dashboard that our clients actually enjoy using every day.",
    author: "Sarah Jenkins",
    role: "Head of Product @ CloudFlow",
    image: "/images/cloudflow-saas.png",
    brandLogo: "/logos/cloudflow.svg",
    brandName: "CloudFlow",
    avatar: "/avatars/sarah.jpg"
  }
];

const SuccessStories = () => {
  const [activeTab, setActiveTab] = useState('UI UX Design');
  
  const categories = ['UI UX Design', 'Branding', 'Web Dev', 'Mobile App Dev', 'SaaS Design & Dev'];

  // Find the project that matches the current active tab
  const currentProject = projects.find(p => p.category === activeTab) || projects[0];

  return (
    <section className="py-20 px-4 lm:px-6 md:px-14 bg-white ">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-primary font-medium text-sm uppercase tracking-widest">Client Stories</span>
        <h2 className="text-4xl md:text-6xl font-bold text-primary mt-4 leading-tight">
          Success Stories That <br /> Inspire Us
        </h2>
      </div>

      {/* Filter Navigation */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === cat 
              ? 'bg-gray-100 text-black shadow-sm scale-105' 
              : 'text-gray-500 hover:text-black hover:bg-gray-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Content Area - Key prop forces a re-render/animation on tab change */}
      <div 
        key={activeTab} 
        className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl p-3 lm:p-8 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-700"
      >
        
        {/* Left: Dynamic Image Mockup */}
        <div className="flex justify-center items-center z-10">
          <div className="relative w-full transition-transform duration-500 hover:scale-105">
            <Image 
              src={currentProject.image} 
              width={900}
              height={900}
              alt={currentProject.title} 
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Right: Dynamic Testimonial Card */}
        <div className="bg-white p-3 lm:p-8 md:p-10 rounded-2xl shadow-xl z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              <img 
                src={currentProject.avatar} 
                alt={currentProject.author} 
                className="object-cover w-full h-full" 
              />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-lg">{currentProject.author}</h4>
              <p className="text-gray-500 text-sm">{currentProject.role}</p>
            </div>
          </div>

          <p className="text-gray-600 leading-relaxed mb-8 italic">
            "{currentProject.testimonial}"
          </p>

          <div className="flex items-center justify-between border-t pt-6 gap-4">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 lm:w-10 lm:h-10 bg-black rounded-md flex items-center justify-center p-2">
                  <img src={currentProject.brandLogo} alt="" className="invert h-full w-full object-contain" />
               </div>
               <span className="font-bold text-lg lm:text-xl text-gray-900">{currentProject.brandName}</span>
            </div>
            <button className="bg-[#FCD718] hover:bg-yellow-400 text-black font-bold text-sm lm:text-base py-2 px-3 lm:py-3 lm:px-6 rounded-full flex items-center gap-2 transition-transform active:scale-95 whitespace-nowrap">
              Book a Call <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default SuccessStories;
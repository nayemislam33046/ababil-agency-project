 'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
const blogs = [
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

const Blogs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      const triggerPoint = window.innerHeight / 2;
      sectionRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
            setActiveIndex(index);
          }
        }
      });
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    handleResize();
    handleScroll(); 
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
       <div className="flex flex-col md:flex-row gap-10 items-start relative">
        <div className="hidden md:block md:w-1/2 md:sticky md:top-10 h-fit">
          <div className="xl:max-w-96">
            <h3 className="text-2xl lg:text-3xl lg:font-extrabold text-primary mb-6 uppercase transition-all duration-500 ease-in-out">
              {blogs[activeIndex]?.title}
            </h3>
            <div className="w-full h-px bg-gray-300 mb-8" />
            <p className="text-gray-600 leading-relaxed mb-6 font-body text-base">
              {blogs[activeIndex]?.description}
            </p>
            <button aria-label="See More" className="flex items-center gap-2 font-bold text-sm hover:underline transition-all">
              See More <ArrowUpRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Area: Scrolling Images on Desktop, Full Content on Mobile */}
        <div className="w-full md:w-1/2">
          {blogs.map((blog, index) => (
            <div 
              key={index} 
              ref={(el) => { sectionRefs.current[index] = el; }}
              className="mb-20 md:mb-40 min-h-fit md:min-h-[70vh] last:mb-20 md:last:mb-[50vh]"
            >
              {/* Mobile Only: Content will appear above images */}
              <div className="md:hidden mb-8">
                <h3 className="text-xl font-bold text-primary mb-2 uppercase">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {blog.description}
                </p>
                <div className="w-full h-px bg-gray-200" />
              </div>

              {/* Images Container */}
              <div className="flex justify-center items-center gap-5 lp:gap-10">
                <div className={`${blog.images[0].color} rounded-2xl w-1/2 h-64 md:w-52 md:h-80 lg:w-64 lg:h-96 flex items-center justify-center overflow-hidden relative shadow-lg`}>
                  <Image 
                    src={blog.images[0].src} 
                    alt="Blog Image 1" 
                    fill 
                    className="object-cover p-2" 
                  />
                </div>
                <div className={`${blog.images[1].color} rounded-2xl w-1/2 h-64 md:w-52 md:h-80 lg:w-64 lg:h-96 mt-10 md:mt-20 overflow-hidden relative shadow-lg`}>
                  <Image 
                    src={blog.images[1].src} 
                    alt="Blog Image 2" 
                    fill 
                    className="object-cover p-2" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Blogs;
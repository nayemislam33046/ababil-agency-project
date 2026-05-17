"use client";

import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Gummiz: Playful Visual Identity & Packaging Design",
    description: "Gummiz is a playful gummy candy brand developed through a vibrant visual identity and packaging system. The project focuses on expressive…",
    category: "Food & Beverages",
    image: "/assets/projects/projectsBanner1.jpg"
  },
  {
    id: 2,
    title: "FROO: Branding & Packaging Design",
    description: "FROO packaging design project focuses on building a cohesive visual identity system for a raw juice brand. The design translates freshness,…",
    category: "Food & Beverages",
    image: "/assets/projects/projectsBanner2.jpg"
  },
  {
    id: 3,
    title: "Rydara: Effortless Urban Ride Solution",
    description: "Rydara is a ride-booking mobile app designed to improve speed, clarity, and overall usability. The project focused on simplifying the booking…",
    category: "Retail",
    image: "/assets/projects/projectsBanner3.jpg"
  },
  {
    id: 4,
    title: "The Gridline - Structured Living Design",
    description: "The Gridline was developed as a response to the growing visual noise and trend-driven approaches in the furniture industry. It focuses on creating…",
    category: "Ecommerce",
    image: "/assets/projects/projectsBanner4.jpg"
  },
  {
    id: 5,
    title: "AirAxis - A Unified Command for Flight Control",
    description: "AirAxis was designed to identify challenges airline teams face when managing flight schedules, crew assignments, and real-time tracking…",
    category: "eCRM Portals",
    image: "/assets/projects/projectsBanner5.jpg"
  },
  {
    id: 6,
    title: "Dwelio - A Modern Real Estate Experience",
    description: "Dwelio is a modern real estate mobile app created to simplify how people discover and evaluate properties for buying or renting. The project…",
    category: "Real Estate",
    image: "/assets/projects/projectsBanner6.jpg"
  }
];

const categories = [
  "Explore All", "Automotive", "Beauty & Cosmetics", "Business Consulting", "Construction",
  "eCommerce", "eCRM Portals", "EdTech", "Entertainment", "Financial Services",
  "Food & Beverages", "Health & Wellness", "Hospitality", "Manufacturing",
  "Media & Publishing", "Non-Profit", "Real Estate", "Retail",
  "Software & Technology", "Sports & Fitness", "Travel & Tourism"
];

const ProjectsSection = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }

  }, []);

  return (
    <section className="bg-white py-16 px-6 md:px-12">

      {/* Draggable Category Filter */}
      <div className="mb-12 overflow-hidden -mr-6 md:-mr-12">
        <motion.div
          ref={carousel}
          className="cursor-grab overflow-hidden active:cursor-grabbing"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="flex gap-3 pr-24"
          >
            {categories.map((cat, index) => (
              <motion.button
                key={index}
                className={`px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors border select-none ${index === 0
                  ? 'bg-teal-900 text-white border-teal-900'
                  : 'bg-gray-50 text-gray-700 border-gray-100 hover:bg-gray-100'
                  }`}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        {projects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            {/* Image Container */}
            <div className="relative aspect-4/3 overflow-hidden rounded-[2.5rem] mb-6">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                loading="lazy"
                width={600}
                height={600}
              />
            </div>

            {/* Content */}
            <div className="space-y-3 px-2">
              <p className="text-2xl font-bold text-[#0A0A0A] tracking-tight leading-snug group-hover:text-teal-900 transition-colors">
                {project.title}
              </p>
              <p className="text-gray text-base leading-relaxed line-clamp-2">
                {project.description}
              </p>
              <div className="inline-block px-5 py-1.5 bg-[#E5E5E5] rounded-full text-xs font-bold text-[#0A0A0A] uppercase tracking-wider">
                {project.category}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Pagination Section --- */}
      <div className="flex items-center justify-center gap-4 mt-16">
        <div className="flex items-center gap-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-10 h-10 flex items-center justify-center text-sm font-medium transition-all duration-200 rounded-xl ${currentPage === page
                ? "bg-primary text-white shadow-md"
                : "text-gray hover:bg-gray-100"
                }`}
            >
              {page}
            </button>
          ))}
        </div>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className={`p-2 transition-colors ${currentPage === totalPages ? "text-gray-300 cursor-not-allowed" : "text-gray-600 hover:text-black"
            }`}
        >
          <ChevronRight size={20} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
}
export default ProjectsSection;
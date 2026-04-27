"use client"
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectCard from "./projectCard";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    category: "FINTECH / AI",
    title: "FAHAD - AI-Powered Money Buddy",
    description:
      "FAHAD is a cutting-edge Fintech application that uses artificial intelligence to manage personal finances. It offers smart budgeting, expense tracking, and automated financial advice through an intuitive mobile interface.",
    moduleTitle: "Interactive Modules",
    modules: "40+",
    growthTitle: "Performance Improvement",
    growth: "36%",
    author: "Neil Saidi",
    role: "Plato CEO",
    authorImage: "/author_1.png",
    bgColor: "bg-[#BEE051]",
    image: "/portfolio_1.png",
  },
  {
    id: 2,
    category: "ACADEMIC / PORTFOLIO",
    title: "Find Me - Academic Portfolio",
    description: "Find Me is a sophisticated academic directory and portfolio management system. It is designed to help students and researchers showcase their achievements and navigate educational opportunities effectively.",
    moduleTitle: "Pages in Projects",
    modules: "18+",
    growthTitle: "Retention Growth",
    growth: "48%",
    author: "Omar",
    role: "Fitmate CEO",
    authorImage: "/author_2.png",
    bgColor: "bg-[#F04F4F]",
    image: "/portfolio_2.png",
  },
  {
    id: 3,
    category: "E-COMMERCE / AGRI-TECH",
    title: "Grove - Peaceful Harvest",
    description: "Grove is a premium farm-to-table e-commerce solution. It bridges the gap between organic producers and conscious consumers, offering a minimal and high-fidelity shopping experience for fresh harvests.",
    moduleTitle: "Pages in Projects",
    modules: "45+",
    growthTitle: "Retention Growth",
    growth: "60%",
    author: "Ted Nash",
    role: "Yenex CEO",
    authorImage: "/author_3.png",
    bgColor: "bg-[#277664]",
    image: "/portfolio_3.png",
  },
  {
    id: 4,
    category: "NON-PROFIT / NGO",
    title: "Alhaj Shamsul Hoque Foundation (ASHF)",
    description: "Triply is a hassle-free & effective tour solution for travelers. It's an all-inclusive booking and planning website that helps people make their dream trips easier.",
    moduleTitle: "Pages in Projects",
    modules: "40+",
    growthTitle: "Retention Growth",
    growth: "36%",
    author: "Shubho Al-Faroque",
    role: "Triply CEO",
    authorImage: "/author_4.png",
    bgColor: "bg-[#557DB3]",
    image: "/portfolio_4.png",
  },
  {
    id: 5,
    category: "TRAVEL",
    title: "Easy Booking for Dream Trips",
    description: "Triply is a hassle-free & effective tour solution for travelers. It's an all-inclusive booking and planning website that helps people make their dream trips easier.",
    moduleTitle: "Pages in Projects",
    modules: "40+",
    growthTitle: "Retention Growth",
    growth: "36%",
    author: "Shubho Al-Faroque",
    role: "Triply CEO",
    authorImage: "/author_4.png",
    bgColor: "bg-[#828282]",
    image: "/portfolio_5.png",
  },

];

export default function ServiceCard() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll(".stack-card");

    cards?.forEach((card: any, index) => {
      if (index === cards.length - 1) return;

      const nextCard = cards[index + 1];
      const inner = card.querySelector(".stack-inner");

      const scaleTo = 1 - (cards.length - index - 1) * 0.05;

      gsap.to(inner, {
        scale: scaleTo,
        filter: "brightness(0.7)",
        ease: "none",
        scrollTrigger: {
          trigger: nextCard,
          start: "top center",
          end: "top top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <section className="my-10 bg-white p-8 xl:p-16">
      
      {/* HEADER */}
      <div className="mb-16">
        <p className="font-inter font-bold text-primary mb-5 text-sm">
          OUR SERVICES
        </p>
        <h1 className="text-2xl lm:text-4xl lg:text-6xl font-bold text-primary">
          PROVEN SUCCESS IN <br /> EVERY INDUSTRY
        </h1>
      </div>

      {/* STACK CONTAINER */}
      <div ref={containerRef} className="max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={project.id}
            className="stack-card sticky top-5"
            style={{
              paddingTop: `10px`, 
              zIndex: i
            }}
          >
            <div className="stack-inner">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <button aria-label="Explore All" className="flex justify-center items-center bg-[#FFD700] hover:bg-yellow-400 text-primary border border-primary font-bold py-2 px-8 rounded-full gap-2 mx-auto mt-20 transition-all shadow-lg">
        Explore All
        <ArrowRight />
      </button>

      {/* bottom space for scroll */}
    </section>
  );
}
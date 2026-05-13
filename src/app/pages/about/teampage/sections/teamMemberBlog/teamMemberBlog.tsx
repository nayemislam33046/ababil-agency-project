"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ChevronUp, ChevronDown, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Abdullah Al Fahad",
    role: "Product Designer",
    image: "/assets/about/fahad.png",
    text: "The team's energy, the way things are managed, is so smooth, fun, and actually engaging. The founders don't act like bosses; they lead like teammates. On a personal note, I'm from a rainy hometown, and I never liked going to the office all wet. Now, I sip hot tea, watch the rain slide down the window, and feel more focused than ever.",
  },
  {
    id: 2,
    name: "Md. Sagor Yeasin",
    role: "CEO & Co-founder",
    image: "/assets/about/yasin.png",
    text: "Working here has been a breath of fresh air. The flexibility allows me to balance my creative pursuits with high-impact engineering work. It's rare to find a culture that truly values individual growth as much as company milestones.",
  },
  {
    id: 3,
    name: "Elias Hosen",
    role: "SEO & Social media manager",
    image: "/assets/about/eliyas.png",
    text: "The collaborative environment and supportive leadership make this place feel like a second home. I've grown professionally and personally.",
  },
  {
    id: 4,
    name: "Nayem Islam",
    role: "Frontend Developer",
    image: "/assets/about/nayem.png",
    text: "Building interfaces that matter is my passion. Here, we don't just write code; we create experiences that bridge the gap between users and technology.",
  },
  {
    id: 5,
    name: "Md. Shahjalal",
    role: "Backend Developer",
    image: "/assets/about/shahjalal.png",
    text: "The collaborative environment and supportive leadership make this place feel like a second home. I've grown professionally and personally, and it's all thanks to the team's commitment to our success.",
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = testimonials[activeIndex];

  // ACTIVE IMAGE ALWAYS CENTER
  const orderedTestimonials = useMemo(() => {
    const total = testimonials.length;

    return testimonials.map((_, i) => {
      const index = (activeIndex - 2 + i + total) % total;
      return testimonials[index];
    });
  }, [activeIndex]);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="w-full bg-[#f5f5f3] py-16 md:py-24 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-16 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 lg:gap-20">
          
          {/* IMAGE STACK */}
          <div className="flex lg:flex-col items-center justify-center gap-4">
            {orderedTestimonials.map((item) => {
              const originalIndex = testimonials.findIndex(
                (t) => t.id === item.id
              );

              const isActive = originalIndex === activeIndex;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(originalIndex)}
                  className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out shrink-0
                    ${
                      isActive
                        ? "w-24 h-24 md:w-40 md:h-40 opacity-100 scale-100"
                        : "w-16 h-16 md:w-24 md:h-24 opacity-30 scale-90"
                    }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-top object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </button>
              );
            })}
          </div>

          {/* CONTENT */}
          <div className="flex items-center justify-center gap-6 w-full max-w-3xl">
            
            {/* TEXT */}
            <div className="flex-1">
              <div className="w-12 h-12 flex items-center justify-center mb-6">
                <img src="/assets/about/quotation.svg" alt="Quote" />
              </div>

              <p className="text-[#333333] text-base md:text-lg leading-7 md:leading-8">
                {active.text}
              </p>

              <div className="mt-8">
                <p className="text-lg font-semibold text-[#0A0A0A]">
                  {active.name}
                </p>

                <p className="text-sm text-gray mt-1">
                  {active.role}
                </p>
              </div>
            </div>

            {/* NAV BUTTONS */}
            <div className="hidden sm:flex flex-col gap-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-white transition"
              >
                <ChevronUp className="w-4 h-4" color="#063d30"/>
              </button>

              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-white transition"
              >
                <ChevronDown className="w-4 h-4" color="#063d30"/>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-white transition"
          >
            <ChevronUp className="w-4 h-4 -rotate-90" color="#063d30"/>
          </button>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-primary flex items-center justify-center hover:bg-white transition"
          >
            <ChevronDown className="w-4 h-4 -rotate-90" color="#063d30"/>
          </button>
        </div>
      </div>
    </section>
  );
}
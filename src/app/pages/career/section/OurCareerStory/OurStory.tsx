"use client";

import React, { useRef, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const statsData = [
  {
    id: 1,
    icon: "/assets/clutch-google.png",
    title: "4.9 Rating",
    description:
      "A premier firm renowned for its outstanding design quality and exceptional client satisfaction.",
  },
  {
    id: 2,
    icon: "/assets/career/industries_icon.svg",
    title: "20+ Industries",
    description:
      "A proven track record of expertise and reliability in delivering successful projects.",
  },
  {
    id: 3,
    icon: "/assets/career/finger_icon.svg",
    title: "150+ Clients",
    description:
      "A diverse portfolio showcasing creativity and skill in delivering innovative design solutions.",
  },
  {
    id: 4,
    icon: "/assets/career/flag_icon.svg",
    title: "40+ Creatives",
    description:
      "A global reach and the agency's ability to meet diverse client needs across various markets.",
  },
];

const OurStory = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [dragging, setDragging] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const cardWidth = sliderRef.current.offsetWidth * 0.9;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // mouse drag
  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      if (window.innerWidth >= 1024) return;
      isDragging.current = true;
      setDragging(true);
      startX.current =
        e.pageX - (sliderRef.current?.offsetLeft || 0);
      scrollLeft.current =
        sliderRef.current?.scrollLeft || 0;
    },
    []
  );

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current || !sliderRef.current) return;
      e.preventDefault();
      const x =
        e.pageX - (sliderRef.current.offsetLeft || 0);
      const walk = (x - startX.current) * 1.2;
      sliderRef.current.scrollLeft =
        scrollLeft.current - walk;
    },
    []
  );

  const stopDragging = useCallback(() => {
    isDragging.current = false;
    setDragging(false);
  }, []);

  // touch drag
  const onTouchStart = useCallback(
    (e: React.TouchEvent) => {
      startX.current =
        e.touches[0].pageX -
        (sliderRef.current?.offsetLeft || 0);
      scrollLeft.current =
        sliderRef.current?.scrollLeft || 0;
    },
    []
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!sliderRef.current) return;
      const x =
        e.touches[0].pageX -
        (sliderRef.current.offsetLeft || 0);
      const walk = (x - startX.current) * 1.2;
      sliderRef.current.scrollLeft =
        scrollLeft.current - walk;
    },
    []
  );

  return (
    <section className="w-full min-h-screen py-12 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Left */}
        <div className="flex flex-col justify-start max-w-xl">
          <span className="text-xs font-bold font-inter tracking-widest text-primary uppercase mb-4">
            Our Story
          </span>

          <h2 className="text-4xl md:text-5xl text-primary mb-6 tracking-tight leading-tight">
            Our Motive & Goals
          </h2>

          <p className="text-lg md:text-xl text-gray-400 font-light leading-relaxed">
            At Ababil, we believe great design is
            where creativity meets technology. Our
            mantra? Fuse the magic of visuals with the
            logic of development. We create
            experiences that are visually aesthetic and
            effortlessly developer-friendly.
          </p>
        </div>

        {/* Right */}
        <div className="w-full relative">
          {/* Slider */}
          <div
            ref={sliderRef}
            className="flex flex-row lg:flex-col gap-3 lm:gap-6 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-8 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 scroll-smooth cursor-grab active:cursor-grabbing lg:cursor-default select-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
          >
            {statsData.map((stat) => (
              <div
                key={stat.id}
                className="relative flex-none w-[88%] sm:w-[320px] lg:w-full overflow-hidden bg-white p-4 lm:p-8 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300"
                draggable={false}
              >
                {/* Top Green Blur Effect */}
                <div className="absolute -top-20 left-1/3 -translate-x-1/2 w-65 h-45 bg-linear-to-b from-[#6BFFB0]/35 to-transparent blur-3xl rounded-full pointer-events-none"></div>
                {/* Content */}
                <div className="relative z-10">
                  <Image
                    src={stat.icon}
                    alt={stat.title}
                    width={200}
                    height={200}
                    className="w-22 h-16"
                  />

                  <p className="text-3xl font-bold text-[#0A0A0A] my-3 tracking-tight">
                    {stat.title}
                  </p>

                  <p className="text-sm text-gray leading-relaxed font-light">
                    {stat.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="shrink-0 w-1 lg:hidden" />
          </div>

          <div className="flex lg:hidden items-center justify-center gap-3 mb-5">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full text-white bg-primary shadow-md border border-gray-200 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5 " />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full bg-primary text-white shadow-md flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurStory;
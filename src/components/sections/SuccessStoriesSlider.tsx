"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";

const stories = [
  {
    id: 1,
    name: "Austin",
    role: "CEO @ Clarity LLC",
    logo: "/clientlogo_1.png",
    quote:
      "I’ve worked with Design Monks on three websites, and they’ve been nothing bu…",
    imgUrl: "/client_1.png",
  },
  {
    id: 2,
    name: "Anika",
    role: "Founder @ CoinPulse",
    logo: "/clientlogo_2.png",
    quote:
      "Design Monks is a professional, reliable partner for end-to-end product builds…",
    imgUrl: "/client_2.png",
  },
  {
    id: 3,
    name: "Armen Avagyan",
    role: "CEO & Co-Founder @ Fraus",
    logo: "/clientlogo_3.png",
    quote:
      "Working with Design Monks was a great experience. They translated our…",
    imgUrl: "/client_3.png",
  },
  {
    id: 4,
    name: "Victor Okon",
    role: "COO & Co-founder @ Dlicio",
    logo: "/logos_1.svg",
    quote:
      "Big shoutout to the Design Monks team. They brought our vision to life both…",
    imgUrl: "/client_4.png",
  }

];

const SuccessStoriesSlider = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [dragged, setDragged] = useState(false);

  // Mouse events
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    setDragged(false);
    startX.current = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (trackRef.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.2;
    if (Math.abs(walk) > 5) setDragged(true);
    if (trackRef.current) trackRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const onMouseUp = useCallback(() => {
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
  }, []);

  // Touch events
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    startX.current = e.touches[0].pageX - (trackRef.current?.offsetLeft ?? 0);
    scrollLeft.current = trackRef.current?.scrollLeft ?? 0;
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const x = e.touches[0].pageX - (trackRef.current?.offsetLeft ?? 0);
    const walk = (x - startX.current) * 1.2;
    if (trackRef.current) trackRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  return (
    <section className="min-h-screen py-12 px-6 md:px-20 overflow-hidden font-sans">
      {/* Header */}
      <div className="mb-12">
        <p className="font-inter font-bold text-white mb-5 text-sm lp:text-base">
          Client Stories
        </p>
        <h2
          className="text-[24px] sm:text-[32px] lp:text-[40px] lg:text-5xl xl:text-6xl font-heading font-bold text-white"
        >
          Success Stories That
          <br />
          Inspire Us
        </h2>
      </div>

      {/* Slider track */}
      <div
        ref={trackRef}
        className="flex gap-10 overflow-x-scroll py-6 select-none -mx-6 md:-mx-20 px-6 md:px-20"
        style={{
          cursor: "grab",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
      >
        {stories.map((story) => (
          <div
            key={story.id}
            className="relative shrink-0 rounded-2xl overflow-hidden flex flex-col w-60 sm:w-70 md:w-[320px] lg:w-95 h-95 sm:h-112.5 md:h-125 lg:h-137.5"
            draggable={false}
          >
            {/* Image wrapper */}
            <div className="relative w-full h-full">
              <img
                src={story.imgUrl}
                alt={story.name}
                className="w-full h-full object-cover"
                draggable={false}
              />

              {/* Play button */}
              <button
                className="absolute inset-0 flex items-center justify-center group"
                style={{ pointerEvents: dragged ? "none" : "auto" }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#1a3a2a] ml-0.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>

              <div className="absolute flex flex-col sm:gap-1 md:gap-2 left-0 bottom-0 w-full bg-linear-to-t from-black/80 to-transparent p-3 sm:p-6">
                <div className="w-fit">
                  <Image
                  src={story.logo}
                  alt={story.name}
                  className="object-contain max-h-10 sm:max-h-16 md:max-h-20 w-auto"
                  draggable={false}
                  width={100}
                  height={40}
                />
                </div>
                <p className="text-white text-[12px] md:text-sm font-body">{story.quote}</p>
                <p className="text-white font-inter font-bold text-lg text-[16px] sm:text-[18px] md:text-[22px]">{story.name}</p>
                <p className="text-gray-300 text-[12px] sm:text-sm">{story.role}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Trailing spacer */}
        <div className="shrink-0 w-4" />
      </div>

      {/* Hide scrollbar globally for webkit */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}


export default SuccessStoriesSlider;
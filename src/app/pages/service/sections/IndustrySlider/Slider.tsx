"use client";

import Image from "next/image";
import { useRef, useState, useCallback } from "react";
const stories = [
  {
    id: 1,
    name: "Hotel Management",
    imgUrl: "/assets/services/industry/industry1.png",
  },
  {
    id: 2,
    name: "Gaming",
    imgUrl: "/assets/services/industry/industry2.png",
  },
  {
    id: 3,
    name: "eCRM Portals",
    imgUrl: "/assets/services/industry/industry3.png",
  },
  {
    id: 4,
    name: "Portfolio",
    imgUrl: "/assets/services/industry/industry4.png",
  }
];

const IndustrySlider = () => {
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
    <>
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-scroll select-none -mx-6 md:-mx-20 px-6 md:px-20"
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
            className="relative shrink-0 rounded-2xl overflow-hidden flex flex-col w-60 sm:w-70 md:w-[320px] lg:w-95 h-60 sm:h-70 md:h-80 lg:h-95"
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

              <div className="absolute bottom-0 left-0 w-full h-[40%] flex flex-col justify-end bg-linear-to-t from-black/90 to-transparent p-3 sm:p-6">
                <p className="text-white font-body">
                  {story.name}
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* Trailing spacer */}
        <div className="shrink-0 w-4" />
      </div>
    </>
  );
}
export default IndustrySlider;
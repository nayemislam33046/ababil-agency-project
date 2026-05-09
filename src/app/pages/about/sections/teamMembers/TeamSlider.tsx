"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useCallback } from "react";
const stories = [
    {
        id: 1,
        name: "Md. Sagor Yeasin",
        role: "CEO-Founder",
        imgUrl: "/assets/about/yasin.png"
    },
    {
        id: 2,
        name: "Abdullah Al Fahad",
        role: "COO & Co-founder",
        imgUrl: "/assets/about/fahad.png"
    },
    {
        id: 3,
        name: "Nayem Islam",
        role: "Frontend Developer",
        imgUrl: "/assets/about/nayem.png"
    },
    {
        id: 4,
        name: "Md. Shahjalal",
        role: "Backend Developer",
        imgUrl: "/assets/about/shahjalal.png"
    },
    {
        id: 5,
        name: "Elias Hosen",
        role: "SEO & Social media manager",
        imgUrl: "/assets/about/eliyas.png"
    }
];

const TeamSlider = () => {
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
                    // <div
                    //     key={story.id}
                    //     className="relative shrink-0 rounded-2xl overflow-hidden flex flex-col w-60 sm:w-70 md:w-[320px] lg:w-85 h-95 sm:h-112.5 md:h-125 lg:h-125"
                    //     draggable={false}
                    // >
                    //     {/* Image wrapper */}
                    //     <div className="relative w-full h-full">
                    //         <img
                    //             src={story.imgUrl}
                    //             alt={story.name}
                    //             className="w-full h-full object-cover pointer-events-none"
                    //             draggable={false}
                    //         />
                    //     <p className="text-center font-bold text-lg mt-2 pointer-events-none select-none">
                    //         {story.name}
                    //     </p>

                    //     <p className="text-center text-gray-600 pointer-events-none select-none">
                    //         {story.role}
                    //     </p>
                    //     </div>
                    // </div>
                    <div
                        key={story.id}
                        className="relative shrink-0 rounded-2xl overflow-hidden flex flex-col w-60 sm:w-70 md:w-[320px] lg:w-85"
                        draggable={false}
                    >
                        {/* Image wrapper */}
                        <div className="relative w-full h-95 sm:h-112.5 md:h-125 lg:h-125">
                            <img
                                src={story.imgUrl}
                                alt={story.name}
                                className="w-full h-full object-cover pointer-events-none rounded-bl-xl rounded-br-xl"
                                draggable={false}
                            />
                        </div>

                        {/* Text */}
                        <div className="py-3">
                            <p className="text-center text-[#FAFAFA] font-bold text-xl pointer-events-none select-none">
                                {story.name}
                            </p>

                            <p className="text-center text-[#E5E5E5] text-lg pointer-events-none select-none">
                                {story.role}
                            </p>
                        </div>
                    </div>
                ))}

                {/* Trailing spacer */}
                <div className="shrink-0 w-4" />
            </div>
        </>
    );
}
export default TeamSlider;
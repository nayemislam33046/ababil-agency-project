"use client";
import React, { useRef, useState, useEffect, ChangeEvent } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

// Content এর জন্য ইন্টারফেস
interface AboutItem {
  title: string;
  description: string;
  icon: string;
}

const About: React.FC = () => {
  // TypeScript Ref Types
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isFullWidth, setIsFullWidth] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.5);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  // স্ক্রিন সাইজ চেক করার জন্য (SSR safe window check)
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth > 1024);
    };
    
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // অটো-প্লে লজিক
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        handlePlay();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleSeek = (e: ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      const val = parseFloat(e.target.value);
      const seekTime = (val / 100) * videoRef.current.duration;
      videoRef.current.currentTime = seekTime;
      setProgress(val);
    }
  };

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => console.log("Autoplay blocked", err));
      setIsPlaying(true);
      setIsFullWidth(true);
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setIsFullWidth(false);
    }
  };

  const togglePlay = () => (isPlaying ? handlePause() : handlePlay());

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
      setIsMuted(val === 0);
    }
  };

  const aboutContent: AboutItem[] = [
    { title: "Design", description: "We craft intuitive digital experiences.", icon: '/design.svg' },
    { title: "Development", description: "We build high-performance web apps.", icon: '/development.svg' },
    { title: "Testing & QA", description: "We ensure flawless product launches.", icon: '/TQA.svg' },
    { title: "Growth Support", description: "Secure and optimized scaling.", icon: '/GrowthSupport.svg' }
  ];

  return (
    <section ref={containerRef} className="bg-[#f3f3f3] rounded-2xl px-6 lg:px-16 m-5 py-14 overflow-hidden">
      <p className="text-yellow-500 text-sm font-semibold mb-3 uppercase tracking-widest text-center lg:text-left">ABOUT US</p>
      
      <div className="relative grid lg:grid-cols-2 gap-12 items-center min-h-[400px]">
        
        {/* VIDEO SECTION */}
        <motion.div 
          layout
          animate={{ 
            rotate: isFullWidth ? 0 : -6,
            width: isFullWidth && isLargeScreen ? "205%" : "100%", 
          }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="relative group rounded-2xl overflow-hidden shadow-2xl z-20 bg-black max-h-[80vh]" 
        >
          <video 
            ref={videoRef}
            muted={isMuted}
            loop 
            playsInline 
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full max-h-[450px] object-cover cursor-pointer"
            onClick={togglePlay}
          >
            <source src="/assets/video.mp4" type="video/mp4" />
          </video>

          {/* CUSTOM CONTROLS */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity space-y-2">
            <input 
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-yellow-500"
            />

            <div className="flex items-center gap-4 text-white">
              <button onClick={togglePlay} type="button">
                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" />}
              </button>

              <div className="flex items-center gap-2">
                {isMuted || volume === 0 ? <VolumeX size={18} /> : <Volume2 size={18} />}
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.1" 
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-16 h-1 bg-gray-500 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>
              
              <span className="text-[10px] font-mono text-gray-300 ml-auto uppercase">
                {isPlaying ? "Streaming" : "Paused"}
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <AnimatePresence mode="wait">
          {(!isFullWidth || !isLargeScreen) && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5 }}
              className="grid sm:grid-cols-2 gap-8 py-2"
            >
              {aboutContent.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-white p-2 rounded-lg shrink-0">
                    <Image src={item.icon} width={35} height={35} alt={item.title} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-800 text-base">{item.title}</p>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default About;
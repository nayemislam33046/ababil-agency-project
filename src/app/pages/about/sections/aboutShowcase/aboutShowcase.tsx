import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const AboutShowcase = () => {
  return (
    <section className="relative w-full px-6 sm:px-12 lg:px-16 py-16 flex flex-col md:flex-row items-center justify-between md:gap-12 overflow-hidden">
      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col items-start text-left z-10">
        <span className="text-primary font-bold tracking-widest text-sm lg:text-base uppercase mb-6 block">
          Who We Are
        </span>
        <h2 className="text-2xl lm:text-5xl md:text-3xl lp:text-4xl xl:text-5xl text-primary leading-[1.1] mb-10 tracking-tight">
          Your Go-To Partner for <br className="hidden lg:block" />
          Impactful Designs to Apps & <br className="hidden lg:block" />
          Websites Create for <br className="hidden lg:block" />
          Business success!
        </h2>
        <button className="flex items-center gap-2 bg-secondary hover:bg-[#facc15] transition-colors text-[#003d2b] border border-primary font-bold py-3 px-8 rounded-full shadow-sm">
          Explore All <img src="/right-arrow.svg" alt="Arrow Right" className="w-4 h-4" />
        </button>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center relative">
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-full h-full bg-[#E8F5F1] rounded-full blur-[100px] -z-10 opacity-60" />
        <div className="relative w-full max-w-162.5 aspect-4/5 md:aspect-5/6 lg:aspect-square md:mr-[-5%] lg:mr-[-10%] float">
          <Image
            src="/assets/about/aboutShowcase.png"
            alt="Showcase Image"
            fill
            priority
            sizes="(max-w-768px) 100vw, 50vw"
            className="object-contain object-right drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutShowcase;
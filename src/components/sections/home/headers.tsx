import Image from 'next/image';
import clutchGoogleIcon from '../../../assets/clutch-google.png';
import energyIcon from '../../../assets/energyIcon.svg';
import headerImage1 from '../../../assets/headerImage1.png';
import headerImage2 from '../../../assets/headerImage2.png';
import calenderIcon from '../../../assets/stash_data-date-light.svg';
const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-5">
      {/* Decorative Dots (Simplified Background) */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-blue-900 rounded-full opacity-50" />
      <div className="absolute top-20 left-56 w-4 h-4 bg-green-700 rounded-full opacity-50" />
      <div className="absolute top-40 left-20 w-3 h-3 bg-red-500 rounded-full opacity-50" />
      <div className="absolute top-20 right-1/4 w-3 h-3 bg-yellow-400 rounded-full opacity-50" />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo & Rating */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/ababil.svg" alt="Ababil" width={160}
              height={50}
              priority />
          </div>

          <div className="flex flex-col items-center mt-9">
            <div className="flex -space-x-2 mb-1">
              {/* Placeholder for Clutch/Google icons */}
              <Image src={clutchGoogleIcon} alt="Clutch-Google" width={50} height={50} className="rounded-full bg-gray-200 border-2 border-white" />

            </div>
            <p className="text-sm font-body text-primary font-medium">4.9 <span className='text-[#FFCB33] text-lg font-bold'>★★★★★</span></p>
            <p className="text-primary text-[18px] font-body font-bold mt-2">Design & Build Agency</p>
          </div>
        </div>

        {/* Main Headline */}
        <div>
          <h1 className=" text-[#0A3D2E] mx-auto mb-6 text-4xl md:text-6xl font-black tracking-[-5px]">
          <span className="relative">
            We Build High Performance <br className="hidden md:block" />
            Web & Mobile Apps
          
            <span className="absolute -right-8 top-3 text-5xl">
              <Image src={energyIcon} alt="Sparkle" width={40} height={40} />
            </span>
          </span>
          
        </h1>
        </div>

        {/* Subtext */}
        <p className="text-primary text-lg md:text-body-base max-w-2xl mx-auto mb-10">
          From idea to launch — ABABIL helps brands build <br /> powerful digital products that drive growth.
        </p>

        {/* CTA Button */}
        <button className="bg-[#FFD700] hover:bg-yellow-400 text-primary border-1 border-primary font-bold py-1 px-8 rounded-full flex items-center gap-2 mx-auto transition-all shadow-lg">
          <span className="bg-white/20 p-1 rounded-md">
           <Image src={calenderIcon} alt="phone-icon" width={30} height={30} />
          </span>
          Book Strategy Call
        </button>

        {/* Floating Mockups Container (Conceptual) */}
        {/* <div className="relative w-full max-w-6xl mx-auto"> */}
          {/* Left Mockups */}
          <div className="absolute -left-16 -bottom-28 w-48 md:w-72">
            <Image src={headerImage1} alt="Mockup 1" className="object-cover h-full w-full" />
          </div>

          {/* Right Mockups */}
          <div className="absolute -right-16 -bottom-28 w-48 md:w-72">
            <Image src={headerImage2} alt="Mockup 2" className="object-cover h-full w-full" />
          {/* </div> */}
        </div>

        {/* Floating Bottom Navigation Bar */}
        <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 bg-[#0A3D2E] text-white py-2 px-16 rounded-xl flex items-center gap-8 shadow-2xl z-50">
          <a href="#" className="hover:text-yellow-400 text-sm font-medium">Projects</a>
          <a href="#" className="hover:text-yellow-400 text-sm font-medium">Services</a>
          <button className="bg-white text-[#0A3D2E] px-6 py-2 rounded-lg font-bold flex items-center gap-2">
            <span><Image src='/logoIcon.png' alt="ababil-icon" width={20} height={20} /></span> Start a Project
          </button>
          <a href="#" className="hover:text-yellow-400 text-sm font-medium">Pricing</a>
          <a href="#" className="hover:text-yellow-400 text-sm font-medium">More</a>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
import Image from 'next/image';
import clutchGoogleIcon from '../../assets/clutch-google.png';
import energyIcon from '../../assets/energyIcon.svg';
import headerImage1 from '../../assets/headerImage1.png';
import headerImage2 from '../../assets/headerImage2.png';
import calenderIcon from '../../assets/stash_data-date-light.svg';
import Link from 'next/link';
const Home = () => {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-5">
      {/* Decorative Dots (Simplified Background) */}
      <div className="absolute top-10 left-4 w-2 h-2 bg-red-500 rounded-full" />
      <div className="absolute top-30 left-10 w-4 h-4 bg-blue-900 rounded-full" />
      <div className="absolute top-20 left-72 w-3 h-3 bg-yellow-500 rounded-full" />
      <div className="absolute top-30 left-96 w-2 h-2 bg-cyan-900 rounded-full" />
      <div className="absolute top-24 left-80 w-4 h-4 bg-green-500 rounded-full" />
      <div className="absolute top-20 left-56 w-4 h-4 bg-green-700 rounded-full" />
      <div className="absolute top-40 left-20 w-3 h-3 bg-red-500 rounded-full" />
      <div className="absolute top-20 right-1/4 w-3 h-3 bg-yellow-400 rounded-full" />

      <div className="mx-auto text-center relative z-10">
        {/* Logo & Rating */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/ababil.svg" alt="Ababil" width={160}
              height={50}
              priority />
          </div>

          <div className="flex flex-col items-center mt-5 lm:mt-9">
            <div className="flex -space-x-2 mb-1">
              {/* Placeholder for Clutch/Google icons */}
              <Image src={clutchGoogleIcon} alt="Clutch-Google" width={50} height={50} className="rounded-full bg-gray-200 border-2 border-white" />

            </div>
            <p className="text-sm font-body text-primary font-medium">4.9 <span className='text-[#FFCB33] text-lg font-bold'>★★★★★</span></p>
            <p className="text-primary text-[14px] lm:text-[18px] font-body font-bold mt-1">Design & Build Agency</p>
          </div>
        </div>

        {/* Main Headline */}
        <div className='lm:px-10'>
          <h1 className=" text-[#0A3D2E] mx-auto mb-4 text-2xl lm:text-4xl text-wrap sm:text-5xl lg:text-7xl">
          <span className="relative">
            We Build High Performance <br className="" />
            Web & Mobile Apps
          
            <span className="absolute -right-8 top-3 text-5xl hidden lm:block">
              <Image src={energyIcon} alt="Sparkle" width={40} height={40} />
            </span>
          </span>
          
        </h1>
        </div>

        {/* Subtext */}
        <p className="text-primary text-sm md:text-lg lg:text-body-base font-bold max-w-2xl mx-auto mb-6">
          From idea to launch — ABABIL helps brands build <br /> powerful digital products that drive growth.
        </p>

        {/* CTA Button */}
        <button className="bg-[#FFD700] hover:bg-yellow-400 text-primary border border-primary font-bold py-1 px-8 rounded-full flex items-center gap-2 mx-auto transition-all shadow-lg">
          <span className="bg-white/20 p-1 rounded-md">
           <Image src={calenderIcon} alt="phone-icon" width={30} height={30} />
          </span>
          Book Strategy Call
        </button>

      </div>


        {/* Floating Mockups Container (Conceptual) */}

          <div className="absolute -left-10 bottom-10 lm:-left-4 sm:left-0 sm:bottom-0 w-32 sm:w-40 lg:w-48 xl:w-64">
            <Image src={headerImage1} alt="Mockup 1" className="object-cover h-full w-full" />
          </div>

          {/* Right Mockups */}
          <div className="absolute -right-10 bottom-10 lm:-right-4 sm:right-0 sm:bottom-0 w-32 sm:w-40 lg:w-48 xl:w-64">
            <Image src={headerImage2} alt="Mockup 2" className="object-cover h-full w-full" />
        </div>
    </section>
  );
};

export default Home;
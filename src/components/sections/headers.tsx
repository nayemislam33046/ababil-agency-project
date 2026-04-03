import Image from 'next/image';

const Home = () => {
  return (
    <section className="relative h-screen bg-white overflow-hidden pt-5">
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
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/ababil.svg" alt="Ababil" width={160}
              height={50}
              priority />
          </div>

          <div className="flex flex-col items-center mt-5 lm:mt-9">
            <div className="flex -space-x-2 mb-1">
              {/* Placeholder for Clutch/Google icons */}
              <Image src={'/assets/clutch-google.png'} alt="Clutch-Google" width={50} height={50} className="rounded-full bg-gray-200 border-2 border-white" />

            </div>
            <p className="text-sm font-body text-primary font-medium">4.9 <span className='text-[#FFCB33] text-lg font-bold'>★★★★★</span></p>
            <p className="text-primary text-[14px] lm:text-[18px] font-body font-bold mt-1">Design & Build Agency</p>
          </div>
        </div>

        {/* Main Headline */}
        <div className='lm:px-10'>
          <h1 className=" text-[#0A3D2E] mx-auto mb-4 px-6 lm:px-0 text-4xl lm:mt-20 sm:mt-0 text-wrap sm:text-5xl lg:text-6xl">
          <span className="relative">
            We Build High Performance <br className="hidden lm:block" />
            Web & Mobile Apps
          
            <span className="absolute -right-8 top-3 text-5xl hidden lm:block">
              <Image src={'/assets/energyIcon.svg'} alt="Sparkle" width={40} height={40} />
            </span>
          </span>
          
        </h1>
        </div>

        {/* Subtext */}
        <p className="text-primary text-sm md:text-lg lg:text-body-base font-bold max-w-2xl mx-auto px-2 lm:px-0 mb-4 lm:mb-6">
          From idea to launch — ABABIL helps brands build <br /> powerful digital products that drive growth.
        </p>

        {/* CTA Button */}
        <button className="bg-[#FFD700] hover:bg-yellow-400 text-primary border border-primary font-inter font-bold py-1 px-8 rounded-full flex items-center gap-2 mx-auto transition-all shadow-lg">
          <span className="p-1 rounded-md">
           <Image src={'/assets/stash_data-date-light.svg'} alt="phone-icon" width={30} height={30} />
          </span>
          Book Strategy Call
        </button>

      </div>


        {/* Floating Mockups Container (Conceptual) */}

          <div className="absolute -left-10 bottom-0 lm:-left-4 sm:left-0 w-32 sm:w-40 lg:w-48 xl:w-64 float">
            <Image src={'/assets/headerImage1.png'} alt="Mockup 1" className="object-cover h-full w-full" width={900} height={900}/>
          </div>

          {/* Right Mockups */}
          <div className="absolute -right-10 bottom-0 lm:-right-4 sm:right-0 w-32 sm:w-40 lg:w-48 xl:w-64 float">
            <Image src={'/assets/headerImage2.png'} alt="Mockup 2" className="object-cover h-full w-full" width={900} height={900}/>
        </div>
    </section>
  );
};

export default Home;
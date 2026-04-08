import Image from 'next/image';
import Link from 'next/link';
import PricingSection from './pricingSection';

const PricingHeader = () => {
  return (

    <section className="relative min-h-screen bg-white overflow-hidden pb-10">
      {/* Decorative Dots (Simplified Background) */}
      <div className="absolute top-10 left-4 w-2 h-2 bg-red-500 rounded-full" />
      <div className="absolute top-30 left-10 w-4 h-4 bg-blue-900 rounded-full" />
      <div className="absolute top-20 left-72 w-3 h-3 bg-yellow-500 rounded-full" />
      <div className="absolute top-30 left-96 w-2 h-2 bg-cyan-900 rounded-full" />
      <div className="absolute top-24 left-80 w-4 h-4 bg-green-500 rounded-full" />
      <div className="absolute top-20 left-56 w-4 h-4 bg-green-700 rounded-full" />
      <div className="absolute top-40 left-20 w-3 h-3 bg-red-500 rounded-full" />
      <div className="absolute top-20 right-1/4 w-3 h-3 bg-yello0 rounded-full" />

      {/* 🔹 TOP (Logo + Breadcrumb) */}
      <div className="flex flex-col items-center py-5">
        <Image src="/ababil.svg" alt="Ababil" width={140} height={40} priority />

        <p className='p-1 px-2 text-sm mt-3 rounded-full flex justify-center items-center gap-2 border border-[#063D30] bg-[#FCD718] text-primary'><Link href="/" className="text-[#685700]">Home</Link> <span><svg width="7" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M5.30325 5.30325L1.0605 9.546L0 8.4855L3.7125 4.773L0 1.0605L1.0605 0L5.30325 4.24275C5.44385 4.3834 5.52284 4.57413 5.52284 4.773C5.52284 4.97187 5.44385 5.1626 5.30325 5.30325Z" fill="#063D30" />
        </svg>
        </span> Pricing</p>
      </div>

      {/* 🔹 CENTER HERO CONTENT */}
      <div className="flex flex-col items-center justify-center text-center p-4">

        <h1 className="text-[#0A3D2E] font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
          Affordability & Flexibility <br className="hidden sm:block" />
          Premium Quality With
        </h1>

        <p className="mt-4 text-sm md:text-lg font-semibold max-w-2xl text-[#0A3D2E]">
          Personalize your plan for custom solutions <br />
          according to your business needs
        </p>

        <PricingSection/>

      </div>

    </section>

  );
};

export default PricingHeader;
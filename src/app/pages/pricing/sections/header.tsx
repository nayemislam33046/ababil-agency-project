import Image from 'next/image';
import Link from 'next/link';
import PricingSection from './pricingSection';

const PricingHeader = () => {

  const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  // ✅ Size system (controlled)
  const getSize = (i: number) => {
    if (i % 3 === 0) return 4;
    if (i % 3 === 1) return 6;
    return 8;
  };

  // ✅ Color system (controlled)
  const colors = [
    "#ef4444",
    "#eab308",
    "#22c55e",
    "#15803d",
    "#1e3a8a",
    "#0e7490",
  ];

  return (
    <section className="relative min-h-screen bg-white overflow-hidden pb-10">

      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/image_design.png"
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* 🔥 FIXED PARTICLES */}
      <div
        className="particle w-2 h-2 bg-red-900 rounded-full"
        style={{
          top: "10%",
          left: "4%",
          "--x": "10px",
          "--y": "-20px",
          "--duration": "6s",
          "--delay": "0s",
        } as React.CSSProperties}
      />

      <div
        className="particle w-4 h-4 bg-blue-500 rounded-full"
        style={{
          top: "15%",
          left: "10%",
          "--x": "-15px",
          "--y": "15px",
          "--duration": "8s",
          "--delay": "1s",
        } as React.CSSProperties}
      />

      <div
        className="particle w-3 h-3 bg-yellow-500 rounded-full"
        style={{
          top: "20%",
          left: "60%",
          "--x": "5px",
          "--y": "-10px",
          "--duration": "5s",
          "--delay": "0.5s",
        } as React.CSSProperties}
      />

      {/* ✅ FIXED (circle corrected) */}
      <div
        className="particle w-4 h-4 bg-cyan-900 rounded-full"
        style={{
          top: "15%",
          left: "80%",
          "--x": "-20px",
          "--y": "-25px",
          "--duration": "8s",
          "--delay": "2s",
        } as React.CSSProperties}
      />

      {/* 🔥 DYNAMIC PARTICLES */}
      {[...Array(18)].map((_, i) => {
        const size = getSize(i);

        return (
          <div
            key={i}
            className="particle rounded-full"
            style={{
              top: `${random(0, 90)}%`,
              left: `${random(0, 90)}%`,

              width: `${size}px`,
              height: `${size}px`,

              backgroundColor: colors[i % colors.length],

              "--x": `${random(-30, 30)}px`,
              "--y": `${random(-40, 40)}px`,

              // 💎 BONUS: size-based speed (premium feel)
              "--duration": `${size === 4 ? 6 : size === 6 ? 8 : 10}s`,

              "--delay": `${random(0, 5)}s`,
            } as React.CSSProperties}
          />
        );
      })}

      {/* 🔹 TOP */}
      <div className="flex flex-col items-center py-5 relative z-10">
        <Image src="/ababil.svg" alt="Ababil" width={140} height={40} priority />

        <p className="p-1 px-2 text-xs lm:text-sm mt-7 rounded-full flex items-center gap-2 text-primary">
          <Link href="/" className="text-[#454A51]">Home</Link>
          <span>
            <svg width="7" height="12" viewBox="0 0 6 10" fill="none">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.30325 5.30325L1.0605 9.546L0 8.4855L3.7125 4.773L0 1.0605L1.0605 0L5.30325 4.24275C5.44385 4.3834 5.52284 4.57413 5.52284 4.773C5.52284 4.97187 5.44385 5.1626 5.30325 5.30325Z"
                fill="#063D30"
              />
            </svg>
          </span>
          Pricing
        </p>
      </div>

      {/* 🔹 CENTER */}
      <div className="flex flex-col items-center justify-center text-center p-4 relative z-10">

        <h1 className="text-[#0A3D2E] font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl max-w-4xl">
          Affordability & Flexibility <br className="hidden sm:block" />
          Premium Quality With
        </h1>

        <p className="mt-4 text-sm md:text-lg font-semibold max-w-2xl text-[#0A3D2E]">
          Personalize your plan for custom solutions <br />
          according to your business needs
        </p>

        <PricingSection />
      </div>

      <div className="absolute -left-10 top-40 w-20 xsm:w-24 md:w-40 xl:w-48 md:-left-14 float">
        <Image src={'/assets/pricingHeroimg1.png'} alt="Mockup 1" className="object-cover h-full w-full rotate-12" width={900} height={900} />
      </div>

      {/* Right Mockups */}
      <div className="absolute -right-5 -top-14 w-20 xsm:w-24 md:w-40 xl:w-48 md:-right-10 float">
        <Image src={'/assets/pricingHeroimg2.png'} alt="Mockup 2" className="object-cover h-full w-full rotate-12" width={900} height={900} />
      </div>

    </section>
  );
};

export default PricingHeader;
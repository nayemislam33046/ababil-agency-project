import Image from 'next/image';

const Home = () => {

    const random = (min: number, max: number) =>
    Math.random() * (max - min) + min;

  // ✅ Size system (controlled)
  const getSize = (i: number) => {
    if (i % 3 === 0) return 4;  // small
    if (i % 3 === 1) return 6;  // medium
    return 8;                   // large
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
    <section className="relative h-screen bg-white overflow-hidden pt-5">

      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/image_design.png"
          alt="background"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Decorative Dots (Simplified Background) */}
     
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
              <Image src={'/assets/clutch-google.png'} alt="Clutch-Google" width={50} height={50} />

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

        <button className="blob-btn relative z-10 flex items-center gap-2 mx-auto">
          <Image
            src="/assets/stash_data-date-light.svg"
            alt="icon"
            width={30}
            height={30}
            className="z-10"
          />
          <span>Book Strategy Call</span>
        </button>

      </div>

      {/* Floating Mockups Container (Conceptual) */}

      <div className="absolute -left-10 -bottom-10 w-50 xsm:w-65 md:w-80 xl:w-95 md:-left-14 float">
        <Image src={'/assets/headerImage1.png'} alt="Mockup 1" className="object-cover h-full w-full" width={900} height={900} />
      </div>

      {/* Right Mockups */}
      <div className="absolute -right-10 -bottom-10 w-50 xsm:w-65 md:w-80 xl:w-95 md:-right-14 float">
        <Image src={'/assets/headerImage2.png'} alt="Mockup 2" className="object-cover h-full w-full" width={900} height={900} />
      </div>
    </section>
  );
};

export default Home;
const LogoMarquee = () => {
  const logosTop = [
    "/logo_1.svg",
    "/logo_2.png",
    "/logo_3.svg",
    "/logo_4.svg",
    "/logo_5.svg",
    "/logo_6.svg",
    "/logo_7.png",
    "/logo_8.svg",
    "/logo_9.svg"
  ];

  const logosBottom = [
    "/logos_1.svg",
    "/logos_2.svg",
    "/logos_3.svg",
    "/logos_4.svg",
    "/logos_5.svg",
    "/logos_6.svg",
    "/logos_7.svg",
    "/logos_8.svg"
  ];

  return (
    <section className="bg-[#063D30] py-12 md:py-16 relative overflow-hidden">

      {/* LEFT GRADIENT */}
      <div className="absolute left-0 top-0 h-full w-32 md:w-48 lg:w-60 z-10 
      bg-[linear-gradient(90deg,#063D30,rgba(6,61,48,0))]" />

      {/* RIGHT GRADIENT */}
      <div className="absolute right-0 top-0 h-full w-32 md:w-48 lg:w-60 z-10 
      bg-[linear-gradient(270deg,#063D30,rgba(6,61,48,0))]" />

      <div className="max-w-350 mx-auto px-6 lg:px-10">

        {/* TOP ROW */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left w-max">
            {[0,1].map((track)=>(
              <div key={track} className="flex gap-12 h-12 px-5">
                {logosTop.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={logo}
                    className="w-20 lg:w-40 shrink-0 object-contain"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="overflow-hidden mt-8 lg:mt-12">
          <div className="flex animate-scroll-right w-max">
            {[0,1].map((track)=>(
              <div key={track} className="flex gap-12 h-12 px-5 ">
                {logosBottom.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={logo}
                    className="w-20 lg:w-40 shrink-0 object-contain"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default LogoMarquee;
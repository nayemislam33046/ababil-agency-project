import Image from "next/image";
const AboutSlider = () => {
  const logosTop = [
    { logo: "/logo.svg", width: "w-56" },
    { logo: "/logo.png", width: "w-96" },
    { logo: "/logo.svg", width: "w-56" },
    { logo: "/logo.svg", width: "w-96" },
    { logo: "/logo.svg", width: "w-56" },
    { logo: "/logo.svg", width: "w-96" },
    { logo: "/logo.png", width: "w-56" },
    { logo: "/logo.svg", width: "w-96" },
  ];
  const logosBottom = [
    { logo: "/logo.svg", width: "w-56" },
    { logo: "/logo.png", width: "w-96" },
    { logo: "/logo.svg", width: "w-56" },
    { logo: "/logo.svg", width: "w-96" },
    { logo: "/logo.svg", width: "w-56" },
    { logo: "/logo.svg", width: "w-96" },
    { logo: "/logo.svg", width: "w-56" },
    { logo: "/logo.svg", width: "w-96" }
  ];
  return (
    <section className="bg-transparent relative overflow-hidden pb-10">
      <div className="w-full">
        {/* TOP ROW */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left w-max">
            {[0, 1].map((track) => (
              <div key={track} className="flex gap-5 max-h-75 px-2.5">
                {logosTop.map((logo, i) => (
                  <Image
                    key={i}
                    src={logo.logo}
                    alt={logo.logo}
                    width={100}
                    height={100}
                    className={`${logo.width} max-h-100 shrink-0 object-contain bg-[#C4C4C4] rounded-md`}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="overflow-hidden mt-5">
          <div className="flex animate-scroll-right w-max">
            {[0, 1].map((track) => (
              <div key={track} className="flex gap-5 max-h-75 px-2.5">
                {logosBottom.map((logo, i) => (
                  <Image
                    key={i}
                    src={logo.logo}
                    alt={logo.logo}
                    width={100}
                    height={100}
                    className={`${logo.width} max-h-100 shrink-0 object-contain bg-[#C4C4C4] rounded-md`}
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
export default AboutSlider;

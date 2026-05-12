const AboutCompanyLogo = () => {
    const logosTop = [
    "/assets/about/logo/companyLogo1.png",
    "/assets/about/logo/companyLogo2.png",
    "/assets/about/logo/companyLogo3.png",
    "/assets/about/logo/companyLogo4.png",
    "/assets/about/logo/companyLogo5.png",
    "/assets/about/logo/companyLogo6.png",
    "/assets/about/logo/companyLogo7.png",
    "/assets/about/logo/companyLogo8.png",
  ];

  const logosBottom = [
    "/assets/about/logo/companyLogo1.png",
    "/assets/about/logo/companyLogo2.png",
    "/assets/about/logo/companyLogo3.png",
    "/assets/about/logo/companyLogo4.png",
    "/assets/about/logo/companyLogo5.png",
    "/assets/about/logo/companyLogo6.png",
    "/assets/about/logo/companyLogo7.png",
    "/assets/about/logo/companyLogo8.png"
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden">

        <div className="text-center mb-16 px-6 md:px-12 lg:px-16">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
          Partners
        </span>
        <h2 className="text-3xl md:text-5xl text-center text-wrap text-primary leading-tight max-w-2xl mx-auto">
          Collaborating with Ambitious Titans Alike Startups and Industry
        </h2>
      </div>

      <div className="max-w-400 mx-auto">

        {/* TOP ROW */}
        <div className="overflow-hidden">
          <div className="flex animate-scroll-left w-max">
            {[0,1].map((track)=>(
              <div key={track} className="flex gap-6 h-20 sm:h-24 px-5">
                {logosTop.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={logo}
                    className="w-35 sm:w-48 shrink-0 object-contain bg-gray-100 p-5 rounded-md"
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
              <div key={track} className="flex gap-6 h-20 sm:h-24 px-5 ">
                {logosBottom.map((logo, i) => (
                  <img
                    key={i}
                    src={logo}
                    alt={logo}
                    className="w-35 sm:w-48 shrink-0 object-contain bg-gray-100 p-5 rounded-md"
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
export default AboutCompanyLogo;

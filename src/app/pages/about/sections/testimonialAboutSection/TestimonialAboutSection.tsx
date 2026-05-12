import Image from 'next/image';

const TestimonialAboutSection = () => {
  return (
    <section className="py-12 px-6 md:px-10 lg:px-16 min-h-screen">
      {/* Header */}
      <div className="mb-12">
        <span className="text-sm font-bold tracking-widest text-primary uppercase">
          Customer Review
        </span>
        <h2 className="text-3xl lm:text-4xl md:text-6xl font-extrabold text-primary mt-4 leading-tight">
          Customer Stories <br /> That Inspire Us
        </h2>
      </div>

      <div className="flex flex-col md:flex-row gap-3 justify-between items-stretch">
        {/* Left Card: Testimonial */}
        <div className="flex-1 bg-white rounded-3xl border border-gray-100 p-5 flex flex-col justify-between">
          <div>
            {/* Company Logo/Name */}
            <div className="flex items-center gap-2 mb-8">
              <Image
                src="/assets/about/companylogo.png"
                alt="Alpine Empower Logo"
                width={200}
                height={100}
                className="rounded-2xl h-8 lg:w-auto lg:h-auto object-cover"
              />

            </div>

            {/* Testimonial Text */}
            <p className="text-gray leading-relaxed text-sm xl:text-lg mb-5">
              I had countless ideas but no clear direction until Ababil stepped in. Their team
              patiently listened, refined every detail, and never once hesitated when I requested
              multiple changes. The result? A stunning & user-friendly platform that perfectly
              captures our vision. Their dedication and kindness made this journey just
              unforgettable.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-2 lg:gap-4 mb-5 py-5 md:py-3">
              <div>
                <p className=" text-lg xl:text-2xl font-bold text-[#0A0A0A]">98%</p>
                <p className="text-xs text-gray">Customer Satisfaction</p>
              </div>
              <div>
                <p className=" text-lg xl:text-2xl font-bold text-[#0A0A0A]">30%</p>
                <p className="text-xs text-gray">Business Growth</p>
              </div>
              <div>
                <p className=" text-lg xl:text-2xl font-bold text-[#0A0A0A]">70+</p>
                <p className="text-xs text-gray">Global Reach</p>
              </div>
            </div>
          </div>

          {/* Author Profile */}
          <div className="flex items-center gap-4">
            <div className="relative w-10 h-10 lg:w-14 lg:h-14 rounded-full overflow-hidden">
              {/* Replace with your actual image path */}
              <Image
                src="/assets/about/fahim.png"
                alt="Fahim Aziz"
                className="object-cover"
                fill
              />
            </div>
            <div>
              <h4 className="font-bold text-lg lg:text-xl text-[#0A0A0A]">Fahim Aziz</h4>
              <p className="text-sm text-gray">Founder and CEO Alpine Empower</p>
            </div>
          </div>
        </div>

        {/* Right Card: Global Map Visual */}
    
        <div className="flex-1 rounded-3xl hidden md:block overflow-hidden relative md:min-h-full">
          <Image
            src="/assets/about/global.png"
            alt="Global Map"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialAboutSection;
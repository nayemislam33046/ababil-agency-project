
import Headline from "@/components/sections/Headlines/Headline";
import Image from "next/image";

const BrandSection = () => {
  return (
    <>
      <section className="m-10 mt-20 md:mt-30">       
        <div 
          className="relative rounded-2xl bg-primary md:min-h-87.5 lg:min-h-100 xl:min-h-125 px-6 lm:px-12 py-4 lm:py-8 flex flex-col md:flex-row items-center justify-between"
          style={{ clipPath: 'inset(-500px 0px 0px 0px)' }} 
        >
          
          {/* BACKGROUND GRADIENTS (Overflow hidden wrapper for gradients only) */}
          <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
            <div className="absolute left-0 bottom-0">
              <Image
                src="/assets/left-gradient.png"
                alt="shape1"
                width={200}
                height={200}
                className="object-contain"
              />
            </div>
            <div className="absolute -top-20 -right-20">
              <Image
                src="/assets/right-gradient.png"
                alt="shape2"
                width={900}
                height={900}
                className="object-contain"
              />
            </div>
          </div>

          {/* LEFT CONTENT */}
          <div className="z-20 md:max-w-[50%] text-center md:text-left mb-2 lm:mb-10 md:mb-0">
            <p className="text-white text-xs lm:text-sm lg:text-base font-inter font-semibold mb-3">
              Claim a $799 Consultation, on Us!
            </p>

            <h1 className="text-2xl lm:text-3xl sm:text-5xl md:text-3xl lg:text-4xl xl:text-5xl text-white font-heading font-bold leading-tight mb-4">
              Your Brand Deserves <br />
              Next Level! The
            </h1>

            <p className="text-white text-xs sm:text-sm xl:text-base font-body mb-6 text-wrap">
              Get expert advice and a custom strategy session worth <br className="hidden lg:block"/> $799 at no cost
            </p>

            <div className="flex items-center justify-center md:justify-start gap-4">
              <div>
                <div className="flex -space-x-4 mb-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative w-11 h-11 xl:w-12.5 xl:h-12.5 rounded-full overflow-hidden shadow-md border-2 border-primary">
                      <Image
                        src="/assets/CEO_Fahad.png"
                        alt="avatar"
                        fill
                        className="object-cover scale-x-[-1]"
                      />
                    </div>
                  ))}
                </div>
                <button aria-label="Let's Talk" className="bg-secondary hover:bg-yellow-500 text-primary font-semibold px-4 py-2 text-sm xl:px-6 xl:py-3 rounded-full transition flex justify-center items-center gap-3">
                  Let’s Talk <span><img src="/right-arrow.svg" alt="Arrow" /></span>
                </button>
              </div>
              <Image src="/assets/dirarrow.png" alt="direction arrow" width={50} height={50} className="object-contain mt-2 hidden lm:block" />
            </div>
          </div>

          {/* RIGHT IMAGE - Overflow Visible on Top, Hidden on Bottom */}
          <div className="hidden sm:block relative md:absolute md:right-0 lp:-top-14 lg:-top-14 xl:-top-18 w-1/2 md:flex md:justify-end z-10">
            <Image
              src="/assets/project-banner.png"
              alt="hero"
              width={600}
              height={600}
              className="object-contain"
              priority
            />
          </div>

        </div>
        <Headline />
      </section>
    </>
  );
};

export default BrandSection;
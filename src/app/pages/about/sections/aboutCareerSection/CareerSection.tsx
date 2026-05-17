import Image from "next/image";
import Link from "next/link";
const CareerSection = () => {
  return (
    <section className="relative w-full px-6 md:px-12 lg:px-16 py-12 lm:py-20">
      <div
        className="relative rounded-[30px] bg-primary flex flex-col md:flex-row items-center justify-between  md:h-87.5 lg:h-100"
        style={{ clipPath: 'inset(-500px 0px 0px 0px)' }}
      >
        {/* LEFT SIDE: Content */}
        <div className="z-20 md:w-[50%] lp:w-[55%] p-8 lp:p-10 xl:p-14 flex flex-col items-center md:items-start text-center md:text-left">
          <p className="text-white text-xs sm:text-sm font-semibold uppercase tracking-widest mb-4 opacity-90">
            Career
          </p>
          <h2 className="text-2xl lm:text-3xl lp:text-4xl lg:text-5xl text-white leading-[1.1] mb-6">
            Want to be an <br />
            Ababil Like Us?
          </h2>
          <p className="text-white text-sm font-body lg:text-base mb-8 lp:max-w-md ">
            Are you a talented and self-motivated person with a
            positive vibe? If yes, you can be the next member of our
            Ababil family.
          </p>

          <Link href="/pages/about/teampage" className="bg-secondary hover:bg-yellow-300 text-primary font-bold text-sm md:text-base py-3 md:py-3.5 px-6 md:px-10 rounded-full flex items-center gap-2 transition-all active:scale-95 shadow-lg w-fit">
            Join our team
            <img src="/right-arrow.svg" alt="Arrow" />
          </Link>
        </div>
        {/* RIGHT SIDE: Image */}
        <div className="absolute right-0 bottom-0 w-full md:w-1/2 h-full pointer-events-none z-10 hidden md:block">
          <div className="absolute bottom-0 right-0 w-full h-[125%] md:h-[150%] flex justify-end items-end pr-4 md:pr-10">
            <div className="relative w-full h-full max-w-150">
              <Image
                src="/assets/about/fahad_jalal2.png"
                alt="Ababil Team"
                fill
                className="object-contain object-bottom translate-x-8 lg:translate-x-12"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CareerSection;
import Link from "next/link";
import TeamSlider from "./TeamSlider";

const TeamMembersSlider = () => {
  return (
    <section className="min-h-screen bg-primary rounded-4xl py-12 px-6 md:px-20 overflow-hidden my-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <p className="font-inter font-bold text-white mb-5 text-sm lp:text-base">
          Our Team
        </p>
        <h2 className="text-[24px] sm:text-[32px] lp:text-[40px] lg:text-5xl text-white uppercase">
          Collaborative Minds, Singular Focus
        </h2>
      </div>

      {/* Slider track */}
      <TeamSlider />
      <div className="flex justify-center mt-10">
        <Link
          href="/team"
          className="text-primary font-body bg-secondary font-bold border border-primary rounded-full px-6 py-3 inline-flex items-center"
        >
          Meet the Team
          <img
            src="/right-arrow.svg"
            alt="Arrow Right"
            className="inline-block ml-2"
          />
        </Link>
      </div>
      {/* Hide scrollbar globally for webkit */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
};
export default TeamMembersSlider;

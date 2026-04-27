import SuccessSlider from "./Slider";
const SuccessStoriesSlider = () => {
  return (
    <section className="min-h-screen py-12 px-6 md:px-20 overflow-hidden font-sans">
      {/* Header */}
      <div className="mb-12">
        <p className="font-inter font-bold text-white mb-5 text-sm lp:text-base">
          Client Stories
        </p>
        <h2
          className="text-[24px] sm:text-[32px] lp:text-[40px] lg:text-5xl xl:text-6xl font-heading font-bold text-white uppercase"
        >
          Success Stories That
          <br />
          Inspire Us
        </h2>
      </div>

      {/* Slider track */}
      <SuccessSlider/>

      {/* Hide scrollbar globally for webkit */}
      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
export default SuccessStoriesSlider;
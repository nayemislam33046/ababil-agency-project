import Questions from "./question";

const FAQSection = () => {
  return (
    <section className="bg-[#0b3d2e] text-white px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left */}
        <div>
          <p className="text-yellow-400 text-sm font-semibold mb-3">FAQs</p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Have <br /> Questions?
          </h2>
        </div>
        {/* Right */}
        <Questions/>
      </div>
    </section>
  );
}

export default FAQSection;
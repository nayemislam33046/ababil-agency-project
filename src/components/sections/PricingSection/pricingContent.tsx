import Pricing from "./pricing";
const PricingContent = () => {
  return (
    <section className=" py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-inter uppercase text-secondary text-sm mb-2">Pricing</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Affordable Plans <br /> For Everyone.
        </h2>        
        {/* Cards */}
        <Pricing/>
      </div>
    </section>
  );
}
export default PricingContent;
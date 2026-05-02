import IndustrySlider from "./Slider";
import { MoveRight } from "lucide-react";

const Industry = () => {
    return (
        <section className="min-h-[85vh] lg:min-h-screen py-12 px-6 md:px-12 overflow-hidden bg-primary rounded-4xl">
            {/* Header */}
            <div className="mb-12 flex md:justify-between md:items-end flex-col md:flex-row gap-6">
                <div>
                    <p className="font-inter text-white mb-5 text-sm lp:text-base">
                        Industries
                    </p>
                    <h2
                        className="text-[24px] sm:text-[32px] lp:text-[40px] lg:text-5xl font-heading text-white uppercase leading-tight"
                    >
                        Our Expertise Across Diverse
                        <br />
                        Design Service Industries
                    </h2>
                </div>
                <button className="flex justify-between items-center gap-4 bg-secondary hover:bg-[#facc15] text-primary border border-primary font-bold py-3 px-6 xl:py-4 xl:px-8 rounded-full transition-all duration-300">
                    See More
                    <MoveRight className="w-4 h-4" />
                </button>
            </div>

            {/* Slider track */}
            <IndustrySlider />

            {/* Hide scrollbar globally for webkit */}
            <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
        </section>
    );
}
export default Industry;
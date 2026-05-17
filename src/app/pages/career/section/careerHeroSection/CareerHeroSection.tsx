import Link from 'next/link';

const CareerHeroSection = () => {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center py-16 px-4 md:px-8 overflow-hidden font-sans">

            {/* Background Staggered Grid */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 w-full max-w-6xl items-center md:items-end justify-center relative z-0 opacity-80">

                {/* Column 1 */}
                <div className="flex flex-col gap-6 w-full md:w-1/4">
                    <div className="w-full h-75 md:h-70 bg-[#EBECEC] rounded-3xl shadow-sm"></div>
                    <div className="w-full h-75 md:h-55 bg-[#EBECEC] rounded-3xl shadow-sm"></div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-6 w-full md:w-1/4 md:mt-16">
                    <div className="w-full h-75 md:h-100 bg-[#EBECEC] rounded-3xl shadow-sm"></div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-6 w-full md:w-1/4 md:mt-10">
                    <div className="w-full h-75 md:h-95 bg-[#EBECEC] rounded-3xl shadow-sm"></div>
                </div>

                {/* Column 4 */}
                <div className="flex flex-col gap-6 w-full md:w-1/4 md:-mt-8">
                    <div className="w-full h-75 md:h-75 bg-[#EBECEC] rounded-3xl shadow-sm"></div>
                    <div className="w-full h-75 md:h-50 bg-[#EBECEC] rounded-3xl shadow-sm"></div>
                </div>

            </div>

            {/* CTA Button */}
            <div className="mt-12 z-10 relative">
                <Link
                    href="/pages/about/teampage"
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
        </section>
    );
}

export default CareerHeroSection;
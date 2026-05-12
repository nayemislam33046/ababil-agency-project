import Image from 'next/image';

const AboutSection=()=> {
    return (
        <section className="min-h-screen px-6 md:px-12 lg:px-16 py-14 md:py-0 flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Content Column */}
                <div className="space-y-6">
                    <header className="space-y-4">
                        <span className="text-sm font-bold text-primary uppercase">
                            Who we are
                        </span>
                        <h2 className="text-3xl lp:text-4xl text-wrap lg:text-5xl text-primary leading-tight mt-4 lp:mt-6">
                            How Colleagues Turned into Co-Founders
                        </h2>
                    </header>

                    <p className="text-[#333333] text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
                        Meet Atiq and Noman, the founders of Design Monks. Their journey began as colleagues,
                        united by a shared vision. In 2021, they decided to launch their own venture after
                        working together on major projects for brands like Viber and Samsung. Now, Design
                        Monks is home to over 40 passionate team members, all dedicated to our mission.
                    </p>

                    <button className="flex items-center gap-2 bg-secondary hover:bg-[#facc15] transition-colors text-[#003d2b] border border-primary font-bold py-3 px-8 rounded-full shadow-sm">
                        Explore All <img src="/right-arrow.svg" alt="Arrow Right" className="w-4 h-4" />
                    </button>
                </div>

                {/* Right Image Column */}
                <div className="relative flex items-end gap-4 md:gap-8 justify-center lg:justify-end">

                    <Image
                        src="/assets/about/fahad_jalal1.png"
                        alt="Founder"
                        className="object-cover w-full h-auto transform transition-transform group-hover:scale-105"
                        width={600}
                        height={600}
                    />
                </div>
            </div>

        </section>
    );
}

export default AboutSection;
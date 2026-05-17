import Image from "next/image";

const ActivitiesSlider = () => {
    const logosTop = [
        { logo: "/logo.svg", width: "w-56" },
        { logo: "/logo.png", width: "w-96" },
        { logo: "/logo.svg", width: "w-56" },
        { logo: "/logo.svg", width: "w-96" },
        { logo: "/logo.svg", width: "w-56" },
        { logo: "/logo.svg", width: "w-96" },
        { logo: "/logo.png", width: "w-56" },
        { logo: "/logo.svg", width: "w-96" },
    ];

    const logosBottom = [
        { logo: "/logo.svg", width: "w-56" },
        { logo: "/logo.png", width: "w-96" },
        { logo: "/logo.svg", width: "w-56" },
        { logo: "/logo.svg", width: "w-96" },
        { logo: "/logo.svg", width: "w-56" },
        { logo: "/logo.svg", width: "w-96" },
        { logo: "/logo.svg", width: "w-56" },
        { logo: "/logo.svg", width: "w-96" }
    ];

    return (
        <section className="bg-transparent relative overflow-hidden py-10">
            <div className="mb-12 leading-relaxed flex flex-col justify-center items-center text-center px-6 md:px-12 lg:px-16">
                <span className="text-sm font-bold tracking-widest text-primary uppercase">
                    Activities
                </span>
                <h2 className="text-3xl lm:text-4xl md:text-6xl font-extrabold text-primary my-4 leading-tight">
                    Life At Ababil
                </h2>
                <p className="text-gray text-sm sm:text-base lg:text-lg text-wrap">Design Monks is not just a workplace, it’s a hub of some creative and talented people who work together like <br className="hidden lg:block" />
                    being in a family full of positive vibes.</p>
            </div>
            <div className="w-full">
                {/* TOP ROW */}
                <div className="overflow-hidden">
                    <div className="flex animate-scroll-left w-max">
                        {[0, 1].map((track) => (
                            <div key={track} className="flex gap-5 max-h-75 px-2.5">
                                {logosTop.map((logo, i) => (
                                    <Image
                                        key={i}
                                        src={logo.logo}
                                        alt={logo.logo}
                                        width={100}
                                        height={100}
                                        className={`${logo.width} max-h-100 shrink-0 object-contain bg-[#C4C4C4] rounded-md`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>

                {/* BOTTOM ROW */}
                <div className="overflow-hidden mt-5">
                    <div className="flex animate-scroll-right w-max">
                        {[0, 1].map((track) => (
                            <div key={track} className="flex gap-5 max-h-75 px-2.5">
                                {logosBottom.map((logo, i) => (
                                    <Image
                                        key={i}
                                        src={logo.logo}
                                        alt={logo.logo}
                                        width={100}
                                        height={100}
                                        className={`${logo.width} max-h-100 shrink-0 object-contain bg-[#C4C4C4] rounded-md`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default ActivitiesSlider;

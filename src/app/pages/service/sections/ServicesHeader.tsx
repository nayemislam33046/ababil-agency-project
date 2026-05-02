import Image from 'next/image';
import Link from 'next/link';

const ServicesHeader = () => {
    const random = (min: number, max: number) =>
        Math.random() * (max - min) + min;
    const getSize = (i: number) => {
        if (i % 3 === 0) return 4;
        if (i % 3 === 1) return 6;
        return 8;
    };

    const colors = [
        "#ef4444",
        "#eab308",
        "#22c55e",
        "#15803d",
        "#1e3a8a",
        "#0e7490",
    ];

    return (
        <section className="relative h-[70vh] bg-white pt-5 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/assets/image_design.png"
                    alt="background"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Decorative Dots */}
            <div
                className="particle w-2 h-2 bg-red-900 rounded-full"
                style={{
                    top: "10%",
                    left: "4%",
                    "--x": "10px",
                    "--y": "-20px",
                    "--duration": "6s",
                    "--delay": "0s",
                } as React.CSSProperties}
            />

            <div
                className="particle w-4 h-4 bg-blue-500 rounded-full"
                style={{
                    top: "15%",
                    left: "10%",
                    "--x": "-15px",
                    "--y": "15px",
                    "--duration": "8s",
                    "--delay": "1s",
                } as React.CSSProperties}
            />

            <div
                className="particle w-3 h-3 bg-yellow-500 rounded-full"
                style={{
                    top: "20%",
                    left: "60%",
                    "--x": "5px",
                    "--y": "-10px",
                    "--duration": "5s",
                    "--delay": "0.5s",
                } as React.CSSProperties}
            />

            <div
                className="particle w-4 h-4 bg-cyan-900 rounded-full"
                style={{
                    top: "15%",
                    left: "80%",
                    "--x": "-20px",
                    "--y": "-25px",
                    "--duration": "8s",
                    "--delay": "2s",
                } as React.CSSProperties}
            />

            {[...Array(18)].map((_, i) => {
                const size = getSize(i);

                return (
                    <div
                        key={i}
                        className="particle rounded-full"
                        style={{
                            top: `${random(0, 90)}%`,
                            left: `${random(0, 90)}%`,
                            width: `${size}px`,
                            height: `${size}px`,
                            backgroundColor: colors[i % colors.length],
                            "--x": `${random(-30, 30)}px`,
                            "--y": `${random(-40, 40)}px`,
                            "--duration": `${size === 4 ? 6 : size === 6 ? 8 : 10}s`,
                            "--delay": `${random(0, 5)}s`,
                        } as React.CSSProperties}
                    />
                );
            })}

            <div className="mx-auto text-center relative z-10">
                {/* Logo & Rating */}
                <div className="flex flex-col items-center justify-center mb-8">
                    <Image src="/ababil.svg" alt="Ababil" width={140} height={40} priority />
                    <p className="p-1 px-2 text-xs lm:text-sm mt-7 rounded-full flex items-center gap-2 text-primary">
                        <Link href="/" className="text-[#454A51]">Home</Link>
                        <span>
                            <svg width="7" height="12" viewBox="0 0 6 10" fill="none">
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M5.30325 5.30325L1.0605 9.546L0 8.4855L3.7125 4.773L0 1.0605L1.0605 0L5.30325 4.24275C5.44385 4.3834 5.52284 4.57413 5.52284 4.773C5.52284 4.97187 5.44385 5.1626 5.30325 5.30325Z"
                                    fill="#063D30"
                                />
                            </svg>
                        </span>
                        Services
                    </p>
                </div>

                {/* Main Headline */}
                <div className='lm:px-10'>
                    <h1 className=" text-[#0A3D2E] mx-auto mb-4 px-6 lm:px-0 text-4xl lm:mt-20 sm:mt-0 text-wrap sm:text-5xl lg:text-7xl">
                        <span className="relative sm:leading-tight">
                            We turn great ideas into <br className="hidden lm:block" />
                            excellent products
                        </span>
                    </h1>
                </div>
            </div>

            <div className="absolute -left-10 bottom-0 lg:top-50 w-30 xsm:w-40 sm:w-56 sm:-left-14 float">
                <Image src={'/assets/boxHeader.png'} alt="Mockup 1" className="object-cover h-full w-full rotate-12" width={900} height={900} />
            </div>

            {/* Right Mockups */}
            <div className="absolute top-0 w-30 xsm:w-40 sm:w-56 xl:w-72 -right-10 lm:-right-5 sm:-right-14 xl:-right-20 float">
                <Image src={'/assets/starHeader.png'} alt="Mockup 2" className="object-cover h-full w-full rotate-12" width={900} height={900} />
            </div>
        </section>
    );
};

export default ServicesHeader;

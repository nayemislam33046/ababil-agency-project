import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: "Need a Product Designer?",
    desc: "Turning your big ideas into pixel-perfect products—need a Product Designer?",
    image: "/assets/workproof-1.png",
    span: "sm:col-span-3",
  },
  {
    title: "Need a Mobile Designer?",
    desc: "Seeking a Mobile Designer for user-friendly app designs.",
    image: "/assets/workproof-2.png",
    span: "sm:col-span-2",
  },
  {
    title: "Need a Brand Designer?",
    desc: "Your story, my design—together, we craft a brand that speaks.",
    image: "/assets/workproof-3.png",
    span: "sm:col-span-2",
  },
  {
    title: "Need a SaaS Designer?",
    desc: "Turning SaaS platforms into user-friendly experiences that people love.",
    image: "/assets/workproof-4.png",
    span: "sm:col-span-3",
  },
];

export default function WorksSection() {
  return (
    <section className="w-full bg-white px-5 sm:px-7 md:px-10 lg:px-14 py-14 font-outfit">
      {/* Header */}
      <div className="mb-12">
        <span className="text-xs font-bold tracking-widest uppercase text-primary mb-2">Live Preview</span>
        <h2 className=" text-2xl lm:text-3xl sm:text-4xl md:text-6xl font-heading text-primary mt-2 mb-4">
          See Our Works in Action
        </h2>
        <p className="text-primary max-w-lg text-sm lm:text-base leading-relaxed">
          Dive into our collection of projects that showcase creativity, precision, and purpose.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${project.span} relative rounded-3xl overflow-hidden group h-[500px] md:h-[440px] lg:h-[480px]`}
          >
            {/* Background Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-4 lm:pb-5 sm:p-5 md:p-6 text-white z-10">

              <p className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">
                {project.title}
              </p>

              <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4 max-w-[90%]">
                {project.desc}
              </p>

              <Link
                href="#"
                className="flex items-center justify-center w-full py-2.5 sm:py-3 px-4 rounded-lg bg-white/30 backdrop-blur-md border border-white/30 hover:bg-white/40 transition text-xs sm:text-sm font-medium"
              >
                See Live File →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
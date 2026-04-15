import Image from 'next/image';

const projects = [
  {
    title: "Need a Product Designer?",
    desc: "Turning your big ideas into pixel-perfect products—need a Product Designer?",
    bg: "bg-gradient-to-br from-[#4facfe] to-[#00f2fe]",
    image: "/assets/workproof-1.png",
    span: "md:col-span-3",
  },
  {
    title: "Need a Mobile Designer?",
    desc: "Seeking a Mobile Designer for user-friendly app designs.",
    bg: "bg-gradient-to-br from-[#d4fc79] to-[#96e6a1]",
    image: "/mobile-preview.png",
    span: "md:col-span-2",
  },
  {
    title: "Need a Brand Designer?",
    desc: "Your story, my design—together, we craft a brand that speaks.",
    bg: "bg-gradient-to-br from-[#fee140] to-[#fa709a]",
    image: "/brand-preview.png",
    span: "md:col-span-2",
  },
  {
    title: "Need a SaaS Designer?",
    desc: "Turning SaaS platforms into user-friendly experiences that people love.",
    bg: "bg-gradient-to-br from-[#f093fb] to-[#f5576c]",
    image: "/saas-preview.png",
    span: "md:col-span-3",
  },
];

export default function WorksSection() {
  return (
    <section className="w-full bg-white px-15 py-20 font-outfit">
      {/* Header */}
      <div className="mb-12">
        <span className="text-xs font-bold tracking-widest uppercase text-primary">Live Preview</span>
        <h2 className="text-5xl md:text-6xl font-heading text-primary mt-2 mb-4">
          See Our Works in Action
        </h2>
        <p className="text-primary max-w-lg leading-relaxed">
          Dive into our collection of projects that showcase creativity, precision, and purpose.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${project.bg} ${project.span} rounded-4xl p-8 flex flex-col justify-between overflow-hidden relative group transition-transform duration-500 hover:scale-[1.01]`}
          >
            {/* Visual Content (Centered Image) */}
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="rounded-2xl object-cover"
                />

            {/* Text Content */}
            <div className="relative z-10 text-white">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-white/80 text-sm mb-6 max-w-sm">
                {project.desc}
              </p>
              
              {/* Glassmorphic Button */}
              <button className="w-full py-3 px-6 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 hover:bg-white/30 transition-all flex items-center justify-center gap-2 font-medium">
                See Live File 
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
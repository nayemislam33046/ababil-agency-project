import Image from "next/image";

const bonuses = [
  {
    icon: '/bonus_logo1.svg',
    title: "Free Design Prototype",
    desc: "Experience your design in action before development.",
  },
  {
    icon: '/bonus_logo2.svg',
    title: "Developer Handoff",
    desc: "We ensure what we design is exactly what gets built.",
  },
  {
    icon: '/bonus_logo3.svg',
    title: "Project Management",
    desc: "Stay on track with our expert project management.",
  },
  {
    icon: '/bonus_logo4.svg',
    title: "Project Consultation",
    desc: "Get professional advice to enhance your project.",
  },
];

const BonusSection = () => {
  return (
    <section className="w-full flex justify-center px-4 py-10 bg-white">
      <div className="w-full bg-primary rounded-2xl p-6 md:p-10 mx-3 sm:mx-10 relative overflow-hidden">

        {/* Gradient Glow (top right effect) */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-green-400 blur-3xl opacity-20 rounded-full"></div>

        {/* Title */}
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-8 leading-tight">
          Bonuses Worth Over <br />
          <span className="text-white">$2,500</span> - Yours Free!
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {bonuses.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-secondary rounded-xl p-6 shadow-md hover:scale-105 h-48 transition duration-300"
              >
                <Image src={item.icon} width={24} height={24} alt={item.title} className="mb-3" />

                <p className="font-bold text-lg lg:text-base text-primary mb-2">
                  {item.title}
                </p>

                <p className="text-primary">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
import React from 'react';

const stats = [
  {
    title: "Clients",
    value: "150+",
    description: "Collaborating with ambitious brands to create meaningful experiences."
  },
  {
    title: "Countries Served",
    value: "7",
    description: "Bringing creativity and strategy together for brand success worldwide."
  },
  {
    title: "Experience",
    value: "4",
    description: "Designing with passion, precision, and expertise over the years."
  },
  {
    title: "Biriyani Plates",
    value: "999",
    description: "We're serious about our Biriyani Jaytun Birani is our top spot (not sponsored, but we wouldn't mind)."
  }
];

export default function VisionaryPartnerships() {
  return (
    <section className="py-8 px-6 bg-white md:px-12 lg:px-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-4 block">
          Visionary partnerships
        </span>
        <h2 className="text-3xl md:text-5xl text-center text-wrap text-primary leading-tight max-w-2xl mx-auto">
          Pioneering Thinking Impactful Change with Forward-Partners since 2021.
        </h2>
      </div>

      {/* Responsive Grid Section */}
      <div className="grid grid-cols-1 lm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index} 
            className="bg-gray-50 p-5 rounded-2xl border border-gray-200 flex flex-col justify-between transition-hover duration-300 hover:shadow-lg"
          >
            <div>
              <p className="text-xl text-[#0A0A0A] mb-8">
                {stat.title}
              </p>
              <p className="text-5xl font-bold text-[#0A0A0A] mb-6">
                {stat.value}
              </p>
            </div>
            <p className="text-[#333333] text-sm leading-relaxed">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { Check, X } from "lucide-react";

const data = [
  {
    name: "Ababil",
    desc: "Expert-driven & committed to higher quality. Get effective results & full support without hiring in-house employees.",
    highlight: true,
    icon: "/white_logo.svg",
    stats: [true, true, true, true, true],
  },
  {
    name: "In House Team",
    desc: "A full-time designer may ensure brand consistency, but there's a risk of limited expertise even though you pay regularly.",
    icon: "/people_logo.svg",
    stats: [false, false, false, true, false],
  },
  {
    name: "Creative Agencies",
    desc: "Agencies offer structured processes but mostly with high costs, long timelines, and less flexibility.",
    icon: "/pencil_logo.svg",
    stats: [false, false, true, true, false],
  },
  {
    name: "Freelancers",
    desc: "Freelancers may provide affordable design services but lack consistency & collaboration.",
    icon: "/userpen_logo.svg",
    stats: [false, true, false, false, true],
  },
  {
    name: "Self-Service Tools",
    desc: "DIY tools are budget-friendly but lack strategic thinking & originality.",
    icon: "/suitcase_logo.svg",
    stats: [false, false, true, true, false],
  },
];

const headers = [
  "Speed",
  "Flexibility",
  "Quality",
  "Scalability",
  "Affordability",
];

export default function ComparisonSection() {
  return (
    <div className="bg-white px-6 md:px-8 lp:px-14 py-12 mx-auto">

      {/* Heading */}
      <div className="text-center mb-12">
        <p className="uppercase text-primary font-bold text-sm mb-2">
          why choose us
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-primary leading-tight">
          ABABIL ALTERNATIVE? <br /> THINK ONE MORE TIME!
        </h2>
      </div>

      {/* Header Row */}
      <div className="hidden md:flex justify-between items-center px-6 mb-4 text-primary text-sm font-semibold">
        <div className="w-[40%]">Platform</div>
        <div className="flex flex-1 justify-around">
          {headers.map((h, i) => (
            <span key={i}>{h}</span>
          ))}
        </div>
      </div>

      {/* Rows */}
      <div className="flex flex-col gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row md:items-center md:justify-between gap-6 px-6 py-6 rounded-2xl transition-all duration-300
            ${item.highlight
                ? "bg-linear-to-r from-[#0b3d2e] via-[#1f7a63] to-[#2dd4bf] text-white shadow-lg"
                : "bg-white"
              }`}
          >
            {/* Left Content */}
            <div className="flex items-center gap-4 md:w-[40%]">
              <div
                className={`min-w-12 h-12 lp:min-w-14 lp:h-14 rounded-lg flex items-center justify-center
                ${item.highlight ? "bg-secondary" : "bg-primary"}`}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={28}
                  height={28}
                />
              </div>

              <div>
                <p className="font-semibold text-lg">{item.name}</p>
                <p
                  className={`text-[11px] md:text-[13px] lg:text-sm mt-1 ${item.highlight ? "text-white/80" : "text-gray"
                    }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:flex md:flex-nowrap justify-between md:justify-around items-center flex-1 gap-4">
              {item.stats.map((val, i) => (
                <div
                  key={i}
                  className="flex md:flex-col justify-between items-center gap-2 p-2 rounded-lg md:p-0 bg-transparent md:bg-transparent"
                >
                  {/* Mobile Header */}
                  <span className={`text-xs md:hidden text-gray-500 ${item.highlight ? "text-white/80" : "text-gray-500"}`}>
                    {headers[i]}
                  </span>

                  {/* Icon */}
                  {val ? (
                    <Check
                      className={`${item.highlight
                          ? "text-white"
                          : "text-green-600"
                        }`}
                    />
                  ) : (
                    <X className="text-red-500" />
                  )}
                </div>
              ))}
            </div>
            <hr
              className={`text-gray ${item.highlight || index === data.length - 1 ? "hidden" : "block"
                }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
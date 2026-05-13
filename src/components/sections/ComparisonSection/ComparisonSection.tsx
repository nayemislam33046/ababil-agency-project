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

const ComparisonSection = () => {
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

      {/* --- Desktop View (Table Layout for md and above) --- */}
      <div className="hidden md:block overflow-hidden">
        <table className="w-full border-separate border-spacing-y-4">
          <thead>
            <tr className="text-primary text-sm font-semibold">
              <th className="text-left pb-4 pl-6">Platform</th>
              {headers.map((h, i) => (
                <th key={i} className="pb-4 text-center">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="transition-all duration-300">
                {/* First TD */}
                <td
                  className={`rounded-l-2xl py-6 pl-6 w-[40%]
        ${item.highlight
                      ? "bg-primary text-white"
                      : "bg-white border-y border-l border-gray-100"
                    }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`min-w-12 h-12 rounded-lg flex items-center justify-center
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
                        className={`text-[13px] lg:text-sm mt-1 max-w-sm ${item.highlight ? "text-white/80" : "text-gray-500"
                          }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Middle TDs */}
                {item.stats.map((val, i) => (
                  <td
                    key={i}
                    className={`
            text-center
            ${item.highlight
                        ? "bg-primary text-white"
                        : "bg-white border-y border-gray-100"
                      }
            ${i === item.stats.length - 1
                        ? "rounded-r-2xl border-r border-gray-100"
                        : ""
                      }
          `}
                  >
                    <div className="flex justify-center">
                      {val ? (
                        <Check
                          className={
                            item.highlight ? "text-white" : "text-green-600"
                          }
                        />
                      ) : (
                        <X className="text-red-500" />
                      )}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* --- Mobile View (Your Original Card Design for below md) --- */}
      <div className="flex flex-col gap-5 md:hidden">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col gap-6 px-6 py-6 rounded-2xl transition-all duration-300
            ${item.highlight ? "bg-primary text-white shadow-lg" : "bg-white border border-gray-100"}`}
          >
            {/* Left Content */}
            <div className="flex items-center gap-4">
              <div
                className={`min-w-12 h-12 rounded-lg flex items-center justify-center
                ${item.highlight ? "bg-secondary" : "bg-primary"}`}
              >
                <Image src={item.icon} alt={item.name} width={28} height={28} />
              </div>
              <div>
                <p className="font-semibold text-lg">{item.name}</p>
                <p
                  className={`text-[12px] lm:text-sm mt-1 ${item.highlight ? "text-white" : "text-gray"}`}
                >
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Stats Mobile Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {item.stats.map((val, i) => (
                <div key={i} className="flex justify-between items-center p-2">
                  <span
                    className={`text-xs ${item.highlight ? "text-white/80" : "text-gray-500"}`}
                  >
                    {headers[i]}
                  </span>
                  {val ? (
                    <Check
                      className={
                        item.highlight ? "text-white" : "text-green-600"
                      }
                      size={20}
                    />
                  ) : (
                    <X className="text-red-500" size={20} />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonSection;

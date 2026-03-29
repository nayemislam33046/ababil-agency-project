"use client";

import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthly: 999,
    yearly: 999 * 12 * 0.8, // 20% discount
    desc: "Perfect for small teams exploring creative and general support.",
    features: [
      "Access to basic design templates",
      "Standard project comments",
      "Community discussions",
    ],
    highlight: false,
  },
  {
    name: "Studio",
    monthly: 1999,
    yearly: 1999 * 12 * 0.8,
    desc: "Designed for growing brands that need consistent creative output.",
    features: [
      "Unlimited brand assets",
      "Collaboration with up to 5 team members",
      "Reusable component library",
      "Priority design reviews",
    ],
    highlight: true,
  },
  {
    name: "Agency",
    monthly: 2999,
    yearly: 2999 * 12 * 0.8,
    desc: "End-to-end creative partnership for scaling businesses.",
    features: [
      "Unlimited team members",
      "White-label client dashboards",
      "Advanced workflow automation",
      "Dedicated account specialist",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <section className=" py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <p className="font-inter uppercase text-secondary text-sm mb-2">Pricing</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Affordable Plans <br /> For Everyone.
        </h2>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className={!yearly ? "font-semibold" : "opacity-60"}>
            Monthly
          </span>

          <button
            onClick={() => setYearly(!yearly)}
            className={`w-14 h-7 flex items-center rounded-full p-1 transition ${yearly ? "bg-yellow-400" : "bg-gray-400"
              }`}
          >
            <div
              className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${yearly ? "translate-x-7" : ""
                }`}
            />
          </button>

          <span className={yearly ? "font-semibold" : "opacity-60"}>
            Yearly
          </span>
        </div>

        {/* Cards */}
        {/* grid md:grid-cols-2 lp:grid-cols-3 */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-6 justify-center items-stretch">
          {plans.map((plan, i) => {
            const price = yearly ? plan.yearly : plan.monthly;

            return (
              <div
                key={i}
                className={`rounded-xl p-6 text-left flex flex-col min-h-95 w-full sm:w-64 ${plan.highlight
                    ? "bg-white text-primary lp:scale-105"
                    : "bg-gray-100 text-primary"
                  }`}
              >
                <div>
                  <p className="text-lg text-primary font-semibold mb-2">{plan.name}</p>
                  <p className="text-sm lp:text-[13px] text-primary mb-4">{plan.desc}</p>

                  <div className="text-4xl text-primary font-bold mb-2 flex items-baseline gap-2">
                    ${Math.round(price)}
                    <p className="text-sm mb-4">/{yearly ? "year" : "month"}</p>
                  </div>

                  <hr className="my-4" />
                </div>

                {/* Bottom content */}
                <div className="mt-auto">
                  <ul className="space-y-2 text-sm mb-6">
                    {plan.features.map((f, idx) => (
                      <li key={idx}>✓ {f}</li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-2 rounded-full font-semibold ${plan.highlight
                        ? "bg-secondary text-primary"
                        : "border border-primary"
                      }`}
                  >
                    Let's Collab!
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
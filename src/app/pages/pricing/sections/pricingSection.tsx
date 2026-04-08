"use client"
import React, { useState } from "react";

// ✅ Types
type Plan = {
  name: string;
  monthly: number;
  yearly: number;
  desc: string;
  features: string[];
  highlight?: boolean;
};

type PageType = "1-4 Pages" | "5-8 Pages" | "10-15 Pages" | "16-25 Pages" | "Custom";

type Category = "Website" | "Web App" | "Mobile App" | "Branding" | "Subscription";

// ✅ Generator function (so you don’t repeat yourself)
const generatePlans = (base: number): Plan[] => [
  {
    name: "Starter",
    monthly: base,
    yearly: base * 12 * 0.8,
    desc: "Perfect for small teams exploring creative and general support.",
    features: ["Access to basic design templates", "Standard project comments", "Community discussions"],
    highlight: false,
  },
  {
    name: "Studio",
    monthly: base + 1000,
    yearly: (base + 1000) * 12 * 0.8,
    desc: "Designed for growing brands that need consistent creative output.",
    features: ["Unlimited brand assets", "Collaboration with up to 5 team members", "Reusable component library", "Priority design reviews"],
    highlight: true,
  },
  {
    name: "Agency",
    monthly: base + 2000,
    yearly: (base + 2000) * 12 * 0.8,
    desc: "End-to-end creative partnership for scaling businesses.",
    features: ["Unlimited team members", "White-label client dashboards", "Advanced workflow automation", "Dedicated account specialist"],
    highlight: false,
  },
];

// ✅ All page options
const pageOptions: PageType[] = [
  "1-4 Pages",
  "5-8 Pages",
  "10-15 Pages",
  "16-25 Pages",
  "Custom",
];

// ✅ Dynamic pricing data
const pricingData: Record<Category, Record<PageType, Plan[]>> = {
  Website: {
    "1-4 Pages": generatePlans(999),
    "5-8 Pages": generatePlans(1999),
    "10-15 Pages": generatePlans(2999),
    "16-25 Pages": generatePlans(3999),
    Custom: generatePlans(4999),
  },
  "Web App": {
    "1-4 Pages": generatePlans(1999),
    "5-8 Pages": generatePlans(2999),
    "10-15 Pages": generatePlans(3999),
    "16-25 Pages": generatePlans(4999),
    Custom: generatePlans(6999),
  },
  "Mobile App": {
    "1-4 Pages": generatePlans(2499),
    "5-8 Pages": generatePlans(3499),
    "10-15 Pages": generatePlans(4499),
    "16-25 Pages": generatePlans(5499),
    Custom: generatePlans(7499),
  },
  Branding: {
    "1-4 Pages": generatePlans(799),
    "5-8 Pages": generatePlans(1299),
    "10-15 Pages": generatePlans(1799),
    "16-25 Pages": generatePlans(2299),
    Custom: generatePlans(2999),
  },
  Subscription: {
    "1-4 Pages": generatePlans(1499),
    "5-8 Pages": generatePlans(2499),
    "10-15 Pages": generatePlans(3499),
    "16-25 Pages": generatePlans(4499),
    Custom: generatePlans(5999),
  },
};

const PricingSection = () => {
  const [category, setCategory] = useState<Category>("Website");
  const [pageType, setPageType] = useState<PageType>("1-4 Pages");
  const [yearly, setYearly] = useState(false);

  const currentPlans = pricingData[category][pageType];

  return (
    <div>

      {/* 🔹 CATEGORY BUTTONS */}

      <div className="mt-6 flex justify-center">
        <div className="inline-flex flex-wrap justify-center items-center gap-2 bg-primary p-2 rounded-lg">
          {(Object.keys(pricingData) as Category[]).map((item) => (
            <button
              key={item}
              onClick={() => {
                setCategory(item);
                setPageType("1-4 Pages");
              }}
              className={`px-4 py-2 rounded-md text-sm ${category === item
                  ? "bg-secondary text-primary"
                  : "text-white"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* 🔹 PAGE BUTTONS (ALL CATEGORY) */}
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {pageOptions.map((p) => (
          <button
            key={p}
            onClick={() => setPageType(p)}
            className={`px-4 py-2 rounded-md text-sm ${pageType === p
                ? "bg-secondary text-primary border border-primary"
                : "bg-[#0A3D2E] text-white"
              }`}
          >
            {p}
          </button>
        ))}
      </div>

      {/* 🔹 TOGGLE */}
      <div className="flex items-center justify-center gap-3 my-8">
        <span className={!yearly ? "font-semibold text-primary" : "opacity-60"}>
          Monthly
        </span>

        <button
          onClick={() => setYearly(!yearly)}
          className={`w-14 h-7 flex items-center rounded-full p-1 transition ${yearly ? "bg-secondary" : "bg-gray-400"
            }`}
        >
          <div
            className={`bg-white w-5 h-5 rounded-full shadow-md transform transition ${yearly ? "translate-x-7" : ""
              }`}
          />
        </button>

        <span className={yearly ? "font-semibold text-primary" : "opacity-60"}>
          Yearly
        </span>
      </div>

      {/* 🔹 CARDS */}
      <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-8 justify-center items-stretch">
        {currentPlans.map((plan, i) => {
          const price = yearly ? plan.yearly : plan.monthly;

          return (
            <div
              key={i}
              className={`rounded-xl p-4 text-left flex flex-col min-h-95 w-full border border-gray-300 sm:w-74`}
            >
              <div>
                <p className="text-lg font-semibold text-primary mb-2">{plan.name}</p>
                <p className="text-sm text-primary mb-4">{plan.desc}</p>

                <div className=" mb-2 flex items-baseline gap-2">
                  <h1 className="text-4xl font-bold font-anton text-primary">${Math.round(price)}</h1>
                  <p className="text-sm text-primary font-normal font-body">
                    /{yearly ? "year" : "month"}
                  </p>
                </div>

                <hr className="my-4 text-primary" />
              </div>

              <div className="mt-auto">
                <ul className="space-y-2 text-sm mb-6">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>✓ <span className="text-primary">{f}</span></li>
                  ))}
                </ul>

                <button
                  className={`w-full py-2 rounded-full font-semibold ${plan.highlight
                      ? "bg-secondary text-primary"
                      : "border border-primary text-primary"
                    }`}
                >
                  Book a Call
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};

export default PricingSection;
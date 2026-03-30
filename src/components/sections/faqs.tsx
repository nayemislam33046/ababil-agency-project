"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const faqs = [
  {
    question: "Is this really a free template?",
    answer:
      "Yes, this template is completely free to use for personal and commercial projects without any hidden charges.",
  },
  {
    question: "Can I customize it without code?",
    answer:
      "Absolutely! You can easily customize content, colors, and layout without deep coding knowledge.",
  },
  {
    question: "Is it mobile responsive?",
    answer:
      "Yes, the design is fully responsive and works smoothly across all devices including mobile, tablet, and desktop.",
  },
  {
    question: "Can I use it for client work?",
    answer:
      "Yes, you are free to use this template for client projects without any restrictions.",
  },
  {
    question: "Do I need a Framer account to use it?",
    answer:
      "No, you don’t need a Framer account. This version is built with Next.js and works independently.",
  },
];

export default function FAQSection() {

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0b3d2e] text-white px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        
        {/* Left */}
        <div>
          <p className="text-yellow-400 text-sm font-semibold mb-3">FAQs</p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Have <br /> Questions?
          </h2>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-[#072b22] rounded-xl px-5 py-4 transition-all duration-300"
              >
                {/* Question */}
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <p className="text-sm md:text-base">
                    {faq.question}
                  </p>

                  <div className="border border-white/30 rounded-md p-1">
                    {isOpen ? (
                      <Minus size={16} />
                    ) : (
                      <Plus size={16} />
                    )}
                  </div>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 mt-3 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-white/70">{faq.answer}</p>
                </div>
              </div>
            );
          })}

          {/* Footer */}
          <div className="flex flex-col lm:flex-row justify-between items-center text-sm mt-4 text-white">
            <p className="pb-2 lm:pb-0">Can’t find what you’re looking for?</p>
            <Link href="/contact" className="flex items-center font-bold gap-1 hover:underline">
              Contact Us
              <Image src="/arrow_white_image.svg" alt="arrows" width={20} height={20} className="inline-block ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
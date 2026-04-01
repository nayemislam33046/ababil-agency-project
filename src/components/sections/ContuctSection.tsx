"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactSection() {
  const [selectedBudget, setSelectedBudget] = useState<string>("");

  const budgetOptions = [
    "Less than $5K",
    "$5K - $10K",
    "$10K - $20K",
    "$20K - $50K",
    "More than $50K",
  ];

  return (
    <section className="w-full flex justify-center items-center flex-col md:py-10 px-3 lm:px-8 md:px-10 bg-gray-100">
      <div className=" w-full bg-primary rounded-2xl p-5 lm:p-6 py-10 mt-10 md:p-10 text-white relative">
        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs text-[#1FB268] border border-[#1FB268] inline-block px-3 py-1 rounded-full mb-3">
                Clomos 5799 Consultation on us
              </p>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                  Enhance Your Brand <br />
                  Potential
                  <span className="font-playfair italic">At No Cost!</span>
                </h2>
              </div>

              <ul className="text-sm space-y-2 text-gray-200">
                <li className="flex items-center gap-1">
                  <Image src="/round-check.svg" alt="Check" width={16} height={16} /> Expect a response from us within 24 hours
                </li>
                <li className="flex items-center gap-1">
                  <Image src="/round-check.svg" alt="Check" width={16} height={16} /> We’re happy to sign an NDA upon request.
                </li>
                <li className="flex items-center gap-1">
                  <Image src="/round-check.svg" alt="Check" width={16} height={16} /> Get access to a team of dedicated product specialists.
                </li>
              </ul>
            </div>

            {/* PROFILE CARD */}
            <div className="flex flex-col gap-4 mt-6">
              <div className="rounded-xl p-1">
                <Image
                  src="/assets/CEO_Fahad.png"
                  alt="person"
                  width={200}
                  height={180}
                  className="rounded-lg object-cover"
                />
              </div>

              <div>
                <h4 className="font-semibold text-lg">Abdullah Al Fahad</h4>
                <p className="text-sm text-[#A3A3A3] text-body mb-4">COO & Co-founder</p>
                <p className="mt-1 flex gap-1 text-body text-[#D4D4D4]">
                  <Image src="/whatsapp_icon.svg" alt="Phone" width={16} height={16} /> +1 (716) 503-6335
                </p>
                <Link href="#" className="text-secondary hover:underline font-bold cursor-pointer">
                  Book a Call Directly
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="space-y-4">
            <div>
              <label className="font-body font-bold text-sm lm:text-[18px]">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 px-3 py-2 rounded-md bg-white/10 border border-white/20 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="font-body font-bold text-sm lm:text-[18px]">Your Email</label>
                <input
                  type="email"
                  placeholder="yourmail@mail.com"
                  className="w-full mt-1 px-3 py-2 rounded-md bg-white/10 border border-white/20 outline-none"
                />
              </div>

              <div>
                <label className="font-body font-bold text-sm lm:text-[18px]">Whatsapp Number</label>
                <input
                  type="text"
                  placeholder="123 1234567"
                  className="w-full mt-1 px-3 py-2 rounded-md bg-white/10 border border-white/20 outline-none"
                />
              </div>
            </div>

            {/* BUDGET */}
            <div>
              <label className="font-body font-bold text-sm lm:text-[18px]">Project Budget</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {budgetOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => setSelectedBudget(item)}
                    className={`text-sm lm:text-base p-2 lm:p-3 border rounded-md transition ${
                      selectedBudget === item
                        ? "bg-secondary text-primary border-secondary"
                        : "border-[#A3A3A3] text-[#A3A3A3] hover:bg-secondary hover:text-black"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* DETAILS */}
            <div>
              <label className="font-body font-bold text-sm lm:text-[18px]">Project Details</label>
              <textarea
                rows={3}
                placeholder="I want to redesign my website..."
                className="w-full mt-1 px-3 py-2 rounded-md bg-white/10 border border-white/20 outline-none"
              />
            </div>

            {/* BUTTON */}
            <button className="bg-secondary text-primary w-full md:w-auto px-8 py-2 rounded-full font-semibold hover:opacity-90 transition">
              Book a Call →
            </button>
          </div>
        </div>
      </div>

        {/* message banner */}
      <div className="w-full flex justify-center bg-gray-100 py-2">
      <div className="w-full bg-linear-to-r from-lime-200 via-green-200 to-lime-300 rounded-full px-2 md:px-4 py-2 flex flex-col gap-3 lm:gap-5 lm:flex-row items-center justify-between shadow-sm">

        {/* LEFT: AVATARS */}
        <div className="flex -space-x-3">
          {[1, 2, 3, 4].map((i) => (
            <Image
              key={i}
              src={`/assets/CEO_Fahad.png`}
              alt="avatar"
              width={32}
              height={32}
              className="rounded-full border-2 border-white object-cover "
            />
          ))}
        </div>

        {/* TEXT */}
        <p className="text-sm md:text-base text-gray-800 text-center px-4">
          The <span className="italic font-semibold">Wrong Partner?</span>{" "}
          Get 100% Value And Guarantee. Don’t Miss Out -{" "}
          <span className="text-green-700 font-semibold cursor-pointer">
            Secure Your Business
          </span>
        </p>

      </div>
    </div>
    </section>
  );
}
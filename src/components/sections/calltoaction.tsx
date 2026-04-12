import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const CallToAction = () => {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-10 md:py-20 bg-white text-center">
      {/* Headline Container */}
      <div className="max-w-3xl mb-10">
        <p className="text-gray text-lg md:text-xl leading-relaxed font-body">
          Say goodbye to outdated enterprise software and welcome the smoother one. 
          We lead you from design to product innovation to shape your path from idea to success
        </p>
      </div>

      {/* Social Icons Grid */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { icon: '/world_icon.svg', label: 'Dribbble' },
          { icon: '/behance_icon.svg', label: 'Behance' },
          { icon: '/instagram_icon.svg', label: 'Instagram' },
          { icon: '/linkedin_icon.svg', label: 'LinkedIn' },
          { icon: '/facebook_icon.svg', label: 'Facebook' },
          { icon: '/x_icon.svg', label: 'X' },
          { icon: '/telegram_icon.svg', label: 'Telegram' },
        ].map((item, index) => (
          <Link
            key={index}
            href="#"
            className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-xl text-gray-700 hover:bg-gray-200 transition-colors duration-200"
            aria-label={item.label}
          >
            <Image src={item.icon} alt={item.label} width={20} height={20} className="object-contain" />
          </Link>
        ))}
      </div>

      {/* Subscription/CTA Form */}
      <div className="flex flex-col md:flex-row items-center gap-4 w-full max-w-xl">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            placeholder="Your email here"
            className="block w-full pl-11 pr-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
          />
        </div>
        
        <button className="w-full md:w-auto whitespace-nowrap bg-secondary hover:bg-yellow-400 text-primary border border-primary font-bold py-3 px-8 rounded-xl flex items-center justify-center gap-2 transition-transform active:scale-95 shadow-sm">
          Book a Call
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
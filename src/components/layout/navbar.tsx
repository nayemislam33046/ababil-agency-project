"use client";
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CenterButton from './centerButton';

// ✅ FIX: only valid keys
type MenuKey = 'services' | 'more';

const Navbar = () => {
  const [activePopup, setActivePopup] = useState<MenuKey | null>(null);

  const navData = {
    services: {
      image: "/assets/parallelMobile.jpg",
      imagePosition: 'right',
      vidPosition:"end",
      arrowPos: 'sm:left-[28%] lg:left-[32%] xl:left-[30%]',
      links: [
        { title: "UI UX Design", desc: "Creating user-friendly digital experiences.", href: "/pages/service/ui-ux" },
        { title: "Logo & Branding", desc: "Creating memorable identities for brands.", href: "/pages/service/logo-branding" },
        { title: "Web Design", desc: "Building visually appealing & functional websites", href: "/pages/service/web-design" },
        { title: "Webflow Design", desc: "Developing responsive websites effortlessly", href: "/pages/service/web-design" },
        { title: "Framer Branding", desc: "Interactive web designs are made simple", href: "/pages/service/web-design" },
        { title: "SaaS Design", desc: "Intuitive interfaces that boost user engagement.", href: "/pages/service/web-design" },
      ]
    },
    more: {
      image: "/assets/dmvid.png",
      imagePosition: 'left',
      vidPosition:"center",
      arrowPos: 'sm:right-[60px] lg:right-[140px] xl:right-[120px]',
      links: [
        { title: "Home", desc: "Home is where the ABABIL lives.", href: "/home" },
        { title: "About us", desc: "The Journey of ABABIL", href: "/pages/about" },
        { title: "Meet the team", desc: "An overview of the Monk family", href: "/meet" },
        { title: "Blogs", desc: "A collection of informative blogs", href: "/blogs" },
        { title: "Career", desc: "Work with top global brands, grow your skills", href: "/career" },
        { title: "Contact us", desc: "Start your dream design journey from here", href: "/pages/contact" },
      ]
    }
  };

  const togglePopup = (menu: MenuKey) =>
    setActivePopup(activePopup === menu ? null : menu);

  return (
    <>
      {activePopup && (
        <div
          className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[2px]"
          onClick={() => setActivePopup(null)}
        />
      )}

      {activePopup && (
        <div className="fixed z-50 transition-all duration-300 ease-out bottom-0 left-0 h-[90vh] bg-white rounded-t-[30px] p-8 sm:bottom-28 sm:left-1/2 sm:-translate-x-1/2 sm:w-150 w-full lg:w-[90%] lg:max-w-3xl sm:h-auto sm:rounded-2xl sm:shadow-2xl overflow-visible">

          <div className={`flex flex-col sm:flex-row gap-14 sm:px-6 items-stretch ${navData[activePopup].imagePosition === 'left'
            ? 'sm:flex-row-reverse'
            : 'sm:flex-row'
            }`}>

            <div className="flex-2 w-full flex flex-col gap-6 text-black">
              {navData[activePopup].links.map((item, index: number) => (
                <Link
                  key={index}
                  href={item.href}
                  className="group block"
                  onClick={() => setActivePopup(null)}
                >
                  <p className="font-bold lm:text-lg group-hover:text-green-800 transition-colors">
                    {item.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {item.desc}
                  </p>
                </Link>
              ))}
            </div>

            {/* ✅ FIX: add height for Image fill */}
            <div className={`hidden sm:flex flex-1 items-center justify-${navData[activePopup].vidPosition}`}>
              <div className="relative h-full aspect-[9/16] max-h-[400px]">
                <Image
                  src={navData[activePopup].image}
                  alt="preview"
                  fill
                  className="rounded-xl object-cover shadow-sm"
                />
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className={`absolute -bottom-2 w-5 h-5 bg-white rotate-45 transform transition-all duration-300 border-b border-r border-gray-100 sm:border-none
            ${navData[activePopup].arrowPos} -translate-x-1/2`}
          />
        </div>
      )}

      {/* Navbar */}
      <nav className="fixed bottom-0 sm:bottom-3 left-1/2 -translate-x-1/2 text-white flex items-center z-50 sm:min-w-140 justify-center xsm:justify-between sm:w-auto w-full sm:bg-[#0A3D2E] sm:border-2 sm:py-2 sm:px-10 sm:rounded-xl sm:shadow-2xl gap-4 sm:gap-6 xl:gap-10 bg-transparent px-4">

        <div className="absolute -inset-2 -z-10 block sm:hidden">
          <Image src={'/assets/nav-bg.png'} alt="bg" fill className="object-fill" priority />
        </div>

        <Link href="/pages/projects" className="hover:text-yellow-400 text-[11px] xsm:text-sm sm:text-body-base font-medium flex flex-col items-center gap-1 w-12 transition-all">
          <span className='sm:hidden'>
            <Image src="/projects_icon.svg" alt="i" width={24} height={24} />
          </span>
          Projects
        </Link>

        <button onClick={() => togglePopup('services')}
          className={`hover:text-yellow-400 text-[11px] xsm:text-sm sm:text-body-base font-medium flex flex-col items-center gap-1 w-12 transition-all ${activePopup === 'services' ? 'text-yellow-400 scale-110' : ''}`}>
          <span className='sm:hidden'>
            <Image src="/services_icon.svg" alt="i" width={24} height={24} />
          </span>
          Services
        </button>

        <CenterButton />

        <Link href="/pages/pricing" className="hover:text-yellow-400 text-[11px] xsm:text-sm sm:text-body-base font-medium flex flex-col items-center gap-1 w-12 transition-all">
          <span className='sm:hidden'>
            <Image src="/doller_icon.svg" alt="i" width={24} height={24} />
          </span>
          Pricing
        </Link>

        <button onClick={() => togglePopup('more')}
          className={`hover:text-yellow-400 text-[11px] xsm:text-sm sm:text-body-base font-medium flex flex-col items-center gap-1 w-12 transition-all ${activePopup === 'more' ? 'text-yellow-400 scale-110' : ''}`}>
          <span className='sm:hidden'>
            <Image src="/menu_icon.svg" alt="i" width={24} height={24} />
          </span>
          More
        </button>

      </nav>
    </>
  );
};

export default Navbar;
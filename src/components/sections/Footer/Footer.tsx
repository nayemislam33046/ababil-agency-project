import Link from 'next/link';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

const Footer = () => {
  const footerData = {
    importantLinks: ['Contact Us', 'About Us', 'Products', 'Industry', 'Blogs'],
    services: ['UI/UX Design', 'Web Design', 'Logo & Branding', 'Webflow Design', 'Framer Design'],
    specializedIndustry: ['Fintech Industry', 'Healthcare & Fitness Industry', 'Edtech Industry', 'Cybersecurity Industry', 'Company Deck'],
    compare: ['Vs Agencies', 'Vs Freelancers', 'Vs Inhouse'],
  };

  const partners = [
    { name: 'framer', sub: 'Professional Partner' },
    { name: 'webflow', sub: 'Professional Partner' },
    { name: 'behance', sub: 'Top Team On Behance' },
    { name: 'dribble', sub: 'Top Team On Dribbble' },
    { name: 'clutch', sub: 'Reviewed On', stars: 5 },
    { name: 'google', sub: 'Reviewed On', stars: 5 },
  ];

  return (
    
    <footer className="bg-[linear-gradient(180deg,#060606_-3.32%,#07211B_24.25%,#063D30_58.34%)] text-white pt-16 pb-32 lm:pb-40 sm:pb-24 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 justify-items-center text-center">
          <FooterColumn title="Important Links" links={footerData.importantLinks} />
          <FooterColumn title="Services" links={footerData.services} />
          <FooterColumn title="Specialized Industry" links={footerData.specializedIndustry} isIndustry />
          <FooterColumn title="Compare" links={footerData.compare} />
        </div>

        <div className="border-t border-white/10 py-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center items-center text-center">
            {partners.map((partner, i) => (
              <div key={i} className="flex flex-col items-center space-y-2">
                <Image src={`/${partner.name.toLowerCase()}_logo.svg`} alt={partner.name} width={80} height={40} className="object-contain" />
                <div className="flex items-center gap-1 mt-1">
                   <span className="text-[10px] text-white uppercase tracking-wider">{partner.sub}</span>
                   {partner.stars && (
                     <span className="text-yellow-500 text-[10px]">★★★★★</span>
                   )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[13px] text-white">
          <Link href="#" className="hover:text-white transition-colors order-1 md:order-0">Terms & Conditions</Link>
          <p className="order-3 md:order-0">© {new Date().getFullYear()} Ababil, All Rights Reserved.</p>
          <Link href="#" className="hover:text-white transition-colors order-2 md:order-0 my-3 md:my-0">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, links, isIndustry }: { title: string, links: string[], isIndustry?: boolean }) => (
  <div className="flex flex-col items-center space-y-5 w-full">
    <h4 className="text-[15px] font-bold text-white uppercase tracking-wider">{title}</h4>
    <ul className="space-y-3 flex flex-col items-center">
      {links.map((link, i) => (
        <li key={i}>
          <Link href="#" className="text-white text-[14px] hover:text-white transition-colors flex items-center justify-center">
            {link}
            {isIndustry && link === 'Company Deck' && (
              <span className="ml-2 bg-primary text-white font-bold text-[10px] p-1 rounded-full flex items-center justify-center">
                <ArrowDown size={12}/>
              </span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
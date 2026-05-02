import { Lightbulb, Workflow, ShieldCheck, Zap, BarChart3, Search } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      title: "User-Centric Approach",
      description: "We prioritize the needs and behaviors of your users to ensure intuitive designs that deliver exceptional experiences.",
      icon: "/assets/services/logo/logo1.png",
    },
    {
      title: "Lifetime Support",
      description: "We offer continuous assistance, updates, and optimizations to keep your design performing at its best forever.",
      icon: "/assets/services/logo/logo2.png",
    },
    {
      title: "Cross-Industry Expertise",
      description: "Our team has experience across various industries so we can deliver personalized solutions that meet the unique needs of every sector.",
      icon: "/assets/services/logo/logo3.png",
    },
    {
      title: "SEO & Mobile Optimization",
      description: "We ensure your designs are optimized for search engines and mobile devices to drive traffic and improve user engagement.",
      icon: "/assets/services/logo/logo4.png",
    },
    {
      title: "Fast Turnaround Times",
      description: "Get high-quality designs delivered promptly without sacrificing creativity or functionality to help you meet deadlines efficiently.",
      icon: "/assets/services/logo/logo5.png",
    },
    {
      title: "Transparent Process",
      description: "We maintain clear communication throughout the project and make sure that you're always informed and involved in key decisions.",
      icon: "/assets/services/logo/logo6.png",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-2">
          Design Excellence
        </p>
        <h2 className="text-2xl lm:text-3xl md:text-5xl font-bold text-[#063b2d] leading-tight">
          Services for Responsive <br /> Successful Brands UI/UX Design
        </h2>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-[#063b2d] px-8 py-10 rounded-4xl flex flex-col gap-4 hover:scale-[1.02] transition-transform duration-300"
          >
            <div className="mb-2">
              <img src={service.icon} alt={service.title} className="w-8 h-8" />
            </div>
            <p className="text-lg lm:text-xl font-semibold text-white">
              {service.title}
            </p>
            <p className="text-gray-300 leading-relaxed text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
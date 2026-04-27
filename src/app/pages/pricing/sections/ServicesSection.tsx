const ServicesMarks = () => {
  const serviceCategories = [
    {
      title: "Core Design",
      items: ["Website Designs", "SaaS App Design", "Product Design", "SaaS Design", "Mobile App Design", "Mobile Game UI Design", "Video Game UI Design", "Gamification UI"]
    },
    {
      title: "Web & Framer",
      items: ["Shopify Web Design", "Webflow Web Development", "Framer Development", "Framer Template Design", "Framer Prototypes", "Landing Page Design", "Dashboard Design", "Membership Tiers Design"]
    },
    {
      title: "Specialized UI/UX",
      items: ["Subscription Tiers Design", "Pricing Tiers Design", "Generative AI Tool UI", "Chatbot UI", "3D Design", "UI Animation", "Product Launching Video", "Motion Graphics"]
    },
    {
      title: "Strategy & Identity",
      items: ["Logo Designs", "Branding & Visual Identity", "UX Consultation", "Interactive Prototyping", "Usability Testing", "User Testing", "eBook Design", "User Flow Design"]
    }
  ];

  return (
    <section className="bg-white py-10 px-6 font-sans">
      <div className="mx-3 sm:mx-10">
        
        {/* Dynamic Header */}
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-widest text-primary mb-2">
            Others Services
          </p>
          <h2 className="text-2xl lm:text-4xl md:text-5xl font-black text-primary uppercase my-5 tracking-tight">
            Proven Success In <br /> Every Industry
          </h2>
        </div>

        {/* Dynamic Service Container */}
        <div className="bg-primary text-white rounded-[2.5rem] p-10 md:p-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 justify-center items-center gap-y-8">
            
            {serviceCategories.map((category, idx) => (
              <ul key={idx} className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <li 
                    key={itemIdx} 
                    className="flex items-start gap-3 group cursor-default transition-colors hover:text-white"
                  >
                    {/* Checkmark Icon */}
                    <span className="mt-1 text-[10px] opacity-70 group-hover:opacity-100 transition-opacity">
                      <CheckIcon />
                    </span>
                    <span className="text-[15px] font-medium leading-tight">
                      {item}
                    </span>
                  </li>
                ))}
                <hr className='text-gray sm:hidden'/>
              </ul>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

// Simple reusable SVG component for the checkmark
const CheckIcon = () => (
  <svg 
    width="14" 
    height="14" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default ServicesMarks;

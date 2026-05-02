import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Logo and Branding",
    description:
      "Create distinctive logos and cohesive brand identities that reflect your company’s essence with our advanced logo and branding services that help you connect with your target audience.",
    image:
      "/assets/services/servicesImg1.png",
    items: [
      { name: "Logo & Branding", link: "/logo-branding" },
      { name: "Custom Logo Design" },
      { name: "Brand Identity Development" },
      { name: "Brand Guidelines & Strategy" },
      { name: "Marketing Collateral Design" },
    ],
    logo: "/assets/services/logo/serviceLogo1&2&9.png",
  },
  {
    title: "UI UX Design",
    description:
      "When it comes to UI/UX design, we create experiences that are simple to navigate. Our goal is to deliver user-friendly interactions that align with your brand and fulfill user needs.",
    image:
      "/assets/services/servicesImg2.png",
    items: [
      { name: "UI/UX Design", link: "/ui-ux-design" },
      { name: "Visual UI Design" },
      { name: "User Research" },
      { name: "Usability Testing" },
      { name: "Wireframe & Prototyping" },
      { name: "Interaction Design" },
    ],
    logo: "/assets/services/logo/serviceLogo1&2&9.png",
  },
  {
    title: "Web Development",
    description:
      "We create visually appealing and user-friendly websites that offer flawless navigation, optimized performance, and a strong connection to your brand’s identity.",
    image:
      "/assets/services/servicesImg3.png",
    items: [
      { name: "Web Design", link: "/web-design" },
      { name: "Responsive web design" },
      { name: "UI/UX Design", link: "/ui-ux-design" },
      { name: "E-commerce Website Design" },
      { name: "Figma Sites Development", link: "/figma-sites-development" },
      { name: "CMS Integration" },
    ],
    logo: "/assets/services/logo/serviceLogo3.png",
  },
  {
    title: "Mobile App Development",
    description:
      "We design mobile experiences that are simple to use and visually appealing. Our design ensures smoother performance and maximum value for users on every device.",
    image:
      "/assets/services/servicesImg4.png",
    items: [
      { name: "Mobile App Design", link: "/mobile-app-design" },
      { name: "App Concept & Strategy" },
      { name: "UI/UX Design for Mobile" },
      { name: "Interaction Design for Mobile" },
      { name: "Mobile Prototyping & Testing" },
      { name: "Responsive Design for All Devices" },
      { name: "App Screenshot Service", link: "/app-screenshot-service" },
    ],
    logo: "/assets/services/logo/serviceLogo4&5&7&8&10.png",
  },
  {
    title: "Webflow Web Development",
    description:
      "Build custom and responsive websites with our webflow design. We create designs that are visually aesthetic, easy to manage, and optimized for performance for a seamless user experience.",
    image:
      "/assets/services/servicesImg5.png",
    items: [
      { name: "Webflow Web Design", link: "/webflow-web-design" },
      { name: "Webflow CMS Integration" },
      { name: "Responsive web design" },
      { name: "E-commerce Webflow Development" },
      { name: "Webflow Maintenance & Support" },
      { name: "Wix to Webflow migration", link: "/wix-to-webflow-migration" },
      { name: "WordPress to Webflow CMS", link: "/wordpress-to-webflow-cms" }
    ],
    logo: "/assets/services/logo/serviceLogo4&5&7&8&10.png",
  },
  {
    title: "Framer Web Development",
    description:
      "At Design Monks, we create interactive, high-performance websites using Framer. We combine minimalist design with dynamic functionality to bring your ideas to life with speed and precision.",
    image:
      "/assets/services/servicesImg6.png",
    items: [
      { name: "Framer Design", link: "/framer-design" },
      { name: "Interactive Web Design" },
      { name: "Framer Prototyping" },
      { name: "Dynamic Content Integration" },
      { name: "Framer E-commerce Solutions" },
      { name: "WordPress to Framer CMS", link: "/wordpress-to-framer-cms" },
    ],
    logo: "/assets/services/logo/serviceLogo6.png",
  },
  {
    title: "SaaS Design & Development",
    description:
      "We focus on designing user-friendly and high-performing SaaS products that streamline workflows and enhance user satisfaction. We ensure a smooth journey from start to finish.",
    image:
      "/assets/services/servicesImg7.png",
    items: [
      { name: "SaaS Design", link: "/saas-product-design" },
      { name: "SaaS Product Strategy" },
      { name: "UI/UX Design for SaaS" },
      { name: "Dashboard & Admin Panel Design" },
      { name: "Usability Testing & Optimization" },
      { name: "Onboarding Experience Design" }
    ],
    logo: "/assets/services/logo/serviceLogo4&5&7&8&10.png",
  },
  {
    title: "AI Product Development",
    description:
      "Designing intuitive AI-driven products is one of our sweet spots. Our AI product designs integrate with user needs to enhance decision-making and provide valuable insights for a smarter experience.",
    image:
      "/assets/services/servicesImg8.png",
    items: [
      { name: "AI Product Design", link: "/ai-product-design" },
      { name: "AI Product Strategy" },
      { name: "Machine Learning Integration" },
      { name: "User Research for AI Solutions" },
      { name: "AI Interface Design" },
      { name: "Data Visualization & Dashboards" },
    ],
    logo: "/assets/services/logo/serviceLogo4&5&7&8&10.png",
  },
  {
    title: "Game Design & Development",
    description:
      "We create intuitive and engaging game interfaces that enhance gameplay experiences. Our focus is on optimizing game functions, dashboards, and in-game interactions to ensure smooth user experiences.",
    image:
      "/assets/services/servicesImg9.png",
    items: [
      { name: "Game UI/UX", link: "/game-ui-ux-design" },
      { name: "In-Game Dashboard Design" },
      { name: "Game Functionality Optimization" },
      { name: "Player Onboarding Design" }
    ],
    logo: "/assets/services/logo/serviceLogo1&2&9.png",
  },
  {
    title: "Shopify Development",
    description:
      "Designing powerful and user-friendly e-commerce stores on Shopify and Shopify Plus that drive conversions. We make it happen with eye-catching design and top-notch UX.",
    image:
      "/assets/services/servicesImg10.png",
    items: [
      { name: "Shopify Design", link: "/shopify-design" },
      { name: "Shopify Plus Store Setup" },
      { name: "Mobile-Optimized Design" },
      { name: "Shopify Store Customization" },
      { name: "Payment Gateway Integration" }
    ],
    logo: "/assets/services/logo/serviceLogo4&5&7&8&10.png",
  },
];

export default function Services() {
  return (
    <section className="relative min-h-screen bg-primary rounded-2xl px-6 py-10 md:px-15">
      <div className="space-y-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-lg"
          >
            {/* Image Section */}
            <div className="relative w-full h-48 md:h-90">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                {service.title}
              </h2>

              <p className="text-[#333333] my-8 font-body">
                {service.description}
              </p>

              {/* List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.items.map((item, i) => (
                  item?.link ? (
                    <Link
                      key={i}
                      href={item?.link}
                      className="flex items-center justify-between border-b border-[#E5E5E5] pb-2 text-[#0A0A0A] font-body group cursor-pointer"
                    >
                      <span>{item.name}</span>

                      <img
                        src="/right-arrow.svg"
                        alt="Right Arrow"
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>
                  ) : (
                    <div
                      key={i}
                      className="flex items-center justify-between border-b border-[#E5E5E5] pb-2 text-[#0A0A0A] font-body"
                    >
                      <span>{item.name}</span>
                    </div>
                  )
                ))}
              </div>
              <Image
                src={service.logo}
                alt={`${service.title} Logo`}
                width={200}
                height={70}
                className="mt-6 object-contain h-10 w-35 md:w-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

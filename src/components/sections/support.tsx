import Image from "next/image"
const topCards = [
  {
    title: "Unlimited Revisions",
    desc: "Your vision matters to us. We offer flexible revisions during the design phase to ensure the final product aligns perfectly with your goals and expectations.",
    icon: "/supportLogo_1.png",
  },
  {
    title: "Lifetime Support",
    desc: "Our partnership doesn’t end at launch. ABABIL provides continuous support and guidance to keep your website or application running smoothly.",
    icon: "/supportLogo_2.png",
  },
];

const bottomCards = [
  {
    title: "Personalised Plans",
    desc: "Every brand is unique. We create tailored web and mobile solutions designed specifically for your business goals and target audience.",
    icon: "/supportLogo_3.png",
  },
  {
    title: "Scalable Development",
    desc: "Our development approach focuses on performance, security, and scalability — ensuring your product can grow with your business.",
    icon: "/supportLogo_4.png",
  },
  {
    title: "24/7 Support",
    desc: "Our team stays connected with quick responses, clear communication, and reliable support whenever you need it.",
    icon: "/supportLogo_5.png",
  },
];
const Support = () => {
  return (
    <section className="p-6 md:p-16 bg-[#0B3D2E] text-white">

      <span className="text-xs font-bold tracking-widest">
        WHY CHOOSE US
      </span>

      <h2 className="mt-4 text-2xl lm:text-3xl sm:text-4xl md:text-5xl font-black max-w-2xl">
        WE DESIGN & BUILD FOR THE FUTURE TO DRIVE TODAY’S SUCCESS
      </h2>

      <div className="py-20 flex justify-center items-center">
        
        {/* MAIN WRAPPER */}
        <div className="relative w-full max-w-6xl md:h-200 flex flex-col justify-center items-center gap-6 md:gap-0">

          {/* 🔼 Top Cards */}
          <div className="md:absolute md:top-23 lp:top-22 lg:top-9 xl:top-12 w-full flex flex-col md:flex-row gap-6">
            {topCards.map((card, i) => (
              <div key={i} className="flex-1 bg-white/10 backdrop-blur-md p-6 rounded-xl md:h-56 lp:h-auto lg:h-60 xl:h-auto">
                <Image src={card.icon} width={50} height={50} alt={card.title} className="mb-4 h-10 lp:h-12"/>
                <p className="lg:text-xl xl:text-2xl font-bold">{card.title}</p>
                <p className="mt-3 opacity-80 text-[13px] lp:text-sm xl:text-base">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* 🔽 Bottom Cards */}
          <div className="md:absolute md:-bottom-1 lp:bottom-10 lg:bottom-5 xl:bottom-5 w-full flex flex-col md:flex-row gap-6">
            {bottomCards.map((card, i) => (
              <div key={i} className="flex-1 bg-white/10 backdrop-blur-md p-7 rounded-xl md:h-80 lp:h-auto lg:h-64">
                <Image src={card.icon} width={50} height={50} alt={card.title} className="mb-4 h-10 lp:h-12"/>
                <p className="lg:text-xl xl:text-2xl font-bold">{card.title}</p>
                <p className="mt-3 opacity-80 text-[13px] lp:text-sm xl:text-base">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <Image
            src="/assets/chooseUsDesign.png"
            width={700}
            height={500}
            alt="Choose Us"
            className="opacity-80 w-62.2 md:w-120 lp:w-150 lg:w-175 h-auto hidden md:block"
          />

        </div>
      </div>
    </section>
  )
}

export default Support
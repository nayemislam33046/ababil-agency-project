import Image from "next/image";
import { PenTool, Code2, CheckSquare, TrendingUp } from "lucide-react";
import aboutVideo from '../../assets/about-video.png'

const About = () => {
  const aboutContent = [
    {
      title: "Design",
      description: "We craft intuitive, user-centered digital experiences that combine strategic thinking with modern aesthetics.",
      icon: '/design.svg',
    },
    {
      title: "Development",
      description: "We build scalable, secure, and high-performance web and mobile applications using modern technologies.",
      icon: '/development.svg',
    },
    {
      title: "Testing & QA",
      description: "We ensure your product launches flawlessly with rigorous testing and quality assurance processes.",
      icon: '/TQA.svg',
    },
    {
      title: "Growth Support",
      description: "We keep your product secure, optimized, and running smoothly so it scales without interruption.",
      icon: '/GrowthSupport.svg',
    }
  ]
  return (
    <section className="bg-[#f3f3f3] rounded-2xl px-10 lg:px-7 xl:px-16 m-5 py-14">
      <p className="text-yellow-500 text-sm font-semibold mb-3">
        ABOUT US
      </p>
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT IMAGE */}
        <div className="relative">
          <div className="-rotate-6 overflow-hidden rounded-xl">
            <Image
              src={aboutVideo}
              alt="about"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="grid sm:grid-cols-2 gap-8 py-2">
          {aboutContent.map((item, index) => (
            <div key={index}>
              {/* ITEM */}
              <div className="flex items-start gap-4">
                <Image src={item.icon} width={44} height={44} alt={item.title} />

                <div>
                  <p className="font-semibold text-lg">{item.title}</p>
                  <p className="text-gray text-[12px] lg:text-[13px] xl:text-sm lm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default About;
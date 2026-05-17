import Image from 'next/image';
import Link from 'next/link';

const team = [
  {
    name: "Md. Sagor Yeasin",
    role: "CEO & Co-founder",
    image: "/assets/about/yasin.png",
    large: true,
  },
  {
    name: "Abdullah Al Fahad",
    role: "COO & Co-founder",
    image: "/assets/about/fahad.png",
    large: true,
  },
  {
    name: "Elias Hosen",
    role: "SEO & Social media manager",
    image: "/assets/about/eliyas.png",
    large: false,
  },
  {
    name: "Nayem Islam",
    role: "Frontend Developer",
    image: "/assets/about/nayem.png",
    large: false,
  },
  {
    name: "Md. Shahjalal",
    role: "Backend Developer",
    image: "/assets/about/shahjalal.png",
    large: false,
  },
];

export default function TeamSection() {
  return (
    <section className="pb-10 px-6 md:px-12 lg:px-16">
      <div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {team.filter(m => m.large).map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.filter(m => !m.large).map((member, idx) => (
              <TeamCard key={idx} member={member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member }: { member: any }) {
  return (
    <div className="flex flex-col items-center justify-center group w-full">
      <div className="relative w-full aspect-4/5 rounded-4xl overflow-hidden mb-6">
        <Image
          src={member.image}
          alt={member.name}
          fill
          priority={member.large}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

      </div>

      {/* Info Section */}
      <div className="text-center">
        <h4 className="text-xl font-bold text-gray-900 leading-tight">{member.name}</h4>
        <p className="text-gray-500 text-sm mt-1 mb-4">{member.role}</p>

        {/* Lucide Icons with subtle styling */}
        <div className="flex justify-center gap-3">
          <SocialIcon Icon={"/linkedin_icon.svg"} link={"https://linkedin.com"} />
          <SocialIcon Icon={"/facebook_icon.svg"} link={"https://facebook.com"} />
          <SocialIcon Icon={"/x_icon.svg"} link={"https://x.com"} />
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ Icon, link }: { Icon: any, link: string }) {
  return (
    <Link
      href={link}
      className="p-2.5 border border-gray-100 rounded-xl hover:bg-gray-200 hover:text-white transition-all group/icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={Icon} alt='icons' />
    </Link>
  );
}
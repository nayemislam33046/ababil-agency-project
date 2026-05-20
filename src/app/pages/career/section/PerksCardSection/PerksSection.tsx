import { 
  Laptop, 
  Gift, 
  CalendarCheck, 
  Wifi, 
  BriefcaseMedical, 
  Sparkles, 
  TrendingUp, 
  Megaphone, 
  CircleDollarSign 
} from 'lucide-react';

const perksData = [
  {
    icon: "laptop.png",
    title: "Remote Work = Freedom",
    description: "Stop being worried about missing your bus to the office, we’ve been remote since day one."
  },
  {
    icon: "gift.png",
    title: "Two Festival Bonuses",
    description: "Twice the celebrations, twice the bonuses.You'll get 2 yearly bonuses each worth 50% of your gross salary."
  },
  {
    icon: "calenderCheck.png",
    title: "Generous Leave Benefits",
    description: "Annual breaks, sick days, and marriage leaves, our leave policies always let you balance your life."
  },
  {
    icon: "wifi.png",
    title: "Device & Internet Allowance",
    description: "Design Monks helps employees stay productive with financial support for their devices and internet needs."
  },
  {
    icon: "BriefcaseMedical.png",
    title: "Health & Wellness Allowance",
    description: "We prioritize your health and your family's. Our medical allowance never leaves you alone at your worst time."
  },
  {
    icon: "Sparkles.png",
    title: "Performance Bonuses",
    description: "Your hard work never goes unnoticed at Design Monks. You'll earn bonuses for outstanding contributions."
  },
  {
    icon: "TrendingUp.png",
    title: "Mentorship & Personal Growth",
    description: "Instead of being the Boss, we prefer to be your mentors. We help you bring out your potential through expert guidance."
  },
  {
    icon: "mic.png",
    title: "Employee Referral Bonus",
    description: "We encourage our employees to introduce top talent and get rewarded for strengthening our talented team."
  },
  {
    icon: "DollerBag.png",
    title: "Emergency Loan Facilities",
    description: "Our employees can receive emergency loan facilities with an easy EMI system to face unexpected situations."
  }
];

const PerksSection = () =>{
  return (
    <section className="bg-[#fcfdfd] py-16 px-4 md:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-sm font-bold text-primary mb-3 tracking-wide">
            Employee Benefits
          </p>
          <h2 className="text-4xl md:text-5xl text-primary tracking-tight">
            Perks of being a Ababil!
          </h2>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {perksData.map((perk, index) => {
    const Icon = perk.icon;
    return (
      <div 
        key={index} 
        className="bg-[#063D30] bg-[linear-gradient(342.59deg,#0DB760_0%,rgba(10,10,10,0.6)_100%)] shadow-[inset_0_8px_24px_rgba(255,255,255,0.09)] rounded-4xl p-6 lm:p-8 text-white transition-transform hover:scale-[1.02] duration-300"
      >
        <div className="mb-6">
          <img src={`/assets/career/icon/${perk.icon}`} alt={perk.title} />
        </div>
        <p className="text-xl font-semibold mb-5 leading-tight">
          {perk.title}
        </p>
        <p className="text-sm leading-relaxed text-white">
          {perk.description}
        </p>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
}

export default PerksSection;
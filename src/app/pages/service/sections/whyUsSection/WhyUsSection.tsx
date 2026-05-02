import Image from 'next/image';
import { MoveRight } from 'lucide-react'; // Optional: for the arrow icon

const WhyUsSection = () => {
  return (
    <section className="px-6 md:px-14 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Container - Forced to top on mobile using order-1 */}
        <div className="order-1 md:order-2 relative w-full h-64 md:h-96">
          <div className="overflow-hidden rounded-3xl h-full w-full">
            <Image
              src="/assets/dmvid.png" 
              alt="Team member at Ababil workspace"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>

        {/* Text Content - Order-2 on mobile, Order-1 on desktop */}
        <div className="order-2 md:order-1 space-y-6 text-left">
          <span className="text-sm mb-3 font-body tracking-widest text-primary uppercase">
            Why Us
          </span>
          
          <h2 className="text-4xl sm:text-3xl lg:text-4xl text-primary leading-tight">
            Because Our Premium Design Always Pays for Itself
          </h2>
          
          <div className="space-y-4 text-[#333333] text-sm lg:text-base xl:text-lg leading-relaxed max-w-xl">
            <p>
              Great products are built by teams that move fast and think clearly. 
              Our approach is designed exactly for that.
            </p>
            <p>
              We combine strategy, design, and execution into a single, focused system 
              that reduces friction and increases output quality. You don't just get 
              designs, you get momentum. Also, that momentum comes 20x faster and 
              at about half the cost of traditional agencies.
            </p>
          </div>

          <div className="pt-4">
            <button className="flex items-center gap-2 bg-secondary hover:bg-[#facc15] text-primary border border-primary font-bold py-3 px-6 xl:py-4 xl:px-8 rounded-full transition-all duration-300">
              Start Project
              <MoveRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyUsSection;
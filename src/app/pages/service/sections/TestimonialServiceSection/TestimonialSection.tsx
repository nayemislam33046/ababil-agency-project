"use client";
import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Autoplay } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';

const testimonials = [
  {
    id: 1,
    name: "Sebastian",
    role: "Founder @ SalesGo",
    text: "We started with an MVP and needed a polished product. Ababil delivered with great communication, high-quality work, and quick iterations until everything felt right. Truly grateful and highly recommended.",
    image: "/assets/services/testimonials/profile/testimonialsProfile1.png",
    logo: "/assets/services/testimonials/logo/testimonialsLogo1.png",
    rotate: "rotate-0"
  },
  {
    id: 2,
    name: "Jenna Carvalho",
    role: "Principal @ Guardian Estate Company",
    text: "The team’s expertise in the MERN stack was evident from day one. They took our vision and turned it into a sleek, user-friendly platform that exceeded our expectations. The attention to detail and commitment to quality is unmatched.",
    image: "/assets/services/testimonials/profile/testimonialsProfile2.png",
    logo: "/assets/services/testimonials/logo/testimonialsLogo2.png",
    rotate: "-rotate-2"
  },
  {
    id: 3,
    name: "Arvin",
    role: "Co Founder @ Medease",
    text: "Their ability to blend clean, minimalist design with powerful performance is rare. Our page load speeds dropped significantly while our conversion rates climbed.",
    image: "/assets/services/testimonials/profile/testimonialsProfile3.png",
    logo: "/assets/services/testimonials/logo/testimonialsLogo3.png",
    rotate: "rotate-3"
  },
  {
    id: 4,
    name: "Ted Nash",
    role: "Founder & CEO @ Yenex",
    text: "Working with this team was a breeze. They don't just write code; they provide architectural solutions that scale. The MERN stack implementation was flawless.",
    image: "/assets/services/testimonials/profile/testimonialsProfile4.png",
    logo: "/assets/services/testimonials/logo/testimonialsLogo4.png",
    rotate: "-rotate-3"
  },
  {
    id: 5,
    name: "Moshiur Rahman Radif",
    role: "COO @ Ontik Technologies",
    text: "The final product was exactly what we imagined. The dark aesthetic and cinematic lighting effects in the UI are stunning. Highly recommend for high-end projects.",
    image: "/assets/services/testimonials/profile/testimonialsProfile5.png",
    logo: "/assets/services/testimonials/logo/testimonialsLogo5.png",
    rotate: "rotate-3"
  }
];

const TestimonialSection = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section className="bg-[#063528] py-15 lm:py-20 px-6 md:px-12 min-h-screen flex flex-col items-center justify-center overflow-hidden rounded-4xl">
      {/* Header Section */}
      <div className="text-center mb-12">
        <span className="text-white uppercase tracking-widest text-sm font-medium">Client Stories</span>
        <h2 className="text-white text-4xl md:text-6xl font-serif font-bold mt-4 leading-tight">
          Our Clients Love <br /> Recommend us
        </h2>
      </div>

      {/* Swiper Container Wrapper */}
      <div className="w-full max-w-5xl relative px-4 md:px-12">

        {/* Custom Navigation Arrows */}
        <button
          ref={prevRef}
          className="absolute -left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-100 text-primary p-2 lm:p-3 text-sm lm:text-base rounded-full shadow-lg transition-all border border-primary"
          aria-label="Previous slide"
        >
          <ArrowLeft size={24} />
        </button>

        <button
          ref={nextRef}
          className="absolute -right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 bg-white hover:bg-gray-100 text-primary p-2 lm:p-3 text-sm lm:text-base rounded-full shadow-lg transition-all border border-primary"
          aria-label="Next slide"
        >
          <ArrowRight size={24} />
        </button>

        <Swiper
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards, Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          cardsEffect={{
            slideShadows: true,
            rotate: true,
            perSlideRotate: 2,
            perSlideOffset: 8,
          }}
          className="mySwiper overflow-visible! md:max-w-4xl"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id} className="rounded-[40px] bg-white shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row p-6 md:p-10 items-center gap-10">

                {/* Left: Image */}
                <div className="w-full md:w-[35%] aspect-4/5 relative rounded-3xl overflow-hidden shadow-md">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Right: Content */}
                <div className="w-full md:w-[60%] flex flex-col justify-center relative">
                  <div className="text-6xl font-serif text-gray-900 leading-none h-10 select-none">
                    <img src="/assets/services/testimonials/logo/qoutation.png" alt="Quote" />
                  </div>

                  <p className="text-[#2D2D2D] lp:text-lg leading-relaxed my-2 font-medium">
                    {item.text}
                  </p>

                  <div className="text-6xl ml-auto h-10 text-right select-none">
                    <img src="/assets/services/testimonials/logo/qoutation.png" alt="Quote" />
                  </div>

                  <div className="my-8 pt-8 flex items-center justify-between gap-2">
                    <div>
                      <h4 className="lm:text-xl font-bold text-[#0A0A0A]">{item.name}</h4>
                      <p className="text-gray text-xs lm:text-sm font-medium">{item.role}</p>
                    </div>
                    {/* Placeholder for company logo like in screen14.jpg */}
                    <div className={`h-8 w-24 ${item.rotate}`}>
                      <Image
                        src={item.logo}
                        alt={`${item.name}'s company logo`}
                        width={100}
                        height={100}
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* Making sure the stacked cards are visible on the sides */
        .swiper-cards {
          overflow: visible !important;
        }
        .swiper-slide-shadow {
          background: rgba(0,0,0,0.03) !important;
        }
        /* Hide default swiper buttons if they appear */
        .swiper-button-next, .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </section>
  );
}

export default TestimonialSection;
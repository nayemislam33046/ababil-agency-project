import Image from 'next/image'
import Link from 'next/link'

const Testimonials = () => {
    return (
        <section className="p-6 md:p-16 m-5 bg-white rounded-xl">
            <div className="flex flex-col items-center text-center gap-6 pb-10">
                <span className=" font-bold text-primary">
                    TESTIMONIALS
                </span>
                <h2 className="text-2xl md:text-5xl font-heading text-primary font-black max-w-2xl">
                    WHAT OUR CLIENTS SAY
                </h2>
            </div>

            <div className='flex justify-center items-center gap-10 flex-col sm:flex-row'>
                {/* left side */}
                <div className='flex flex-col gap-6 max-w-75 md:max-w-xs text-center sm:text-left'>
                    <span className='font-damion text-primary '>StyleStack</span>
                    <p className='text-primary sm:text-sm md:text-base font-inter'>"Damas elevated our brand far beyond expectations. The campaign they crafted felt authentic, fresh, and exactly what our audience needed."</p>
                    <Link href="#" className="text-primary font-bold">
                        Start a Project
                        <Image src="/arrow_icon.svg" alt="arrow" width={20} height={20} className="inline-block ml-2" />
                    </Link>
                </div>
                {/* right side */}
                <div className='hover:-rotate-5 transition-transform duration-300'>
                    <Image src="/assets/testiMonials.png" alt="testimonial" width={500} height={500} className="object-cover rounded-lg" priority />
                </div>
            </div>
        </section>
    )
}

export default Testimonials
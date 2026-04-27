import LogoMarquee from '@/components/sections/Logos/logoMarquee'
import React from 'react'

const ContactContent = () => {
    return (
        <section className="w-full min-h-300 lm:min-h-272 md:min-h-210 flex items-end justify-center rounded-4xl bg-primary py-15 relative z-0">
            <div className="text-center w-full">
                <LogoMarquee />

                <div className="">
                    <p className="text-xs lm:text-sm tracking-widest font-semibold font-inter text-white mb-2">
                        CONNECT NOW
                    </p>

                    <h2 className="text-xl lm:text-3xl md:text-5xl font-bold text-white mb-6">
                        Get in Touch Now for Business or <br /> Career Opportunities!
                    </h2>

                    <div className="flex justify-center gap-5 flex-col lm:flex-row lm:gap-10 ">
                        <div>
                            <p className="text-white text-wrap text-center">Project inquiries? <br className="lm:hidden"/> Let's Team Up</p>
                            <p className="underline text-white mt-1 text-sm lm:text-lg">hello@ababil.com</p>
                        </div>

                        <div>
                            <p className="text-white text-wrap text-center">Be a Ababil! Be a Part of <br className="lm:hidden"/> the Leading Team!</p>
                            <p className="underline text-white mt-1 text-sm lm:text-lg">career@ababil.com</p>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default ContactContent
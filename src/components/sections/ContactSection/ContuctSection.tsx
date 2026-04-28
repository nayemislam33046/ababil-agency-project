import Image from "next/image";
import Link from "next/link";
import Headline from "../Headlines/Headline";
import ContactForm from "./ContactForm";
type ContactSectionProps = {
  isContact?: boolean;
};
export default function ContactSection({ isContact }: ContactSectionProps) {

  return (
    <section className={`w-full flex justify-center items-center flex-col md:py-10 px-6 md:px-10 ${isContact ? "bg-transparent" : "bg-white"}`}>
      <div className={`w-full ${isContact ? "bg-white shadow border border-gray-300" : "bg-primary "} rounded-2xl p-5 lm:p-6 py-10 mt-10 md:p-10 text-white relative`}>
        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between">
            <div>
              {!isContact && <p className="text-xs text-[#1FB268] border border-[#1FB268] inline-block px-3 py-1 rounded-full mb-3">
                Clomos 5799 Consultation on us
              </p>}

              {isContact ? (
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-5">
                  Tell Us Your Amazing <br /> Project Here
                </h2>
              ) : (<div>
                <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
                  Enhance Your Brand <br />
                  Potential
                  <span className="font-playfair italic">At No Cost!</span>
                </h2>
              </div>)}


              <ul className={`text-sm space-y-2 ${isContact ? "text-primary" : "text-gray-200"}`}>
                <li className="flex items-center gap-1">
                  <Image src={`/${isContact ? "checkprimary" : "round-check"}.svg`} alt="Check" width={16} height={16} /> Expect a response from us within 24 hours
                </li>
                <li className="flex items-center gap-1">
                  <Image src={`/${isContact ? "checkprimary" : "round-check"}.svg`} alt="Check" width={16} height={16} /> We’re happy to sign an NDA upon request.
                </li>
                <li className="flex items-center gap-1">
                  <Image src={`/${isContact ? "checkprimary" : "round-check"}.svg`} alt="Check" width={16} height={16} /> Get access to a team of dedicated product specialists.
                </li>
              </ul>
            </div>

            {/* PROFILE CARD */}
            <div className="flex flex-col gap-4 mt-6">
              <div className="rounded-xl p-1">
                {isContact ? (<Image
                  src="/assets/dmvid.png"
                  alt="person"
                  width={320}
                  height={300}
                  className="rounded-lg object-cover"
                />) : (<Image
                  src="/assets/CEO_Fahad.png"
                  alt="person"
                  width={200}
                  height={180}
                  className="rounded-lg object-cover"
                />)}
              </div>

              {!isContact && <div>
                <h4 className="font-semibold text-lg">Abdullah Al Fahad</h4>
                <p className="text-sm text-[#A3A3A3] text-body mb-4">COO & Co-founder</p>
                <p className="mt-1 flex gap-1 text-body text-[#D4D4D4]">
                  <Image src="/whatsapp_icon.svg" alt="Phone" width={16} height={16} /> +1 (716) 503-6335
                </p>
                <Link href="#" className="text-secondary hover:underline font-bold cursor-pointer">
                  Book a Call Directly
                </Link>
              </div>}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <ContactForm isContact={isContact} />
        </div>
      </div>

      {/* message banner */}
      {!isContact && <Headline />}
    </section>
  );
}
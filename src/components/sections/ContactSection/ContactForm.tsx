"use client"
import { useState } from 'react'

export type ContactSectionProps = {
    isContact?: boolean;
};

type FormData = {
    name: string;
    email: string;
    whatsapp: string;
    budget: string;
    details: string;
};

const ContactForm = ({ isContact }: ContactSectionProps) => {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        whatsapp: "",
        budget: "",
        details: ""
    });

    const budgetOptions = [
        "Less than $5K",
        "$5K - $10K",
        "$10K - $20K",
        "$20K - $50K",
        "More than $50K",
    ];

    // handle input change
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // handle submit
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData); // 🔥 এখানে সব data object আকারে পাবা
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME */}
            <div>
                <label className={`font-body font-bold text-sm ${isContact ? "text-black" : "text-white"}`}>Full Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full mt-1 px-3 py-2 rounded-md outline-none ${isContact
                        ? "bg-gray-100 border border-gray-300 text-primary"
                        : "bg-white/10 border border-white/20 text-white"
                        }`}
                />
            </div>

            {/* EMAIL + WHATSAPP */}
            <div className="grid grid-cols-2 gap-3">
                <div>
                    <label className={`font-body font-bold text-sm ${isContact ? "text-black" : "text-white"}`}>Your Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="yourmail@mail.com"
                        className={`w-full mt-1 px-3 py-2 rounded-md outline-none ${isContact
                            ? "bg-gray-100 border border-gray-300 text-primary"
                            : "bg-white/10 border border-white/20 text-white"
                            }`}
                    />
                </div>

                <div>
                    <label className={`font-body font-bold text-sm ${isContact ? "text-black" : "text-white"}`}>Whatsapp Number</label>
                    <input
                        type="text"
                        name="whatsapp"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="123 1234567"
                        className={`w-full mt-1 px-3 py-2 rounded-md outline-none ${isContact
                            ? "bg-gray-100 border border-gray-300 text-primary"
                            : "bg-white/10 border border-white/20 text-white"
                            }`}
                    />
                </div>
            </div>

            {/* BUDGET */}
            <div>
                <label className={`font-body font-bold text-sm ${isContact ? "text-black" : "text-white"}`}>Project Budget</label>
                <div className="flex flex-wrap gap-2 mt-2">
                    {budgetOptions.map((item) => (
                        <button
                            aria-label={item}
                            type="button"
                            key={item}
                            onClick={() => setFormData({ ...formData, budget: item })}
                            className={`p-2 border rounded-md transition ${formData.budget === item
                                ? "bg-secondary text-primary border-secondary"
                                : "border-gray-400 text-gray-400"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            </div>

            {/* DETAILS */}
            <div>
                <label className={`font-body font-bold text-sm ${isContact ? "text-black" : "text-white"}`}>Project Details</label>
                <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={3}
                    placeholder="I want to redesign my website..."
                    className={`w-full mt-1 px-3 py-2 rounded-md outline-none ${isContact
                        ? "bg-gray-100 border border-gray-300 text-primary"
                        : "bg-white/10 border border-white/20 text-white"
                        }`}
                />
            </div>

            {/* BUTTON */}
            <button
                type="submit"
                aria-label="Book a Call"
                className="bg-secondary text-primary w-full md:w-auto px-8 py-2 rounded-full font-semibold"
            >
                Book a Call →
            </button>
        </form>
    )
}

export default ContactForm;
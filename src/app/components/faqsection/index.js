"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

const faqs = [
    {
        question: "How do I know which treatment is right for me?",
        answer:
            "Every patient begins with a consultation where the doctor evaluates your skin or hair concerns and recommends a personalized treatment plan.",
    },
    {
        question: "Are the treatments safe?",
        answer:
            "Yes, all treatments are performed under expert supervision using clinically approved protocols.",
    },
    {
        question: "How long does it take to see results?",
        answer:
            "Results vary depending on treatment type, but many patients begin seeing improvements within a few sessions.",
    },
    {
        question: "Do treatments require downtime?",
        answer:
            "Some treatments have minimal downtime while others allow immediate return to daily routine.",
    },
    {
        question: "How do I book a consultation?",
        answer:
            "You can book directly through our clinic phone, WhatsApp, or online appointment system.",
    },
];

export default function FAQSection() {
    const [active, setActive] = useState(0);

    return (
        <section className="py-8">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    {/* Left Content */}
                    <div>
                        <h2 className="font-gideon text-3xl md:text-5xl leading-tight max-w-xl font-semibold">
                            Have Questions Before Your Consultation?
                        </h2>

                        <p className="mt-8 text-lg leading-relaxed text-black max-w-lg">
                            Our team will help guide you toward the right treatment for your skin
                            and hair concerns with a doctor-led evaluation.
                        </p>

                        <div className="mt-10 space-y-8 text-black">
                            <div>
                                <h4 className="font-semibold text-xl mb-2">Visit Us</h4>
                                <p>
                                    B/103 Manu Apartments, Seven Bungalows, Versova,
                                    Andheri West, Mumbai 400061
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-xl mb-2">Opening Hours</h4>
                                <p>Mon – Fri: 12 PM – 8 PM</p>
                                <p>Sat: 12 PM – 6 PM</p>
                            </div>
                        </div>

                        <button className="theme-button mt-12 px-8 py-4 flex items-center gap-3">
                            Book a consultation
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    {/* Right FAQ */}
                    <div className="bg-[#F6F6F6] rounded-3xl p-6 space-y-5">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl px-8 py-6 cursor-pointer transition-all"
                                onClick={() => setActive(active === index ? null : index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-xl font-medium">{faq.question}</h3>
                                    {active === index ? (
                                        <ChevronUp size={24} />
                                    ) : (
                                        <ChevronDown size={24} />
                                    )}
                                </div>

                                {active === index && (
                                    <p className="mt-4 text-black/70 leading-relaxed max-w-2xl">
                                        {faq.answer}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
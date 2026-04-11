"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { useConsultation } from "../../context/ConsultationContext";

const faqs = [
    {
        question: "What treatments does Maven Esthetics offer? ",
        answer:
            "Laser skin rejuvenation, acne and scar treatment, Botox, fillers, chemical peels, PRP hair restoration, pigmentation correction, and body contouring.",
    },
    {
        question: "Is laser treatment safe for Indian skin? ",
        answer:
            "Yes, we use US FDA-approved lasers specifically calibrated for Indian skin tones.",
    },
    {
        question: "How much do treatments cost?",
        answer:
            "Costs vary by procedure and sessions needed; book a consultation for a personalized quote with flexible EMI options.",
    },
    {
        question: "How many sessions will I need? ",
        answer:
            "Most concerns like acne scars or pigmentation show visible results in 3 to 6 sessions depending on severity.",
    },
    {
        question: "Is there downtime after procedures? ",
        answer:
            "Most treatments have minimal to no downtime, with mild redness lasting 24 to 48 hours at most.",
    },
    {
        question: "Do I need a consultation before starting?",
        answer:
            "Yes, every treatment begins with a dermatologist consultation to assess your skin and recommend the right plan.",
    },
    {
        question: "What is the best treatment for pigmentation? ",
        answer:
            "It depends on the type; we offer chemical peels, Q-switched laser, and combination therapies based on diagnosis.",
    },
    {
        question: "What brands and technology do you use? ",
        answer:
            "All our equipment and injectables are US FDA-approved and sourced from authorized distributors.",
    },
    {
        question: "Are your dermatologists qualified? ",
        answer:
            "Our team includes certified dermatologists with advanced training in clinical and cosmetic dermatology.",
    },
    {
        question: "Where is the clinic located? ",
        answer:
            "Maven Esthetics is in Lokhandwala, Andheri West, Mumbai, open six days a week with evening slots available",
    }
];

export default function FAQSection() {
    const [active, setActive] = useState(0);
    const { open } = useConsultation();

    return (
        <section className="py-8">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-8 items-start">

                    {/* Left Content  */}
                    <div className="lg:sticky lg:top-8 lg:self-start">
                        <h2 className="font-garamond text-3xl md:text-5xl leading-tight max-w-xl font-semibold">
                            Have Questions Before Your Consultation?
                        </h2>

                        <p className="mt-8 text-lg leading-relaxed text-black max-w-lg">
                            Our team will help guide you toward the right treatment for your skin
                            and hair concerns with a doctor-led evaluation.
                        </p>

                        <div className="mt-10 space-y-8 text-black">
                            <div>
                                <h4 className="font-semibold text-base md:text-x text-center md:text-left mb-2">Visit Us</h4>
                                <p>
                                    B/103 Manu Apartments, Seven Bungalows, Versova,
                                    Andheri West, Mumbai 400061
                                </p>
                            </div>

                            <div className="text-center md:text-left">
                                <h4 className="font-semibold text-base md:text-xl text-center md:text-left mb-2">Opening Hours</h4>
                                <p>Mon – Fri: 12 PM – 8 PM</p>
                                <p>Sat: 12 PM – 6 PM</p>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-self-start">
                            <button onClick={open} className="theme-button mt-6 md:mt-12 px-8 py-4 flex items-center gap-3">
                                Book a consultation
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Right FAQ */}
                    <div className="md:bg-[#F6F6F6] rounded-3xl md:p-6 space-y-5">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white md:rounded-2xl md:px-8 md:py-6 cursor-pointer transition-all border-b border-purple/20 pb-2"
                                onClick={() => setActive(active === index ? null : index)}
                            >
                                <div className="flex justify-between items-center">
                                    <h3 className="text-base md:text-lg font-semibold">{faq.question}</h3>
                                    {active === index ? (
                                        <ChevronUp size={24} />
                                    ) : (
                                        <ChevronDown size={24} />
                                    )}
                                </div>

                                {active === index && (
                                    <p className="text-sm md:text-base mt-4 text-black leading-relaxed md:max-w-2xl">
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
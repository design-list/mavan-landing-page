"use client";

import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, AlertCircle, Loader2, X, ChevronDown } from "lucide-react";

const services = [
    "Skin Rejuvenation",
    "Wrinkle Reduction",
    "Exfoliating Peels",
    "Scar Reduction",
    "Micro Needling Radio Frequency (MNRF)",
    "Post-Burn Scars",
    "Migraine Treatment",
    "Undereye Hollowness",
    "Non-Invasive Rhinoplasty",
    "Skin Whitening",
    "Face Contouring",
    "High Cheek Lift",
    "Chin Contouring",
    "Thread Lift",
    "Laser Tattoo Removal",
    "Skin Tightening",
    "Hand Rejuvenation",
    "Forehead Smoothening",
    "Gummy Smile Reduction",
    "Laser Hair Reduction",
    "Brow Lift"
];

const inputClass =
    "w-full bg-white/10 border border-white/20 rounded-lg md:rounded-xl px-2 py-1.5 md:px-4 md:py-3 text-white placeholder:text-white/40 font-raleway text-sm focus:outline-none focus:border-golden focus:bg-white/15 transition-all duration-300";

export default function BookConsultationModal({ isOpen, onClose }) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const [status, setStatus] = useState("idle"); // idle | loading | success | error
    const [errorMsg, setErrorMsg] = useState("");

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isOpen]);

    // Close on Escape key
    useEffect(() => {
        if (!isOpen) return;
        function handleKey(e) {
            if (e.key === "Escape") onClose();
        }
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [isOpen, onClose]);

    function handleChange(e) {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong.");
            }

            setStatus("success");
            setForm({ name: "", email: "", phone: "", service: "", message: "" });
        } catch (err) {
            setStatus("error");
            setErrorMsg(err.message);
        }
    }

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Panel */}
            <div className="relative z-10 w-full max-w-2xl max-h-[90vh] bg-darkpurple rounded-3xl border border-white/10 shadow-2xl">
                {/* Decorative blobs */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-purple/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-golden/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-20 w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                    aria-label="Close"
                >
                    <X size={18} />
                </button>

                <div className="relative z-10 p-4 md:p-10">
                    {/* Header */}
                    <div className="text-center mb-4 md:mb-8">
                        <p className="font-raleway text-golden text-xs tracking-widest uppercase mb-2">
                            Let's Connect
                        </p>
                        <h2 className="font-garamond text-2xl md:text-4xl text-white leading-tight">
                            Book a{" "}
                            <span className="bg-text-gradient bg-clip-text text-transparent font-bold">
                                Consultation
                            </span>
                        </h2>
                        <p className="font-raleway text-white/60 mt-3 text-xs md:text-sm max-w-sm mx-auto">
                            Share a few details and our team will reach out to schedule your
                            personalised skin consultation.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Full Name — required ✅ unchanged */}
                            <div className="flex flex-col gap-1.5">
                                <label className="font-raleway text-white/70 text-[10px] md:text-xs uppercase tracking-wider">
                                    Full Name <span className="text-golden">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Jane Doe"
                                    required
                                    className={inputClass}
                                />
                            </div>

                            {/* Email — now optional ✅ */}
                            <div className="flex flex-col gap-1.5">
                                <label className="font-raleway text-white/70 text-[10px] md:text-xs uppercase tracking-wider">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="jane@example.com"
                                    className={inputClass}  /* ✅ removed required */
                                />
                            </div>

                            {/* Phone — now required ✅ */}
                            <div className="flex flex-col gap-1.5">
                                <label className="font-raleway text-white/70 text-[10px] md:text-xs uppercase tracking-wider">
                                    Phone <span className="text-golden">*</span>  {/* ✅ added * */}
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+91 98765 43210"
                                    required  /* ✅ added required */
                                    className={inputClass}
                                />
                            </div>

                            {/* Service — now required ✅ */}
                            <div className="flex flex-col gap-1.5">
                                <label className="font-raleway text-white/70 text-[10px] md:text-xs uppercase tracking-wider">
                                    Service of Interest <span className="text-golden">*</span>
                                </label>

                                {/* ✅ Wrapper makes custom arrow possible */}
                                <div className="relative">
                                    <select
                                        name="service"
                                        value={form.service}
                                        onChange={handleChange}
                                        required
                                        className={`${inputClass} appearance-none cursor-pointer pr-10`} /* ✅ pr-10 stops text overlapping arrow */
                                    >
                                        <option value="" disabled className="bg-darkpurple text-white">
                                            Select a treatment
                                        </option>
                                        {services.map((s) => (
                                            <option key={s} value={s} className="bg-darkpurple text-white">
                                                {s}
                                            </option>
                                        ))}
                                    </select>

                                    {/* ✅ Custom chevron — pointer-events-none so clicks pass through to select */}
                                    <ChevronDown
                                        size={16}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 pointer-events-none"
                                    />
                                </div>
                            </div>

                            {/* Message — now optional ✅ */}
                            <div className="flex flex-col gap-1.5 md:col-span-2">
                                <label className="font-raleway text-white/70 text-[10px] md:text-xs uppercase tracking-wider">
                                    Your Concern  {/* ✅ removed * */}
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={4}
                                    placeholder="Tell us a little about your skin concern or what you're hoping to address..."
                                    className={`${inputClass} resize-none`}  /* ✅ removed required */
                                />
                            </div>
                        </div>

                        {/* Status Messages */}
                        {status === "success" && (
                            <div className="mt-6 flex items-center gap-3 bg-green-500/10 border border-green-400/30 rounded-xl px-4 py-3">
                                <CheckCircle size={18} className="text-green-400 shrink-0" />
                                <p className="font-raleway text-green-300 text-sm">
                                    Thank you! We'll be in touch shortly.
                                </p>
                            </div>
                        )}

                        {status === "error" && (
                            <div className="mt-6 flex items-center gap-3 bg-red-500/10 border border-red-400/30 rounded-xl px-4 py-3">
                                <AlertCircle size={18} className="text-red-400 shrink-0" />
                                <p className="font-raleway text-red-300 text-sm">{errorMsg}</p>
                            </div>
                        )}

                        {/* Submit */}
                        <div className="mt-8 flex justify-center">
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="theme-button inline-flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {status === "loading" ? (
                                    <>
                                        <Loader2 size={16} className="animate-spin" />
                                        Sending…
                                    </>
                                ) : (
                                    <>
                                        Book Consultation
                                        <ArrowRight size={16} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

"use client";

import Image from "next/image";
import Link from "next/link";

import Phone from "@/icons/phone.svg";
import WhatsApp from "@/icons/whatsapp.svg";
import Calendar from "@/icons/calendar.svg";
import { useConsultation } from "../../context/ConsultationContext";

export default function FloatingPanel() {
    const { open } = useConsultation();

    return (
        <div className="fixed right-0 top-[95%] md:top-1/2 -translate-y-1/2 z-20 bg-darkpurple md:rounded-tl-2xl md:rounded-bl-2xl overflow-hidden w-full md:w-auto">
            <div className="flex flex-row md:flex-col justify-around gap-4 text-white px-3 py-3">
                <Link href={"tel:+917777056250"} className="md:border-b border-golden flex flex-col items-center gap-2">
                    <Image src={Phone} alt="Phone Icon" className=" w-5 md:w-7 h-5 md:h-7" />
                    <span className="text-xs text-golden md:pb-3">Call Now</span>
                </Link>

                <Link href={"https://wa.me/917777056250"} target="_blank" className="md:border-b border-golden flex flex-col items-center gap-2">
                    <Image src={WhatsApp} alt="WhatsApp Icon" className="w-5 md:w-7 h-5 md:h-7" />
                    <span className="text-xs text-golden md:pb-3">WhatsApp</span>
                </Link>

                <button
                    onClick={open}
                    className="flex flex-col border-golden items-center gap-2 cursor-pointer"
                >
                    <Image src={Calendar} alt="Calendar Icon" className="w-5 md:w-7 h-5 md:h-7" />
                    <span className="text-xs text-golden pd:b-3">Book Now</span>
                </button>
            </div>
        </div>
    );
}

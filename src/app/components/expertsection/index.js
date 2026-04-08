"use client";

import Image from "next/image";
import Slider from "react-slick";
import SkinCareBg from "@/img/skin-care-bg.png";
import SkinCareBgMob from "@/img/purple-bg-mobile.png";
import { useConsultation } from "../../context/ConsultationContext";

const galleryImages = [
    { id: 1, src: "/img/expert1.png", alt: "Dr. Geoffrey with client" },
    { id: 2, src: "/img/expert2.png", alt: "Mr India World" },
    { id: 3, src: "/img/expert3.png", alt: "Miss India Runner Up" },
    { id: 4, src: "/img/expert4.png", alt: "Femina Miss India" },
    { id: 5, src: "/img/expert5.png", alt: "Miss India Finalist" },
    { id: 1, src: "/img/expert1.png", alt: "Dr. Geoffrey with client" },
    { id: 2, src: "/img/expert2.png", alt: "Mr India World" },
    { id: 3, src: "/img/expert3.png", alt: "Miss India Runner Up" },
    { id: 4, src: "/img/expert4.png", alt: "Femina Miss India" },
    { id: 5, src: "/img/expert5.png", alt: "Miss India Finalist" }
];

export default function ExpertSection() {
    const { open } = useConsultation();
    const settings = {
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        pauseOnHover: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "40px",
                },
            },
        ],
    };

    return (
        <section className="relative py-20 md:py-40">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={SkinCareBg}
                    alt="Background" fill
                    className="object-fill hidden md:block"
                    priority
                />
                <Image
                    src={SkinCareBgMob}
                    alt="Background"
                    fill
                    className="object-fill block md:hidden"
                    priority
                />
            </div>

            <div className="container mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="font-garamond text-2xl md:text-5xl text-white mb-4 leading-tight">
                        Where beauty meets{" "}
                        <span className="inline-block bg-text-gradient bg-clip-text text-transparent font-black">Expert</span> Dermatology
                    </h2>

                    <p className="font-raleway text-white md:max-w-3xl mx-auto text-base  md:text-lg leading-relaxed">
                        Trusted by leading pageants and industry icons, Dr. Geoffrey Vaz helps
                        prepare contestants and professionals for the global stage.
                    </p>
                </div>

                {/* Slider */}
                <Slider {...settings}>
                    {galleryImages.map((img) => (
                        <div key={img.id} className="px-3">
                            <div className="relative w-full h-[350px] md:h-[420px] rounded-[120px] overflow-hidden border border-white/10 group">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* CTA */}
                <div className="flex justify-center mt-12">
                    <button onClick={open} className="theme-button">
                        Book a consultation →
                    </button>
                </div>
            </div>
        </section>
    );
}
"use client";

import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const treatmentData = {
    Esthetic: [
        { image: "/img/skincare1.png", title: "Wrinkle Reduction" },
        { image: "/img/skincare2.png", title: "Skin Glow Therapy" },
        { image: "/img/skincare3.png", title: "Lip Enhancement" },
        { image: "/img/skincare4.png", title: "Face Sculpting" },
        { image: "/img/skincare5.png", title: "Under Eye Care" },
        { image: "/img/skincare1.png", title: "Wrinkle Reduction" },
    ],
    Derma: [
        { image: "/img/skincare1.png", title: "Acne Treatment" },
        { image: "/img/skincare2.png", title: "Pigmentation Control" },
        { image: "/img/skincare3.png", title: "Hair Fall Therapy" },
        { image: "/img/skincare4.png", title: "Scar Reduction" },
        { image: "/img/skincare5.png", title: "Psoriasis Care" },
    ],
};

function PrevArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="absolute left-[calc(50%-60px)] -bottom-16 md:-bottom-20 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"
        >
            <ChevronLeft size={24} className="text-purple" />
        </button>
    );
}

function NextArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="absolute left-[calc(50%+10px)] -bottom-16 md:-bottom-20 z-30 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"
        >
            <ChevronRight size={24} className="text-purple" />
        </button>
    );
}

export default function SkinSolution() {
    const [activeTab, setActiveTab] = useState("Esthetic");

    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerPadding: "0px",
        speed: 600,
        cssEase: "cubic-bezier(0.25, 1, 0.5, 1)", // Custom smooth easing
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: { slidesToShow: 3 },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "50px"
                },
            },
        ],
    };

    return (
        <section className="relative py-20 md:py-32 overflow-hidden">
            {/* Background Section */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/img/skin-care-bg.png"
                    alt="Background" fill
                    className="object-fill hidden md:block"
                    priority
                />
                <Image
                    src="/img/purple-bg-mobile.png"
                    alt="Background"
                    fill
                    className="object-fill block md:hidden"
                    priority
                />
            </div>

            <div className="container relative z-10 text-center">
                <h2 className="font-gideon text-3xl md:text-6xl text-white leading-tight">
                    Our signature <span className="font-bold bg-text-gradient bg-clip-text text-transparent">Skin</span> Solutions
                </h2>

                <p className="font-raleway text-white/80 mt-4 max-w-2xl mx-auto text-sm md:text-lg">
                    Thoughtfully designed dermatology treatments for both clinical skin concerns and refined results.
                </p>

                {/* Functional Tabs */}
                <div className="flex justify-center gap-3 mt-10 mb-8 md:mb-24">
                    {Object.keys(treatmentData).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-sm md:text-base px-4 md:px-8 py-2 md:py-2.5 rounded-full font-medium transition-all duration-500 cursor-pointer border ${activeTab === tab
                                ? "bg-button-gradient text-purple border-transparent shadow-lg scale-105"
                                : "bg-transparent text-white border-white/30 hover:border-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Slider */}
                <div className="skin-slider-container">
                    <Slider {...settings} key={activeTab} className="skin-slider">
                        {treatmentData[activeTab].map((item, index) => (
                            <div key={index} className="px-3 outline-none">
                                <div className="slide-card group cursor-pointer">
                                    <div className="image-wrap relative mx-auto aspect-[3/4] md:aspect-[3/4.5] overflow-hidden rounded-2xl">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, 20vw"
                                        />
                                    </div>
                                    <p className="title text-white mt-6 text-lg md:text-2xl font-raleway transition-all duration-500 opacity-40">
                                        {item.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}
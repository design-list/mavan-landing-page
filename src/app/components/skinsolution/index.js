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
            className="absolute left-[calc(50%-56px)] -bottom-14 md:-bottom-24 z-30 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"
        >
            <ChevronLeft size={20} className="text-purple" />
        </button>
    );
}

function NextArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="absolute left-[calc(50%+8px)] -bottom-14 md:-bottom-24 z-30 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"
        >
            <ChevronRight size={20} className="text-purple" />
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
        cssEase: "cubic-bezier(0.25, 1, 0.5, 1)",
        autoplay: false,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "0px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "60px", // peek neighboring slides
                    arrows: true,
                    focusOnSelect: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: "40px",
                    arrows: true,
                    focusOnSelect: true,
                },
            },
        ],
    };

    return (
        <section className="skinsolution relative py-20 md:py-32">
            {/* Background Section */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                    src="/img/skin-care-bg.png"
                    alt="Background"
                    fill
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

            <div className="container relative z-10 text-center pt-14 pb-24 md:pb-20">
                <h2 className="font-garamond text-3xl md:text-6xl text-white leading-tight">
                    Our signature{" "}
                    <span className="font-bold bg-text-gradient bg-clip-text text-transparent">
                        Skin
                    </span>{" "}
                    Solutions
                </h2>

                <p className="font-raleway text-white/80 mt-4 max-w-2xl mx-auto text-sm md:text-lg">
                    Thoughtfully designed dermatology treatments for both clinical skin
                    concerns and refined results.
                </p>

                {/* Tabs */}
                <div className="flex justify-center gap-3 mt-10 mb-10">
                    {Object.keys(treatmentData).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-sm md:text-base px-5 md:px-8 py-2 md:py-2.5 rounded-full font-medium transition-all duration-500 cursor-pointer border ${activeTab === tab
                                ? "bg-button-gradient text-purple border-transparent shadow-lg scale-105"
                                : "bg-transparent text-white border-white/30 hover:border-white"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Slider — overflow-x hidden here, NOT on section */}
                <div className="skin-slider-container overflow-x-hidden">
                    <Slider {...settings} key={activeTab} className="skin-slider">
                        {treatmentData[activeTab].map((item, index) => (
                            <div key={index} className="px-2 md:px-3 outline-none">
                                <div className="slide-card group cursor-pointer">
                                    <div className="image-wrap relative mx-auto aspect-[3/4] md:aspect-[3/4.5] overflow-hidden rounded-2xl">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            className="object-fill transition-transform duration-700 w-full h-full"
                                            sizes="(max-width: 480px) 80vw, (max-width: 768px) 60vw, 20vw"
                                            height={100}
                                            width={100}
                                        />
                                    </div>
                                    <p className="title text-white mt-4 md:mt-6 text-base md:text-2xl font-raleway transition-all duration-500">
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
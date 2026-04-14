"use client";

import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const treatmentData = {
    "Dermatology": [
        { image: "/img/dermatology/dermatology1.png", title: "pigmentary disorder" },
        { image: "/img/dermatology/dermatology2.png", title: "inflammatory skin disorder" },
        { image: "/img/dermatology/dermatology3.png", title: "skin infections" },
        { image: "/img/dermatology/dermatology4.png", title: "Acne and acne scarring" },
        { image: "/img/dermatology/dermatology5.png", title: "Hair and scalp disorders" },
        { image: "/img/dermatology/dermatology6.png", title: "infectious dermatology" },
        { image: "/img/dermatology/dermatology7.png", title: "dermatosurgery" },
        { image: "/img/dermatology/dermatology8.png", title: "laser dermatology" }
    ],
    "Esthetics": [
        { image: "/img/esthetics/esthetics1.png", title: "anti inflammatory & barrier repair treatment " },
        { image: "/img/esthetics/esthetics2.png", title: "Glow and radiance" },
        { image: "/img/esthetics/esthetics3.png", title: "peels" },
        { image: "/img/esthetics/esthetics4.png", title: "Laser hair reduction" },
        { image: "/img/esthetics/esthetics5.png", title: "Sculpting" },
        { image: "/img/esthetics/esthetics1.png", title: "anti inflammatory & barrier repair treatment " },
        { image: "/img/esthetics/esthetics2.png", title: "Glow and radiance" },
        { image: "/img/esthetics/esthetics3.png", title: "peels" },
        { image: "/img/esthetics/esthetics4.png", title: "Laser hair reduction" },
        { image: "/img/esthetics/esthetics5.png", title: "Sculpting" }
    ],
    "Advanced & Regenerative": [
        { image: "/img/ARE/ARE1.png", title: "Anti inflammatory & barrier repair treatment" },
        { image: "/img/ARE/ARE2.png", title: "Glow and radiance" },
        { image: "/img/ARE/ARE3.png", title: "causemetic treatments" },
        { image: "/img/ARE/ARE4.png", title: "regenerative aesthetics" },
        { image: "/img/ARE/ARE5.png", title: "botched procedures and corrections" },
        { image: "/img/ARE/ARE1.png", title: "Anti inflammatory & barrier repair treatment" },
        { image: "/img/ARE/ARE2.png", title: "Glow and radiance" },
        { image: "/img/ARE/ARE3.png", title: "causemetic treatments" },
        { image: "/img/ARE/ARE4.png", title: "regenerative aesthetics" },
        { image: "/img/ARE/ARE5.png", title: "botched procedures and corrections" }
    ],
};

// Full label map — button shows short key, full name shown as tooltip/aria
const TAB_LABELS = {
    "Dermatology": "Dermatology",
    "Esthetics": "Esthetics",
    "Advanced & Regenerative": "Advanced & Regenerative Esthetics",
};

export default function SkinSolution() {
    const [activeTab, setActiveTab] = useState("Dermatology");
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(0, 0);
        }
    }, [activeTab]);

    return (
        <section className="skinsolution relative py-20 md:py-32">
            {/* Background */}
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
                    className="object-cover block md:hidden"
                    priority
                />
            </div>

            <div className="container relative z-10 text-center pt-14 pb-8 md:pb-20">
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

                {/* 3 Tabs */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3 mt-10 mb-10">
                    {Object.keys(TAB_LABELS).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            aria-label={TAB_LABELS[tab]}
                            className={`text-xs md:text-sm lg:text-base px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium transition-all duration-500 cursor-pointer border whitespace-nowrap ${activeTab === tab
                                ? "bg-button-gradient text-purple border-transparent shadow-lg scale-105"
                                : "bg-transparent text-white border-white/30 hover:border-white"
                                }`}
                        >
                            {/* Show full label on desktop, shortened on mobile for "Advanced" tab */}
                            <span className="hidden md:inline">{TAB_LABELS[tab]}</span>
                            <span className="inline md:hidden">
                                {tab === "Advanced & Regenerative" ? "Advanced" : TAB_LABELS[tab]}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Slider */}
                <div className="skin-slider-container overflow-x-hidden">
                    <Swiper
                        modules={[Navigation]}
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        loop={true}
                        centeredSlides={true}
                        slidesPerView={1}
                        speed={600}
                        slideToClickedSlide={true}
                        breakpoints={{
                            480: { slidesPerView: 3, centeredSlides: true },
                            768: { slidesPerView: 5, centeredSlides: true },
                        }}
                        className="skin-slider"
                    >
                        {treatmentData[activeTab].map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="px-2 md:px-3 outline-none">
                                    <div className="slide-card group cursor-pointer relative">
                                        <div className="image-wrap relative mx-auto aspect-[3/4] md:aspect-[3/4.8] overflow-hidden rounded-[4rem] md:rounded-[9rem]">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-fill transition-transform duration-700 group-hover:scale-105"
                                                sizes="(max-width: 480px) 80vw, (max-width: 768px) 60vw, 20vw"
                                            />
                                        </div>
                                        <p className="title text-white mt-4 md:mt-6 text-base md:text-xl font-raleway transition-all duration-500 capitalize absolute text-center w-full">
                                            {item.title}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Arrows */}
                    <div className="relative">
                        <button
                            onClick={() => swiperRef.current?.slidePrev()}
                            className="absolute left-[calc(50%-56px)] -bottom-24 md:-bottom-44 z-30 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"
                        >
                            <ChevronLeft size={20} className="text-purple" />
                        </button>
                        <button
                            onClick={() => swiperRef.current?.slideNext()}
                            className="absolute left-[calc(50%+8px)] -bottom-24 md:-bottom-44 z-30 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:scale-110 transition-transform"
                        >
                            <ChevronRight size={20} className="text-purple" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import React, { useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '../container';

const resultsData = {
    esthetic: [
        { id: 1, img: '/img/beforeafter1.png' },
        { id: 2, img: '/img/beforeafter2.png' },
        { id: 3, img: '/img/beforeafter3.png' },
        { id: 4, img: '/img/beforeafter4.png' },
        { id: 5, img: '/img/beforeafter5.png' },
        { id: 6, img: '/img/beforeafter6.png' },
        { id: 7, img: '/img/beforeafter7.png' },
        { id: 8, img: '/img/beforeafter8.png' },
    ],
    derma: [
        { id: 1, img: '/img/beforeafter1.png' },
        { id: 2, img: '/img/beforeafter2.png' },
        { id: 3, img: '/img/beforeafter3.png' },
        { id: 4, img: '/img/beforeafter4.png' },
        { id: 5, img: '/img/beforeafter5.png' },
        { id: 6, img: '/img/beforeafter6.png' },
        { id: 7, img: '/img/beforeafter7.png' },
        { id: 8, img: '/img/beforeafter8.png' },
    ],
};

export default function ResultsSlider() {
    const [activeTab, setActiveTab] = useState('esthetic');

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3.5,
        slidesToScroll: 1,
        arrows: false,
        // ✅ Continuous smooth scroll
        autoplay: true,
        autoplaySpeed: 0,        // No pause between slides
        speed: 5000,             // Each slide takes 3s to transition
        cssEase: 'linear',       // Constant velocity — no snap
        pauseOnHover: true,      // Natural pause on hover

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,   // ✅ Fixed: was outside nested settings before
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1.2, // ✅ Peek of next card on mobile
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="py-10 md:py-16 overflow-hidden">
            <Container>
                {/* Header with Title and Tabs */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <h2 className="font-garamond text-3xl md:text-5xl text-black font-bold text-center md:text-left">
                        Subtle Enhancements. Remarkable Results.
                    </h2>

                    {/* Tabs */}
                    <div className="flex bg-white border border-gray-200 rounded-full p-1 shadow-sm flex-shrink-0">
                        <button
                            onClick={() => setActiveTab('esthetic')}
                            className={`text-sm md:text-base px-4 md:px-8 py-1 md:py-2 rounded-full transition-all duration-300 font-medium cursor-pointer ${activeTab === 'esthetic'
                                ? 'bg-darkpurple text-white'
                                : 'text-gray-400 hover:text-black'
                                }`}
                        >
                            Esthetic
                        </button>
                        <button
                            onClick={() => setActiveTab('derma')}
                            className={`text-sm md:text-base px-4 md:px-8 py-1 md:py-2 rounded-full transition-all duration-300 font-medium cursor-pointer ${activeTab === 'derma'
                                ? 'bg-darkpurple text-white'
                                : 'text-gray-400 hover:text-black'
                                }`}
                        >
                            Derma
                        </button>
                    </div>
                </div>
            </Container>

            {/* Slider — full bleed outside Container so it spills to edges */}
            <div className="results-slider px-4 md:px-8">
                <Slider {...settings} key={activeTab}>
                    {resultsData[activeTab].map((item) => (
                        <div key={item.id} className="px-3">
                            <div className="relative h-[300px] md:h-[500px] rounded-[40px] overflow-hidden bg-gray-100 group">
                                <Image
                                    src={item.img}
                                    alt={`Result ${item.id}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style jsx global>{`
                .results-slider .slick-list {
                    overflow: visible;
                }
                .results-slider .slick-track {
                    display: flex !important;
                    will-change: transform; /* GPU acceleration */
                }
                .results-slider .slick-slide {
                    height: inherit !important;
                }
            `}</style>
        </section>
    );
}
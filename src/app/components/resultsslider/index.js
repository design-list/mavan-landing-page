"use client";

import React, { useState } from 'react';
import Slider from "react-slick";
import Image from 'next/image';

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from '../container';

const resultsData = {
    esthetic: [
        { id: 1, img: '/img/beforeafter1.png' },
        { id: 2, img: '/img/beforeafter2.png' },
        { id: 3, img: '/img/beforeafter3.png' },
        { id: 4, img: '/img/beforeafter1.png' },
    ],
    derma: [
        { id: 5, img: '/img/beforeafter1.png' },
        { id: 6, img: '/img/beforeafter2.png' },
    ]
};

export default function ResultsSlider() {
    const [activeTab, setActiveTab] = useState('esthetic');

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2.5, // Shows half of the next slide as per image
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
                slidesToShow: 1
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
                slidesToShow: 1,
                dots: true,
            }
        ]
    };

    return (
        <section className="py-10 md:py-16 overflow-hidden">
            <Container>
                {/* Header with Title and Tabs */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <h2 className="font-gideon text-3xl md:text-5xl text-black font-bold text-center md:text-left">
                        Subtle Enhancements. Remarkable Results.
                    </h2>

                    {/* Tabs */}
                    <div className="flex bg-white border border-gray-200 rounded-full p-1 shadow-sm">
                        <button
                            onClick={() => setActiveTab('esthetic')}
                            className={`font-sm md:font-base px-4 md:px-8 py-1 md:py-2 rounded-full transition-all duration-300 font-medium ${activeTab === 'esthetic'
                                ? 'bg-[#1f0035] text-white cursor-pointer'
                                : 'text-gray-400 hover:text-black'
                                }`}
                        >
                            Esthetic
                        </button>
                        <button
                            onClick={() => setActiveTab('derma')}
                            className={`font-sm md:font-base px-4 md:px-8 py-1 md:py-2 rounded-full transition-all duration-300 font-medium ${activeTab === 'derma'
                                ? 'bg-[#1f0035] text-white'
                                : 'text-gray-400 hover:text-black cursor-pointer'
                                }`}
                        >
                            Derma
                        </button>
                    </div>
                </div>

                {/* Slider */}
                <div className="results-slider">
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
            </Container>

            <style jsx global>{`
                .results-slider .slick-list {
                    overflow: visible;
                }
                .results-slider .slick-track {
                    display: flex !important;
                }
                .results-slider .slick-slide {
                    height: inherit !important;
                }
            `}</style>
        </section>
    );
}
"use client";

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import Image from 'next/image';
import Container from '../container';

const resultsData = {
    esthetic: [
        { id: 1, img: '/img/esthetic1.png' },
        { id: 2, img: '/img/esthetic2.png' },
        { id: 3, img: '/img/esthetic3.png' },
        { id: 4, img: '/img/esthetic4.png' },
        { id: 5, img: '/img/esthetic5.png' },
        { id: 6, img: '/img/esthetic6.png' },
        { id: 7, img: '/img/esthetic7.png' },
        { id: 8, img: '/img/esthetic8.png' },
        { id: 8, img: '/img/esthetic9.png' },
    ],
    derma: [
        { id: 1, img: '/img/dermatology1.png' },
        { id: 2, img: '/img/dermatology2.png' }
    ],
};

export default function ResultsSlider() {
    const [activeTab, setActiveTab] = useState('esthetic');

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
                            Dermatology
                        </button>
                    </div>
                </div>
            </Container>

            {/* Slider — full bleed outside Container so it spills to edges */}
            <div className="results-slider px-4 md:px-8">
                <Swiper
                    key={activeTab}
                    modules={[Autoplay, FreeMode]}
                    loop={true}
                    freeMode={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}
                    slidesPerView={1.2}
                    spaceBetween={12}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3.5 },
                    }}
                >
                    {resultsData[activeTab].map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="px-3">
                                <div className="relative h-[300px] md:h-[500px] rounded-[40px] overflow-hidden bg-gray-100 group">
                                    <Image
                                        src={item.img}
                                        alt={`Result ${item.id}`}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <style jsx global>{`
                .results-slider .swiper {
                    overflow: visible;
                }
                @media (max-width: 640px) {
                    .results-slider .swiper {
                        overflow: hidden;
                    }
                }
                .results-slider .swiper-wrapper {
                    transition-timing-function: linear !important;
                }
            `}</style>
        </section>
    );
}

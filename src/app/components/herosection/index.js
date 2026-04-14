"use client";

import Image from "next/image";
import Container from "../container";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { useConsultation } from "../../context/ConsultationContext";

import Logo from "@/icons/logo.svg";
import Bgbanner from "@/img/hero-banner.png";
import BgbannerMobile from "@/img/hero-banner-mobile.png";
import Bgbanner2 from "@/img/hero-banner2.png";
// import BgbannerMobile from "@/img/hero-banner-mobile.png";

const slides = [
    {
        tagline: "Maven Esthetics",
        heading: (
            <>
                At ME, it's all about{" "}
                <span className="bg-text-gradient bg-clip-text text-transparent inline-block">
                    You.
                </span>
            </>
        ),
        sub: "From clinical skin concerns to aesthetic refinement.",
        bg: Bgbanner,
        mobileBg: BgbannerMobile,
    },
    {
        tagline: "Maven Esthetics",
        heading: (
            <>
                Your skin deserves the{" "}
                <span className="bg-text-gradient bg-clip-text text-transparent inline-block">
                    Best.
                </span>
            </>
        ),
        sub: "Doctor-led treatments tailored to your unique skin.",
        bg: Bgbanner2,
        mobileBg: Bgbanner2,
    },
    // {
    //     tagline: "Maven Esthetics",
    //     heading: (
    //         <>
    //             Trusted by those who expect{" "}
    //             <span className="bg-text-gradient bg-clip-text text-transparent inline-block">
    //                 Results.
    //             </span>
    //         </>
    //     ),
    //     sub: "Advanced aesthetics with a human touch.",
    //     bg: Bgbanner,
    //     mobileBg: BgbannerMobile,
    // },
];

export default function HeroSection() {
    const { open } = useConsultation();

    return (
        <section className="relative">
            {/* Header stays OUTSIDE slider */}
            <Container>
                <header className="absolute top-4 left-0 w-full z-20">
                    <div className="container flex items-center justify-between w-full px-0 py-0 md:py-4">
                        <Image src={Logo} alt="Logo" width={140} height={50} />
                        <button
                            onClick={open}
                            className="theme-button hidden md:block"
                        >
                            Book a consultation
                        </button>
                    </div>
                </header>
            </Container>

            {/* HERO SLIDER */}
            <Swiper
                modules={[Autoplay, Pagination]}
                loop={true}
                speed={1000}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                pagination={{ clickable: true }}
                slidesPerView={1}
                className="hero-slider"
            >
                {slides.map((slide, i) => (
                    <SwiperSlide key={i}>
                        <div className="relative h-screen overflow-hidden">

                            {/* Background Image per slide */}
                            <div className="absolute inset-0">
                                <Image
                                    src={slide.bg}
                                    alt="Hero"
                                    fill
                                    className="object-fill w-full hidden md:block md:z-10"
                                    priority
                                />
                                <Image
                                    src={slide.mobileBg}
                                    alt="Hero"
                                    fill
                                    className="object-fill w-full block md:hidden"
                                    priority
                                />
                            </div>

                            {/* Content */}
                            <Container>
                                <div className="relative z-10 flex flex-col items-center justify-center text-center h-screen">
                                    <span className="font-hurricane font-light text-4xl md:text-5xl xl:text-6xl text-golden mb-4">
                                        {slide.tagline}
                                    </span>

                                    <h1 className="font-raleway text-white text-xl md:text-3xl xl:text-5xl 2xl:text-6xl leading-tight font-semibold">
                                        {slide.heading}
                                    </h1>

                                    <p className="text-white font-light text-base md:text-3xl mt-1">
                                        {slide.sub}
                                    </p>

                                    <button
                                        onClick={open}
                                        className="font-raleway mt-8 bg-linear-bg bg-clip-text text-transparent inline-block text-base md:text-lg font-semibold cursor-pointer"
                                    >
                                        Book a consultation →
                                    </button>

                                    {/* Stats */}
                                    <div className="font-raleway flex md:gap-10 mt-16 md:mt-24 2xl:mt-32 text-white flex-wrap justify-center font-light text-lg">
                                        <div className="flex gap-2">
                                            <i className="bg-linear-bg bg-clip-text text-transparent inline-block text-2xl md:text-4xl font-bold">
                                                5
                                            </i>
                                            <span>Star Rated</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <i className="bg-linear-bg bg-clip-text text-transparent inline-block text-2xl md:text-4xl font-bold">
                                                3,500+
                                            </i>
                                            <span>Happy Skin Transformations</span>
                                        </div>
                                        <div className="flex gap-2">
                                            <i className="bg-linear-bg bg-clip-text text-transparent inline-block text-2xl md:text-4xl font-bold">
                                                15+
                                            </i>
                                            <span>Years of Experience</span>
                                        </div>
                                    </div>
                                </div>
                            </Container>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Dots Styling */}
            <style jsx global>{`
                .hero-slider .swiper-pagination {
                    bottom: 8rem !important;
                }
                .hero-slider .swiper-pagination-bullet {
                    background: #e3b16f;
                    opacity: 0.4;
                    width: 10px;
                    height: 10px;
                }
                .hero-slider .swiper-pagination-bullet-active {
                    background: #e3b16f;
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}

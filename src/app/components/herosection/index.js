"use client";

import Image from "next/image";
import Container from "../container";


import Logo from '@/icons/logo.svg';
import Bgbanner from '@/img/hero-banner.png';
import BgbannerMobile from '@/img/hero-banner-mobile.png';
import { useConsultation } from "../../context/ConsultationContext";

export default function HeroSection() {
    const { open } = useConsultation();

    return (
        <section className="relative h-screen">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src={Bgbanner}
                    alt="Hero"
                    fill
                    className="object-fill w-full hidden md:block"
                    priority
                />
                <Image
                    src={BgbannerMobile}
                    alt="Hero"
                    fill
                    className="object-fill w-full block md:hidden"
                    priority
                />
            </div>

            <Container>
                {/* Header */}
                <header className="relative top-4 z-10 ">
                    <div className="container flex items-center justify-between w-full px-0 py-0 md:py-4">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={140}
                            height={50}
                        />

                        <button onClick={open} className="theme-button hidden md:block">
                            Book a consultation
                        </button>
                    </div>
                </header>

                {/* Center Content */}
                <div className="relative z-10 flex flex-col items-center justify-center mt-24 md:mt-48 text-center">
                    <span className="font-hurricane font-light text-4xl md:text-5xl xl:text-6xl text-golden mb-4">
                        Maven Esthetics
                    </span>

                    <h1 className="font-raleway text-white text-xl md:text-3xl xl:text-5xl 2xl:text-6xl leading-tight font-semibold">
                        At ME, it's all about{" "}
                        <span className="bg-text-gradient font- bg-clip-text text-transparent inline-block">
                            You.
                        </span>
                    </h1>

                    <p className="text-white font-light text-base md:text-3xl mt-1">
                        From clinical skin concerns to aesthetic refinement.
                    </p>

                    <button
                        onClick={open}
                        className="font-raleway mt-8 bg-linear-bg bg-clip-text text-transparent inline-block text-base md:text-lg font-semibold cursor-pointer"
                    >
                        Book a consultation →
                    </button>

                    {/* Stats */}
                    <div className="font-raleway flex md:gap-10 mt-28 md:mt-48 text-white flex-wrap justify-center font-light text-lg">
                        <div className="flex gap-2" >
                            <i className="bg-linear-bg bg-clip-text text-transparent inline-block text-2xl md:text-4xl font-bold">5</i>
                            <span className="">Star Rated</span>
                        </div>

                        <div className="flex gap-2">
                            <i className="bg-linear-bg bg-clip-text text-transparent inline-block text-2xl md:text-4xl font-bold">3,500+</i>
                            <span className="">Happy Skin Transformations</span>
                        </div>

                        <div className="flex gap-2">
                            <i className="bg-linear-bg bg-clip-text text-transparent inline-block text-2xl md:text-4xl font-bold">15+</i>
                            <span className="">Years of Experience</span>
                        </div>
                    </div>
                </div>
            </Container>
            {/* Bottom Curve */}
            {/* <div className="absolute bottom-0 left-0 w-full h-40 bg-white rounded-t-[100%]" /> */}
        </section>
    );
}
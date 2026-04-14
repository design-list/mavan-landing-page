"use client";

import Slider from "react-slick";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import HeroSection from "./components/herosection";
import SkinSolution from "./components/skinsolution";
import DoctorSection from "./components/doctorsection";
import ExpertSection from "./components/expertsection";
import TrustedSection from "./components/trustedsection";
import TestimonialMarquee from "./components/testimonials";
import ResultsSlider from "./components/resultsslider";
import FAQSection from "./components/faqsection";
import Footer from "./components/footer";

import CurveLine from "@/icons/curve.svg";
import Expertbg from "@/icons/expert-bg.svg";
import ExpertbgMobile from "@/img/expert-bg-mobile.png";
import Dots from "@/icons/2dots.svg";
import { useConsultation } from "./context/ConsultationContext";

const logos = [
  "/img/brands1.png",
  "/img/brands2.png",
  "/img/brands3.png",
  "/img/brands4.png",
  "/img/brands5.png",
  "/img/brands6.png",
  "/img/brands7.png",
  "/img/brands8.png",
];

const settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

export default function Home() {
  const { open } = useConsultation();

  return (
    <>
      {/* Hero Section  */}
      <HeroSection />

      {/* Section Two  */}
      <section className="second-section py-6 md:py-14 relative">
        <div className="container text-center">
          {/* Small Top Text */}
          <p className="font-raleway text-purple text-lg md:text-2xl mb-8 font-light">
            Where refined aesthetics meet natural confidence!
          </p>

          {/* Main Heading */}
          <h2 className="font-garamond text-2xl md:text-4xl leading-[1.25] max-w-6xl mx-auto">
            We are MAVEN ESTHETICS - an MD Dermatologist-led skin & hair clinic,
            thoughtfully designed around{" "}
            <span className="inline-block bg-text-gradient bg-clip-text text-transparent font-semibold">you.</span>
          </h2>

          {/* Button */}
          <div className="mt-6 md:mt-12">
            <button onClick={open} className="theme-button inline-flex items-center gap-2">
              Book a consultation
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Logos */}
          <Slider {...settings} className="mt-8 md:mt-20 brand-slider">
            {logos.map((logo, index) => (
              <div key={index} className="px-3">
                <div className="flex justify-center items-center">
                  <Image
                    src={logo}
                    alt="brand"
                    width={180}
                    height={70}
                    className="object-contain grayscale mx-auto"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="absolute -bottom-12 md:-bottom-32 3xl:-bottom-32 " >
          <Image src={CurveLine} width={100} height={100} alt="Curve Line" className="w-full" />
        </div>
      </section>

      {/* Section Three  */}
      <SkinSolution />

      {/* Section four  */}
      <DoctorSection />

      {/* Section five  */}
      <ExpertSection />

      {/* Section Six  */}
      <TrustedSection />

      {/* Section Seven  */}
      <TestimonialMarquee />

      {/* Section Eight  */}
      <ResultsSlider />

      {/* Section Nine  */}
      <section className="relative overflow-hidden py-8 w-full">
        {/* Background — inset-0 + w-full h-full ensures true edge-to-edge */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={Expertbg}
            alt="Background"
            fill
            className="object-cover hidden md:block"
            priority
          />
          <Image
            src={ExpertbgMobile}
            alt="Background"
            fill
            className="object-cover block md:hidden"
            priority
          />
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 md:gap-16 items-center py-10 md:min-h-[420px]">

            {/* Left Heading */}
            <div>
              <h2 className="font-garamond text-white text-3xl md:text-5xl leading-tight max-w-2xl">
                The Foundation Of True Expertise
              </h2>
            </div>

            {/* Right Quote */}
            <div className="max-w-3xl">
              <div className="mt-3 md:mb-6">
                <Image src={Dots} alt="Dots" className="w-[50px] md:w-[100px]" />
              </div>
              <p className="text-white text-base md:text-2xl leading-relaxed font-light">
                We believe the best aesthetic work is invisible - when people
                notice you, not the treatment.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Section Eleven  */}
      <FAQSection />

      {/* Section Eleven  */}
      <Footer />

    </>
  );
}

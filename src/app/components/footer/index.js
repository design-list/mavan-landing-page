"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Logo from "@/icons/logo.svg";

import Twitter from '@/icons/twitter.svg';
import Facebook from '@/icons/facebook.svg';
import Instagram from '@/icons/instagram.svg';
import Github from '@/icons/github.svg';

import FooterBg from '@/img/footer-bg.png';
import FooterBgMobile from '@/img/footer-bg-mobile.png';

export default function Footer() {
    return (
        <footer className="relative pt-8 pb-10 mt-8">
            <div className="absolute inset-0">
                <Image src={FooterBg} alt="Background" fill className="object-fill hidden md:block " priority />
                <Image src={FooterBgMobile} alt="Background" fill className="object-fill block md:hidden" priority />
            </div>
            <div className="container relative z-10">
                {/* Logo */}
                <div className="flex justify-center">
                    <div className="">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={254}
                            height={100}
                            className="object-contain w-[190px] md:w-[254px]"
                        />
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mt-8 md:mt-14">
                    <h2 className="font-gideon text-white text-3xl md:text-4xl leading-tight">
                        Your Skin Deserves{" "}
                        <span className="inline-block bg-text-gradient bg-clip-text text-transparent font-bold">Expert Care</span>
                    </h2>

                    <p className="mt-6 text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed">
                        Explore our wellness therapies that are crafted to soothe your spirit,
                        calm your mind, and restore your inner balance.
                    </p>

                    {/* CTA */}
                    <button className="theme-button mt-10 px-8 py-4 inline-flex items-center gap-3">
                        Book a consultation
                        <ArrowRight size={20} />
                    </button>
                </div>

                {/* Divider */}
                <div className="border-t border-white/30 mt-8 pt-4 flex flex-col-reverse md:flex-col lg:flex-row justify-between items-center gap-6">

                    {/* Left Links */}
                    <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-xs md:text-sm text-white">
                        <span>2025 All rights reserved</span>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms & Conditions</Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        {[Twitter, Instagram, Facebook, Github].map((Icon, index) => (
                            <div
                                key={index}
                                className="w-8 md:w-11 h-8 md:h-11"
                            >
                                <Image src={Icon} alt="social icon" width={40} height={40} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </footer>
    );
}
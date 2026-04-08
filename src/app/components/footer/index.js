"use client";

import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/icons/logo.svg";

import Twitter from '@/icons/twitter.svg';
import Facebook from '@/icons/facebook.svg';
import Instagram from '@/icons/instagram.svg';
import Github from '@/icons/github.svg';

import FooterBg from '@/img/footer-bg.png';
import FooterBgMobile from '@/img/footer-bg-mobile.png';
import { useConsultation } from "../../context/ConsultationContext";

function PolicyModal({ isOpen, onClose, title, children }) {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <div
                className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl"
                onClick={e => e.stopPropagation()}
            >
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors"
                        aria-label="Close"
                    >
                        <X size={22} />
                    </button>
                </div>
                <div className="overflow-y-auto px-6 py-5 text-sm text-gray-600 leading-relaxed space-y-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default function Footer() {
    const { open } = useConsultation();
    const [showPrivacy, setShowPrivacy] = useState(false);
    const [showTerms, setShowTerms] = useState(false);

    return (
        // ✅ Fragment wraps footer + modals as a single root
        <>
            <footer className="relative pt-8 pb-10 mt-8">
                <div className="absolute inset-0">
                    <Image src={FooterBg} alt="Background" fill className="object-fill hidden md:block" priority />
                    <Image src={FooterBgMobile} alt="Background" fill className="object-fill block md:hidden" priority />
                </div>

                <div className="container relative z-10">
                    {/* Logo */}
                    <div className="flex justify-center">
                        <Image
                            src={Logo}
                            alt="Logo"
                            width={254}
                            height={100}
                            className="object-contain w-[190px] md:w-[254px]"
                        />
                    </div>

                    {/* Heading */}
                    <div className="text-center mt-8 md:mt-14">
                        <h2 className="font-garamond text-white text-3xl md:text-4xl leading-tight">
                            Your Skin Deserves{" "}
                            <span className="inline-block bg-text-gradient bg-clip-text text-transparent font-bold">
                                Expert Care
                            </span>
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-white max-w-3xl mx-auto leading-relaxed">
                            Explore our wellness therapies that are crafted to soothe your spirit,
                            calm your mind, and restore your inner balance.
                        </p>

                        <button onClick={open} className="theme-button mt-10 px-8 py-4 inline-flex items-center gap-3">
                            Book a consultation
                            <ArrowRight size={20} />
                        </button>
                    </div>

                    {/* Divider + Bottom Bar */}
                    <div className="border-t border-white/30 mt-8 pt-4 flex flex-col-reverse md:flex-col lg:flex-row justify-between items-center gap-6">

                        {/* Left Links */}
                        <div className="flex flex-wrap justify-center gap-4 md:gap-10 text-xs md:text-sm text-white">
                            <span>@2025 All rights reserved</span>
                            <button onClick={() => setShowPrivacy(true)} className="hover:underline cursor-pointer">
                                Privacy & Policy
                            </button>
                            {/* <button onClick={() => setShowTerms(true)} className="hover:underline">
                                Terms & Conditions
                            </button> */}
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {[Twitter, Instagram, Facebook, Github].map((Icon, index) => (
                                <div key={index} className="w-8 md:w-11 h-8 md:h-11">
                                    <Image src={Icon} alt="social icon" width={40} height={40} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>

            {/* ✅ Modals outside <footer> but inside the Fragment — renders correctly in DOM */}
            <PolicyModal isOpen={showPrivacy} onClose={() => setShowPrivacy(false)} title="Privacy Policy">
                <p className="text-xs text-gray-400">Last updated: 10.10.2022</p>

                <p>If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at <a href="mailto:contact@mavenesthetics.in" className="text-purple underline">contact@mavenesthetics.in</a>. We consider the privacy of our visitors to be extremely important. This privacy policy document describes in detail the types of personal information collected by www.mavenesthetics.in and how we use it.</p>

                <h3 className="font-semibold text-gray-800">Log Files</h3>
                <p>Like many other websites, www.mavenesthetics.in makes use of log files. These files merely log visitors into the site – usually a standard procedure for hosting companies and a part of hosting services' analytics. The information inside the log files includes Internet Protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. This information is used to analyze trends, administer the site, track users' movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.</p>

                <h3 className="font-semibold text-gray-800">Information Collected By Us</h3>
                <p>Contact information. We might collect your name, email, mobile number, phone number, street, city, state, pin code, country and IP address. We collect the information you post in a public space, on our website or on a third-party social media site belonging to Maven Esthetics.</p>

                <h3 className="font-semibold text-gray-800">Demographic Information</h3>
                <p>We may collect demographic information about you, events you like, events you intend to participate in, tickets you buy, or any other information provided during the use of our website. We might collect this as a part of a survey also.</p>

                <h3 className="font-semibold text-gray-800">Other Information</h3>
                <p>If you use our website, we may collect information about your IP address and the browser you're using. We might look at what site you came from, the duration of time spent on our website, pages accessed or what site you visit when you leave us. We might also collect the type of mobile device you are using, or the version of the operating system your computer or device is running.</p>

                <h3 className="font-semibold text-gray-800">We Collect Information in Different Ways</h3>
                <p><span className="font-medium text-gray-700">Directly from you:</span> We collect information directly from you when you register for an event or buy tickets. We also collect information if you post a comment on our websites or ask us a question through phone or email.</p>
                <p><span className="font-medium text-gray-700">Passively:</span> We use tracking tools like Google Analytics, Google Webmaster, browser cookies and web beacons for collecting information about your usage of our website.</p>
                <p><span className="font-medium text-gray-700">From third parties:</span> For example, if you use an integrated social media feature on our websites. The third-party social media site will give us certain information about you. This could include your name and email address.</p>

                <h3 className="font-semibold text-gray-800">Use of Your Personal Information</h3>
                <p>We use your information to contact you, respond to your requests, improve our products and services, analyze site trends, ensure security, send marketing communications, and send transactional communications such as emails or SMS about your account or purchases. We also use information as otherwise permitted by law.</p>

                <h3 className="font-semibold text-gray-800">Sharing of Information With Third-Parties</h3>
                <p>We share information with third parties who perform services on our behalf (e.g. payment processors), event organizers, and business partners. We may also share information to comply with the law, protect ourselves, or in the event of a business transfer. We will notify you before sharing your information for any reasons not described in this policy.</p>

                <h3 className="font-semibold text-gray-800">Email Opt-Out</h3>
                <p>To stop receiving promotional emails, please email <a href="mailto:contact@mavenesthetics.in" className="text-purple underline">contact@mavenesthetics.in</a>. It may take about ten days to process your request. Transactional messages will still be sent.</p>

                <h3 className="font-semibold text-gray-800">Third-Party Sites</h3>
                <p>If you click on links to third-party websites, you may be taken to websites we do not control. This policy does not apply to those websites. We are not responsible for third-party sites.</p>

                <h3 className="font-semibold text-gray-800">Grievance Officer</h3>
                <p>In accordance with the Information Technology Act 2000, the Grievance Officer details are:</p>
                <p>
                    <span className="font-medium text-gray-700">Sheetal Singh</span><br />
                    Maven Esthetics – Versova, Mumbai 400061<br />
                    Phone: <a href="tel:+917777056250" className="text-purple underline">+91 77770 56250</a><br />
                    Email: <a href="mailto:contact@mavenesthetics.in" className="text-purple underline">contact@mavenesthetics.in</a>
                </p>

                <h3 className="font-semibold text-gray-800">Online Privacy Policy Only</h3>
                <p>This privacy policy applies only to our online activities and is valid for visitors to our website. It does not apply to any information collected offline or via channels other than this website.</p>

                <h3 className="font-semibold text-gray-800">Jurisdiction</h3>
                <p>Your visit and any dispute over privacy is subject to this Policy and the website's terms of use. Any disputes arising under this Policy shall be governed by the laws of India.</p>
            </PolicyModal>
        </>
    );
}